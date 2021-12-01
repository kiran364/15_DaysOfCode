
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}


// 	Use the student object to solve the following questions:
//    a. Find the length of student object keys
//    b. Find the length of the student object values
//    c. Find the length of skills object keys
//    d. check if the student object has graphicDesign property
//    e. Iterate the keys of the student object

//1(a)
const objectArrays = Object.keys(newStudent);
const length = objectArrays.length;
console.log("length", length);

//1(b)
const objectValuesArray = Object.values(newStudent);
console.log(objectValuesArray.length);

// //1(c)
const skillkey = newStudent.skills;
console.log(Object.keys(skillkey).length);

// //1(d)
const checkGraphicDesignProp = (student, checkkey) => {
  check = Object.keys(student.skills).filter((item) => item == checkkey);
  console.log(check)
  if (check.length == 0) {
    console.log(false);
  } else console.log(true);
};
checkGraphicDesignProp(student, "backEnd");

// //1(e)
const iterateItem = Object.keys(student).map((item) => console.log(item));
console.log(iterateItem);