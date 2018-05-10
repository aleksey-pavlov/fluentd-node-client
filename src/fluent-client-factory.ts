import { FluentClient } from "./fluent-client";

export class FluentClientFactory {

    public createFromConnectStr(connectStr: string): FluentClient {

        let params = this.connectStrParser(connectStr);
        let fluentClient = new FluentClient(params);

        return fluentClient;
    }

    private connectStrParser(connectStr: string): TFluentClientConnectParams {

        let splitted = connectStr.split("/");
        let hostPort = splitted[0].split(":");

        let params: TFluentClientConnectParams = {
            host: hostPort[0],
            port: Number(hostPort[1]),
            prefix: splitted[1]
        };

        return params;
    }
}