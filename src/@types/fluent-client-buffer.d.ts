interface IFluentClientBuffer {
    emit: (tag: string, data: any, time: number) => void;
    flush(cb: (tag: string, data: any, time: number) => void): void;
}

type TFluentClientData = {
    data: any,
    time: number
}