"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fluentd = require("fluent-logger");
const fluent_client_buffer_1 = require("./fluent-client-buffer");
class FluentClient {
    constructor(params) {
        try {
            let buffer = new fluent_client_buffer_1.FluentClientBuffer();
            let client = fluentd.createFluentSender(params.prefix, {
                host: params.host,
                port: params.port,
                timeout: 3.0,
                reconnectInterval: 10000
            });
            client.on("error", () => {
                this.sender = buffer;
                console.error("Connection refused! Use buffer sender!");
            });
            client.on("connect", () => {
                this.sender = client;
                console.info("Connection success! Use fluent sender!");
                buffer.flush((tag, data, time) => {
                    this.sender.emit(tag, data, time);
                });
            });
            this.sender = client;
        }
        catch (err) {
            console.error(err.stack);
        }
    }
    send(tag, data, time) {
        try {
            this.sender.emit(tag, data, time);
        }
        catch (err) {
            console.error(err.stack);
        }
    }
}
exports.FluentClient = FluentClient;
//# sourceMappingURL=fluent-client.js.map