"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FluentClientBuffer {
    constructor() {
        this.cache = {};
    }
    emit(tag, data, time) {
        if (!this.cache[tag])
            this.cache[tag] = [];
        this.cache[tag].push({ data: data, time: time });
    }
    flush(cb) {
        for (let tag in this.cache) {
            let data = null;
            while (data = this.cache[tag].shift()) {
                cb(tag, data.data, data.time);
            }
        }
    }
}
exports.FluentClientBuffer = FluentClientBuffer;
//# sourceMappingURL=fluent-client-buffer.js.map