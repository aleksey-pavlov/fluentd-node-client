## Fluentd client

### Usage

```TS
import { FluentClientFactory } from "fluentd-client";

let client = new FluentClientFactory().createFromConnectStr("localhost:24244/prefix-tag");

fluentClient.send("tag", { message: "test" });

```