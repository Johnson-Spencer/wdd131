//arrays in javascript
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

//display the first course
console.log(courses[0]);
console.log(courses[3]);
console.log(courses[courses.length - 1]);

//notmal for i loop
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

//array methods/functions
courses.forEach((item) => {
    console.log(item);
});


let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}

console.log(course.instructor);


let coursesButBetter = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        instructor: "Brother Warner"
    },
    {
        name: "Web Fundamentals",
        code: "WDD130",
        credits: 2,
        instructor: "Brother Warner"
    }
]


//challenge: print out the name and code of the second course in this array
console.log(coursesButBetter[1].name);
console.log(coursesButBetter[1].code);


let body = document.querySelector("body");

coursesButBetter.forEach((item) => {
    //build out an HTML div with course contents
    let courseDiv = `
        <div>
            <h2>${item.name}</h2>
            <p>Code: ${item.code}</p>
            <p>Credits: ${item.credits}</p>
            <p>Instructor: ${item.instructor}</p>
        </div>
            `;
    //add that div to the body)
    body.innerHTML += courseDiv;
});