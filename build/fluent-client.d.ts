export declare class FluentClient implements IFluentClient {
    private sender;
    constructor(params: TFluentClientConnectParams);
    send(tag: string, data: any, time?: number): void;
}
