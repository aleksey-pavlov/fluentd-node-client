export interface IFluentClientSender {
    emit: (tag: string, data: any, time: number) => void;
    on?: (event: string, cb: any) => void;
}
export interface IFluentClient {
    send(tag: string, data: any, time: number): void;
}
export declare type TFluentClientConnectParams = {
    host: string;
    port: number;
    prefix: string;
};
export declare class FluentClient implements IFluentClient {
    private sender;
    constructor(params: TFluentClientConnectParams);
    send(tag: string, data: any, time?: number): void;
}
