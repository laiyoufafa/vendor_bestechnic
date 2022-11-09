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

/**
 * @brief implement for js kvstorekit/filekit
 */
const char *GetDataPath(void)
{
    return "/data";
}

const char *GetSecurityPatchTag(void)
{
    return OHOS_SECURITY_PATCH_TAG;
}

const char *GetAbiList(void)
{
    return OHOS_ABI_LIST;
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

int SystemReadParam(const char *name, char *value,  unsigned int *len)
{
    return len;
}