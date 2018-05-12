export interface IFluentClientBuffer {
    emit: (tag: string, data: any, time: number) => void;
    flush(cb: (tag: string, data: any, time: number) => void): void;
}
export declare type TFluentClientData = {
    data: any;
    time: number;
};
export declare class FluentClientBuffer implements IFluentClientBuffer {
    private cache;
    emit(tag: string, data: any, time: number): void;
    flush(cb: (tag: string, data: any, time: number) => void): void;
}
