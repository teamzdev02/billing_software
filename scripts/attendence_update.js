function attendanceUpdate() {
    return {
        date: '',
        tokenNumber: '',
        morningAttendance: '',
        afternoonAttendance: '',
        available: ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'],
        present: [],
        selectedPerson: null,
        selectedList: null,

        selectPerson(person, list) {
            this.selectedPerson = person;
            this.selectedList = list;
        },

        moveSingle(fromList, toList) {
            if (this.selectedPerson && this.selectedList === fromList) {
                this[toList].push(this.selectedPerson);
                this[fromList] = this[fromList].filter(person => person !== this.selectedPerson);
                this.selectedPerson = null;
                this.selectedList = null;
            }
        },

        moveAll(fromList, toList) {
            this[toList] = this[toList].concat(this[fromList]);
            this[fromList] = [];
        },

        updateAttendance() {
            alert('Attendance updated for date: ' + this.date);
        },

        clearForm() {
            this.date = '';
            this.tokenNumber = '';
            this.morningAttendance = '';
            this.afternoonAttendance = '';
            this.present = [];
            this.available = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
        }
    };
}
