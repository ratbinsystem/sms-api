"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateTime {
    constructor(newDate) {
        this.currentTime = (format) => this.formate(this.date, format, true);
        this.currentDate = (format = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }) => this.formate(this.date, format);
        this.formate = (date, options, time = false) => time
            ? date.toLocaleTimeString('en-US', options)
            : date.toLocaleDateString('en-US', options).split('/').join('-');
        this.date = newDate;
    }
}
exports.default = DateTime;
