import { stringify } from "querystring"

export class GradeSchool {
    students = {}

    constructor() {

    }

    roster() {
        return this.students
    }

    add(name, grade) {
        this.students  = stringify(grade) [name]
    }

}
