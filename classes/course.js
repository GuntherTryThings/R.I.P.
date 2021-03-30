module.exports = class {
    constructor(summary, startDate, endDate) {
        this.name = summary.split(/\([A-Z|0-9]*\)*|SUMMARY:/g)[1];
        this.neptun = summary.split(/[\s\S]*\(|\)[\s\S]*/g)[1];
        this.teacher = summary.split(/-\s*[0-9]*[_|A-Za-zöüóőúéáűí]*\s*-\s*|-\s*Órarend/g)[1];
        this.startDate = this.formatDate(startDate);
        this.dayIdx = new Date(this.startDate).getDay()-1;
        this.startTime = this.formatTime(startDate);
        this.duration = this.calculateDuration(this.formatTime(startDate), this.formatTime(endDate));
        this.offset = new Date(`${this.startDate} ${this.startTime}`).getTimezoneOffset();
        this.startTime = `${`${Math.floor(parseInt(this.startTime.substring(0,2))+this.offset*-1/60)}`.padStart('0',2)}:${this.startTime.substring(3,5)}`;
    }

    formatDate(dateString) {
        dateString = dateString.split(/DTSTART:|DTEND:|T/g)[1];
        return `${dateString.substring(0,4)}-${dateString.substring(4,6)}-${dateString.substring(6,8)}`;
    }

    formatTime(dateString) {
        let timeString = dateString.split(/DTSTART:|DTEND:|T/g)[2];
        return `${timeString.substring(0,2)}:${timeString.substring(2,4)}`;
    }

    calculateDuration(start, end) {
        let durationHour = parseInt(end.substring(0,2)) - parseInt(start.substring(0,2));
        let durationMin = parseInt(end.substring(3,5)) - parseInt(start.substring(3,5));
        return durationHour + durationMin/60;
    }
};