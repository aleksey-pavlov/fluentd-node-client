import { FluentClient } from "../fluent-client";

let fluendSender = new FluentClient({ host: "localhost", port: 24224, prefix: "test" });

let iter = 1;
setInterval(() => {
    iter++;
    fluendSender.send("test", {"message": `[TEST] iter number ${iter}`});
}, 1000);