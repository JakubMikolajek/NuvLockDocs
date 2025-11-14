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

-   "locks/+/logs":

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
