export class FluentClientBuffer implements IFluentClientBuffer {

    private cache: { [x: string]: TFluentClientData[] } = {};

    public emit(tag: string, data: any, time: number) {
        if (!this.cache[tag])
            this.cache[tag] = [];

        this.cache[tag].push({ data: data, time: time });
    }

    public flush(cb: (tag: string, data: any, time: number) => void): void {
        for (let tag in this.cache) {
            let data: TFluentClientData = null;
            while (data = this.cache[tag].shift()) {
                cb(tag, data.data, data.time);
            }
        }
    }

}