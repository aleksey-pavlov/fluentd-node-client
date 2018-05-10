import * as fluentd from "fluent-logger";
import { FluentClientBuffer } from "./fluent-client-buffer";

export class FluentClient implements IFluentClient {

    private sender: IFluentClientSender;

    constructor(params: TFluentClientConnectParams) {
        try {
            let buffer: IFluentClientBuffer = new FluentClientBuffer();
            let client: IFluentClientSender = fluentd.createFluentSender(params.prefix, {
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

        } catch (err) {
            console.error(err.stack);
        }
    }

    public send(tag: string, data: any, time?: number): void {
        try {
            this.sender.emit(tag, data, time);
        } catch (err) {
            console.error(err.stack);
        }
    }
}