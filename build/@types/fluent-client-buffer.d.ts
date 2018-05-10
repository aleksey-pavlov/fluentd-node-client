export declare class FluentClientBuffer implements IFluentClientBuffer {
    private cache;
    emit(tag: string, data: any, time: number): void;
    flush(cb: (tag: string, data: any, time: number) => void): void;
}
