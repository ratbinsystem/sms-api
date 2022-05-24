import { IDateTimeFormat } from './interfaces'
export default class DateTime {
  date: Date
  constructor(newDate: Date) {
    this.date = newDate
  }
  currentTime = (format: IDateTimeFormat) =>
    this.formate(this.date, format, true)
  currentDate = (
    format: IDateTimeFormat = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  ) => this.formate(this.date, format)
  formate = (date: Date, options: IDateTimeFormat, time = false) =>
    time
      ? date.toLocaleTimeString('en-US', options)
      : date.toLocaleDateString('en-US', options).split('/').join('-')
}
