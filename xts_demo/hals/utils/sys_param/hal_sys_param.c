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

#include "hal_sys_param.h"

static const char OHOS_SERIAL[] = {"1234567890"};   // if not provid serial algorithm,Serial will use this default value.

const char *HalGetSerial(void)
{
    return OHOS_SERIAL;
}

/**
 * @brief implement for js kvstorekit/filekit
 */
const char *GetDataPath(void)
{
    return "/data";
}

typedef enum InitLogLevel {
    INIT_DEBUG = 0,
    INIT_INFO,
    INIT_WARN,
    INIT_ERROR,
    INIT_FATAL
} InitLogLevel;

void StartupLog(InitLogLevel logLevel, unsigned int domain, const char *tag, const char *fmt, ...)
{
    return;
}