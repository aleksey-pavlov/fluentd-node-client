import { FluentClientFactory } from "../fluent-client-factory";

let fluend = new FluentClientFactory().createFromConnectStr("192.168.99.100:24224/testtag");

let iter = 1;
setInterval(() => {
    iter++;
    fluend.send("test", {"message": `[TEST] iter number ${iter}`});
}, 1000);