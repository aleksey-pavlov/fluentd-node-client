"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_client_1 = require("../fluent-client");
let fluendSender = new fluent_client_1.FluentClient({ host: "localhost", port: 24224, prefix: "test" });
let iter = 1;
setInterval(() => {
    iter++;
    fluendSender.send("test", { "message": `[TEST] iter number ${iter}` });
}, 1000);
//# sourceMappingURL=fluent-client-test.js.map