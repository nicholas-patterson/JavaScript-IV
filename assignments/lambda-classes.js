// CODE here for your Lambda Classes

// Base Class - Person

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//Instructor Class

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  }
}

// Student Class

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = 50;
  }
  listsSubjects(subjectArr) {
    console.log(subjectArr.map(subject => subject));
  }
  PRAssignment(student, subject) {
    `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    `${student.name} has begun sprint challenge on ${subject}`;
  }
}

//Project Manager Class

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(name, channel) {
    console.log(`${name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(name, student, subject) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}`);
  }
}

// new Instructor
const dan = new Instructor({
  name: "Dan",
  age: "Infinity",
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

// new Project Manager
const marguel = new ProjectManager({
  name: "Marguel",
  age: "Maybe 26",
  gradClassName: "WEBPT2",
  favInstructor: "Me?",
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Practice Flex Zombies !!!"
});

// new Student
const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "Web21",
  favSubjects: ["Computer Science", "Philosophy", "English"]
});

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

// Instructor Logs
console.log(dan.name);
console.log(dan.age);
console.log(dan.location);
console.log(dan.specialty);
console.log(dan.favLanguage);
dan.speak();
dan.demo("Javascript");
dan.grade(joscelyn, "Javascript");

// Student Logs

console.log(joscelyn.name);
console.log(joscelyn.age);
console.log(joscelyn.location);
console.log(joscelyn.previousBackground);
console.log(joscelyn.className);
console.log(joscelyn.favSubjects);
joscelyn.PRAssignment(joscelyn, "Computer Science");
joscelyn.listsSubjects(["Computer Science", "Philosophy", "English"]);
joscelyn.sprintChallenge(isaiah, "English");

//PM LOGS

console.log(marguel.name);
console.log(marguel.age);
console.log(marguel.gradClassName);
console.log(marguel.favInstructor);
console.log(marguel.location);
console.log(marguel.specialty);
console.log(marguel.favLanguage);
console.log(marguel.catchPhrase);
marguel.standUp("Jack", "radio");
marguel.debugsCode("Nicholas", joscelyn, "Javascript");
