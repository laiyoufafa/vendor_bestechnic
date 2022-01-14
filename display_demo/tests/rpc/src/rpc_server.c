/*
 * Copyright (c) 2021 Bestechnic (Shanghai) Co., Ltd. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <pthread.h>

#include "cmsis_os2.h"
#include "ohos_init.h"
#include "rpc_mini_samgr.h"
#include "ipc_skeleton.h"
#include "serializer.h"
#include "rpc_log.h"
#include "rpc_errno.h"

#define SAID 16
#define DEFAULT_THREAD_STACK_SIZE 10240
#define TEST_DELAY_MILLISECONDS 20000
#define TEST_SERVER_DELAY_MILLISECONDS 4000

enum {
    OP_ADD = 1,
    OP_SUB = 2,
    OP_MULTI = 3,
};

static int32_t RemoteRequestOne(uint32_t code, IpcIo *data, IpcIo *reply, MessageOption option)
{
    int32_t result = ERR_NONE;
    RPC_LOG_INFO("server OnRemoteRequestOne called....");
    sleep(1);
    switch (code) {
        case OP_ADD: {
            int32_t a;
            ReadInt32(data, &a);
            int32_t b;
            ReadInt32(data, &b);
            RPC_LOG_INFO("RemoteRequestOne add called a = %d, b = %d", a, b);
            sleep(1);
            WriteInt32(reply, a + b);
            break;
        }
        case OP_SUB: {
            int32_t a;
            ReadInt32(data, &a);
            int32_t b;
            ReadInt32(data, &b);
            RPC_LOG_INFO("RemoteRequestOne sub called a = %d, b = %d", a, b);
            WriteInt32(reply, a - b);
            break;
        }
        case OP_MULTI: {
            int32_t a;
            ReadInt32(data, &a);
            int32_t b;
            ReadInt32(data, &b);
            RPC_LOG_INFO("RemoteRequestOne mulit called a = %d, b = %d", a, b);
            WriteInt32(reply, a * b);
            break;
        }
        default:
            RPC_LOG_ERROR("unknown code %d", code);
            break;
    }
    return result;
}

static void RpcServerMain(void)
{
    osDelay(TEST_SERVER_DELAY_MILLISECONDS);
    RPC_LOG_INFO("RpcServerMain start");

    IpcObjectStub *objectStubOne = (IpcObjectStub *)calloc(1, sizeof(IpcObjectStub));
    if (objectStubOne == NULL) {
        RPC_LOG_ERROR("objectStubOne calloc failed");
        return;
    }
    objectStubOne->func = RemoteRequestOne;
    objectStubOne->isRemote = false;

    printf("RpcServerMain func %x\n", objectStubOne->func);
    sleep(1);

    SvcIdentity svcOne = {
        .handle = -1,
        .token  = (uintptr_t)objectStubOne,
        .cookie = (uintptr_t)objectStubOne
    };

    if (AddRemoteSystemAbility(SAID, &svcOne) != ERR_NONE) {
        RPC_LOG_INFO("AddRemoteSystemAbility failed");
        return;
    }

    RPC_LOG_INFO("JoinWorkThread start");

    return;
}

static void RpcServerTest(void)
{
    osDelay(TEST_DELAY_MILLISECONDS);
    printf("[%s:%d]: %s\n", __FILE__, __LINE__, __func__);
    printf("RpcServerTest\n");
    printf("RemoteRequestOne %x\n", RemoteRequestOne);

    pthread_t threadId;
    pthread_attr_t threadAttr;
    int ret = pthread_attr_init(&threadAttr);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_attr_init failed %d", ret);
        return ERR_FAILED;
    }

    if (pthread_attr_setstacksize(&threadAttr, DEFAULT_THREAD_STACK_SIZE) != 0) {
        RPC_LOG_ERROR("pthread_attr_setstacksize failed");
        return ERR_FAILED;
    }

    ret = pthread_create(&threadId, &threadAttr, RpcStartSamgr, NULL);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_create failed %d", ret);
        return ERR_FAILED;
    }
    pthread_detach(threadId);

    pthread_t threadId2;
    pthread_attr_t threadAttr2;
    ret = pthread_attr_init(&threadAttr2);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_attr_init failed %d", ret);
        return ERR_FAILED;
    }

    if (pthread_attr_setstacksize(&threadAttr2, DEFAULT_THREAD_STACK_SIZE) != 0) {
        RPC_LOG_ERROR("pthread_attr_setstacksize failed");
        return ERR_FAILED;
    }

    ret = pthread_create(&threadId2, &threadAttr2, RpcServerMain, NULL);
    if (ret != 0) {
        RPC_LOG_ERROR("pthread_create failed %d", ret);
        return ERR_FAILED;
    }
    pthread_detach(threadId2);
}

APP_FEATURE_INIT(RpcServerTest);