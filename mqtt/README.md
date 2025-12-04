**Command Topics (publish to locks):**

*   locks/{lock\_id}/cmd/lock - Lock the device

    `{
        deviceId: 'FSSIOT.1.1.1.404CCA43A084',
        message: {
          state: 'lock'
        },
        systemId: '8VNXq9YqBXL4WiWmnrwj'
    }`

*   locks/{lock\_id}/cmd/unlock - Unlock the device

    `{
        deviceId: 'FSSIOT.1.1.1.404CCA43A084',
        message: {
          state: 'unlock'
        },
        systemId: '8VNXq9YqBXL4WiWmnrwj'
    }`

*   locks/{lock\_id}/cmd/logs - Request logs from lock

*   locks/{lock\_id}/cmd/config - Update configuration (a'la PATCH - partial)

      `{
          deviceId: 'FSSIOT.1.1.1.404CCA43A084',
          message: {
            adminPin: 'e470029a45506d1b50ea3d125a295cf4820aeb1768f8d760b0a0fe020780a2ab'
            alias: 'FSS Andro'
            connected: true
            createdAt: 'November 4, 2025 at 11:24:13AM UTC+1'
            createdBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
            fw: '1.0.10'
            groups: ['id1', 'id2']
            mac: '22:33:44:55:66:11'
            name: 'Keypad_0'
            privacyMode: false
            serverSynchronization: true
            remoteUnlock: false
            sn: 'FSSIOT.1.1.1.404CCA43F084'
            state: 'locked' | 'unlocked' | 'pending'
            syncedAt: 'November 4, 2025 at 11:24:13AM UTC+1' 
            updatedAt: 'November 4, 2025 at 11:24:13AM UTC+1'
            updatedBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
          },
          systemId: '8VNXq9YqBXL4WiWmnrwj'
      }`

*   locks/{lock\_id}/cmd/passcodes - Update passcodes

      `{
        deviceId: 'FSSIOT.1.1.1.404CCA43A084',        
        action: 'sync' | 'delete',
        passcode: {
          calendar?: {
            sunday: {
              from: 16200,
              to: 57600
            }
          },
          createdAt: 'November 26, 2025 at 11:21:38AM UTC+1',
          createdBy: 'QeOicm4IZoRT2zJ2nuLpbWXIgLu1',
          name: 'Test 1',
          passcode: 'cd1dbd3d27f4a37491609cb0c69d52e65c7f5c91ebd066941b2ecf0e5d90b44e',
          type: 'CALENDAR_RANGE' | 'LIFETIME' | 'TIME_RANGE',
          uid?: 'QeOicm4IZoRT2zJ2nuLpbWXIgLu1',
          updatedAt: 'November 26, 2025 at 11:21:38AM UTC+1',
          updatedBy: 'QeOicm4IZoRT2zJ2nuLpbWXIgLu1',
          user?: {
            emial: 'jm0@fss.cc',
            name: 'J M'
          },
          validFrom?: 1764152437,
          validTo?: 1764152437
        },
        systemId: '8VNXq9YqBXL4WiWmnrwj',
      }`

**Status Topics (locks publish):**

*   locks/{lock\_id}/status/state - Current lock state (locked/unlocked)

*   locks/{lock\_id}/status/heartbeat - Periodic health checks

*   locks/{lock\_id}/logs - Event logs and audit trail

**Configuration Topics:**

*   locks/{lock\_id}/config/current - Current config (published by lock)

*   locks/{lock\_id}/config/get - Request config from lock

**Configuration for rules automations (v0 ):**

*   "locks/+/status/heartbeat":

*   **API:** /receive-from-mqtt | **POST**

*   { "topic": "${topic}", "payload": ${payload}}

*   SELECT topic, payloadFROM "locks/+/status/heartbeat"

*   "locks/+/logs":

*   **API:** /receive-from-mqtt | **POST**

*   { "topic": "${topic}", "payload": ${payload}}

*   SELECT topic, payloadFROM "locks/+/logs"

*   "locks/+/status/state":

*   **API:** /on-receive-state | **POST**

*   { "topic": "${topic}", "payload": ${payload}}

*   SELECT topic, payloadFROM "locks/+/status/state"**Command Topics (publish to locks):**

-   locks/{lock_id}/cmd/lock - Lock the device

-   locks/{lock_id}/cmd/unlock - Unlock the device

-   locks/{lock_id}/cmd/logs - Request logs from lock

-   locks/{lock_id}/cmd/config - Update configuration (a'la PATCH - partial)

**Status Topics (locks publish):**

-   locks/{lock_id}/status/state - Current lock state (locked/unlocked)

-   locks/{lock_id}/status/heartbeat - Periodic health checks

-   locks/{lock_id}/logs - Event logs and audit trail

**Configuration Topics:**

-   locks/{lock_id}/config/current - Current config (published by lock)

-   locks/{lock_id}/config/get - Request config from lock

**Configuration for rules automations (v0** **):**

-   "locks/+/status/heartbeat":

    -   **API:** /receive-from-mqtt | **POST**

    -   **Payload:**

        `{
          "topic": "${topic}",
          "payload": ${payload}
        }`

    -   **SQL query:**

        `SELECT
          topic,
          payload
        FROM
          "locks/+/status/heartbeat"`
    -   **Heartbeat:**
        `{
          deviceId: 'FSSIOT.1.1.1.404CCA43A084',
          message: {
            type: 'heartbeat'
          },
          systemId: '8VNXq9YqBXL4WiWmnrwj',
          triggeredAt: '2025-11-26T10:15:30.000Z'
        }`

-   "locks/+/logs":

    -   **API:** /on-logs-sync | **POST**

    -   **Payload:**

        `{
          "topic": "${topic}",
          "payload": ${payload}
        }`

    -   **SQL query:**

        `SELECT
          topic,
          payload
        FROM
          "locks/+/logs"`

    -   **Logs:**
        `{
          deviceId: FSSIOT.1.1.1.404CCA43A084,
          logs: [
            {
              message: {
                data: {
                  state: 'locked'
                },
                method: 'remote',
                type: 'state_change'
                method: 'remote' | 'fingerprint' | 'passcode' | 'nfc'
              }
            },
            {
              message: {
                type: 'heartbeat'
              }
            }
          ],
          systemId: '8VNXq9YqBXL4WiWmnrwj'
        }`

-   "locks/+/status/state":

    -   **API:** /on-receive-state | **POST**

    -   **Payload:**

        `{
          "topic": "${topic}",
          "payload": ${payload}
        }`

    -   **SQL query:**

        `SELECT
          topic,
          payload
        FROM
          "locks/+/status/state"`
    
    -   **State data:**
    
        `{
            deviceId: 'FSSIOT.1.1.1.404CCA43A084',
            message: {
              data: {
                state: 'locked' | 'unlocked' // required
                invokedBy: 'John Doe', // optional
                invokerId: 'asjhdajkshd', // optional
                passcodeId: 'asjhdajkshd', // optional
                nfcId: 'asjhdajkshd', // optional
                fingerprintId: 'asjhdajkshd', // optional
              },
              method: 'remote' | 'fingerprint' | 'passcode' | 'nfc',
              type: 'state_change'
            },
            systemId: '8VNXq9YqBXL4WiWmnrwj',
            triggeredAt: '2025-11-26T10:15:30.000Z'
        }`

-   "locks/+/status/config":

    -   **API:** /on-receive-config | **POST**

    -   **Payload:**

        `{
          "topic": "${topic}",
          "payload": ${payload}
        }`

    -   **SQL query:**

        `SELECT
          topic,
          payload
        FROM
          "locks/+/status/config"`

    -   **Config data:**

        `{
            deviceId: 'FSSIOT.1.1.1.404CCA43A084',
            message: {
              data: {
                adminPin: 'e470029a45506d1b50ea3d125a295cf4820aeb1768f8d760b0a0fe020780a2ab'
                alias: 'FSS Andro'
                connected: true
                createdAt: 'November 4, 2025 at 11:24:13AM UTC+1'
                createdBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
                fw: '1.0.10'
                groups: ['id1', 'id2']
                mac: '22:33:44:55:66:11'
                name: 'Keypad_0'
                privacyMode: false
                serverSynchronization: true
                remoteUnlock: false
                sn: 'FSSIOT.1.1.1.404CCA43F084'
                state: 'locked' | 'unlocked' | 'pending'
                syncedAt: 'November 4, 2025 at 11:24:13AM UTC+1' 
                updatedAt: 'November 4, 2025 at 11:24:13AM UTC+1'
                updatedBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
              },
              method: 'remote' | 'fingerprint' | 'passcode' | 'nfc',
              type: 'config_change'
            },
            systemId: '8VNXq9YqBXL4WiWmnrwj',
            triggeredAt: '2025-11-26T10:15:30.000Z'
        }`

-   "locks/+/config/current":

    -   **API:** /on-config-sync | **POST**

    -   **Payload:**

        `{
          "topic": "${topic}",
          "payload": ${payload}
        }`

    -   **SQL query:**

        `SELECT
          topic,
          payload
        FROM
          "locks/+/config/current"`

    -   **Current config data:**

        `{
            deviceId: 'FSSIOT.1.1.1.404CCA43A084',
            message: {
              data: {
                adminPin: 'e470029a45506d1b50ea3d125a295cf4820aeb1768f8d760b0a0fe020780a2ab'
                alias: 'FSS Andro'
                connected: true
                createdAt: 'November 4, 2025 at 11:24:13AM UTC+1'
                createdBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
                fw: '1.0.10'
                groups: ['id1', 'id2']
                mac: '22:33:44:55:66:11'
                name: 'Keypad_0'
                privacyMode: false
                serverSynchronization: true
                remoteUnlock: false
                sn: 'FSSIOT.1.1.1.404CCA43F084'
                state: 'locked' | 'unlocked' | 'pending'
                syncedAt: 'November 4, 2025 at 11:24:13AM UTC+1' 
                updatedAt: 'November 4, 2025 at 11:24:13AM UTC+1'
                updatedBy: 'HCGn12X94WcHUPypdIDpV6LksI73'
              },
              method: 'remote' | 'fingerprint' | 'passcode' | 'nfc',
              type: 'sync_config'
            },
            systemId: '8VNXq9YqBXL4WiWmnrwj',
            triggeredAt: '2025-11-26T10:15:30.000Z'
        }`