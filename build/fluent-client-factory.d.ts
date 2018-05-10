import { FluentClient } from "./fluent-client";
export declare class FluentClientFactory {
    createFromConnectStr(connectStr: string): FluentClient;
    private connectStrParser(connectStr);
}
