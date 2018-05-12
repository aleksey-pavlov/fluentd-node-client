"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_client_1 = require("./fluent-client");
class FluentClientFactory {
    createFromConnectStr(connectStr) {
        let params = this.connectStrParser(connectStr);
        let fluentClient = new fluent_client_1.FluentClient(params);
        return fluentClient;
    }
    connectStrParser(connectStr) {
        let splitted = connectStr.split("/");
        let hostPort = splitted[0].split(":");
        let params = {
            host: hostPort[0],
            port: Number(hostPort[1]),
            prefix: splitted[1]
        };
        return params;
    }
}
exports.FluentClientFactory = FluentClientFactory;
//# sourceMappingURL=fluent-client-factory.js.map