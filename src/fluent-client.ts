import * as fluentd from "fluent-logger";
import { FluentClientBuffer } from "./fluent-client-buffer";

export class FluentClient implements IFluentClient {

    private sender: IFluentClientSender;

    constructor(params: { host: string, port: number, prefix: string }) {

        let buffer: IFluentClientBuffer = new FluentClientBuffer();
        let client: IFluentClientSender = fluentd.createFluentSender(params.prefix, {
            host: params.host,
            port: params.port,
            timeout: 3.0,
            reconnectInterval: 10000
        });

        this.sender = client;
        client.on("error", (error) => {
            this.sender = buffer;
        });

        client.on("connect", () => {
            this.sender = client;
            buffer.flush((tag, data, time) => {
                this.sender.emit(tag, data, time);
            })
        });
    }

    public send(tag: string, data: any, time?: number): void {
        this.sender.emit(tag, data, time);
    }
}