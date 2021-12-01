// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 1. Add Bootstrap with level 8 to the front end skill sets
// 2. Add Express with level 9 to the back end skill sets
// 3. Add SQL with level 8 to the data base skill sets
// 4. Add SQL without level to the data science skill sets

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

   
const copyObjUpdate = (type, skill) => {
    //create new obj from student
    const newStudent = { ...student };
    console.log(JSON.stringify(newStudent));
    // iterating thhroug loop 
    for(let i in newStudent.skills) {
        //if type match key so go in condition
        if(i == type) {
            // push the new skills
            newStudent.skills[i].push(skill);
        }
    }
    // console.log(newStudent.skills);
};

copyObjUpdate("frontEnd", { skill: "Bootstrap", level: 8 });
copyObjUpdate("backEnd", { skill: "Express", level: 9 });
copyObjUpdate("dataBase", { skill: "SQL", level: 8 });
copyObjUpdate("dataScience", "SQL");