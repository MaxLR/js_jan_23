// person class: first name, last name, age, email

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, email, major, gradeLevel) {
        super(firstName, lastName, age, email);
        this.major = major;
        this.gradeLevel = gradeLevel;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, email, classesTaught = []) {
        super(firstName, lastName, age, email);
        this.classesTaught = classesTaught;
    }
}

class Lecture {
    constructor(instructor, topic, zoomLink, studentList = []) {
        this.instructor = instructor;
        this.studentList = studentList;
        this.topic = topic;
        this.zoomLink = zoomLink;
    }

    printAttendance() {
        console.log(`Welcome to ${this.instructor.fullName()}'s ${this.topic} class`)

        if(this.studentList.length === 0) {
            console.log("No students yet :'(")
        } else {
            this.studentList.forEach(student => {
                console.log(student.fullName());
            });
        }

        console.log(`The zoom link is: ${this.zoomLink}`)
    }
}

let killian = new Person("Killian", "Page", 25, "killian@awesome.gov");
let studentKillian = new Student("Killian", "Page", 25, "killian@awesome.gov", "Computer science", "15th");
let emily = new Student("Emily", "Weston", 25, "emily@coding.edu")
let roy = new Student("Roy", "Lee", 27, "roy@awesome.com")
let buddy = new Student("Buddy", "Reed", 12, "buddy@boygenius.net")

let robert = new Teacher("Robert", "Santos", "robert@teachingisawesome.gov");

let ourLecture = new Lecture(robert, "JavaScript", "asedfasdf.google.com", [studentKillian, emily, roy, buddy]);
ourLecture.studentList.push(buddy);

ourLecture.printAttendance();