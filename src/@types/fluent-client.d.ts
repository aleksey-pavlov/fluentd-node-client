interface IFluentClientSender {
    emit: (tag: string, data: any, time: number) => void;
    on?: (event: string, cb: any) => void;
}

interface IFluentClient {
    send(tag: string, data: any, time: number): void;
}

type TFluentClientConnectParams = { host: string, port: number, prefix: string };
