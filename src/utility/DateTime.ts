import { _IdateTimeFormat } from './interfaces'
export default class DateTime {
  date: Date
  constructor(newDate: Date) {
    this.date = newDate
  }
  currentTime = (format: _IdateTimeFormat) =>
    this.formate(this.date, format, true)
  currentDate = (
    format: _IdateTimeFormat = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  ) => this.formate(this.date, format)
  formate = (date: Date, options: _IdateTimeFormat, time = false) =>
    time
      ? date.toLocaleTimeString('en-US', options)
      : date.toLocaleDateString('en-US', options).split('/').join('-')
}
