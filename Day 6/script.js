function Student(name, age){
    this.name = name
    this.age = age
}

num_student = Number(prompt("Number of student"))
let students = []
for (let i = 0;i < num_student;i++){
    let name = prompt(`Name of student ${i + 1}`)
    let age = prompt(`Age of student ${i + 1}`)
    students.push(new Student(name, age))
}

console.log(students)
