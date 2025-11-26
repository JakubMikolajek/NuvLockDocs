**Command Topics (publish to locks):**

*   locks/{lock\_id}/cmd/lock - Lock the device

*   locks/{lock\_id}/cmd/unlock - Unlock the device

*   locks/{lock\_id}/cmd/logs - Request logs from lock

*   locks/{lock\_id}/cmd/config - Update configuration (a'la PATCH - partial)

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
          deviceId: FSSIOT.1.1.1.404CCA43A084,
          message: {
            data: {
              bssid: 'F8:1A:67:AA:7F:B9',
              conType: 'wifi',
              conUptime: 86400,
              errorFlag: 0,
              fw: '1.0.10',
              memFree: 254312,
              mode: 'ready',
              rssi: -42,
              status: 'ok',
              uptime: 172800
            },
            method: 'local',
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

-   "locks/+/current/config":

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
          "locks/+/current/config"`
