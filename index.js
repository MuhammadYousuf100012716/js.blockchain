// QUESTION #01
// Student Data:  name  class  section  marks[] attendence
student1 = {
    name:"MUHAMMAD YOUSUF",
    class:"semester 4",
    section: "A",
    marks: [50, 60, 70,80,90],
    attend: 40,
}
if (student1.attend >=35){
    console.log(" student allowed!")
    if(student1.marks[4]>=75){
    }
}
else {
    console.log(" student not allowed")
}
if (student1.marks[3]>="80" || attend >= "50"){
    console.log("student get 'A' grade")
}
// QUESTION #02 
// condition of grading on according to marks  A+ A B C D F and attendence
attendence = 15;
marks = 95;
if(marks>=90 && attendence>=15){
    console.log("A+");
    console.log("allowed");
}
else if(marks>=80 && attendence>=25){
    console.log("A");
    console.log(" not allowed");
}
else if(marks>=70 && attendence>=55){
    console.log("B");
    console.log(" not allowed");
}
else if(marks>=60 && attendence>=85){
    console.log("C");
    console.log(" not allowed");
}
else if(marks>=50 && attendence>=35){
    console.log("D");
    console.log(" not allowed");
}
else{
    console.log("F");
    console.log(" not allowed");
}
