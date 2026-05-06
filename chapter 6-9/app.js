// answer no 1

// let a = prompt("Input a number");
// document.write("Result:" + "<br/>")
// document.write("The value of a is:" + a)
// document.write("<br/>")
// document.write("..................................................." +"<br/>")
// document.write("<br/>")

// pre increment
// document.write("The value of ++a is:" + ++a)
// document.write("<br/>")
// document.write("Now the value of a is:" + a)
// document.write("<br/>")
// document.write("<br/>")

// post increment
// document.write("The value of a++ is:" + a++)
// document.write("<br/>")
// document.write("Now the value of a is:" + a)
// document.write("<br/>")
// document.write("<br/>")

// pre decrement
// document.write("The value of --a is:" + --a)
// document.write("<br/>")
// document.write("Now the value of a is:" + a)
// document.write("<br/>")
// document.write("<br/>")

// post increment
// document.write("The value of a-- is:" + a--)
// document.write("<br/>")
// document.write("Now the value of a is:" + a)
// document.write("<br/>")
// document.write("<br/>")

// answer no 2

// let a = 2;
// let b = 1;
// let result = --a - --b - ++b + b--;

// document.write("<h3>" + "Solving equation" + "</h3>");
// document.write("The value of a is:" + a + "<br/>");
// document.write("The value of b is:" + b + "<br/>");
// document.write("The result is:" + result + "<br/>" + "<br/>");
// document.write("<b>" + "Explanation" + "</b>" + "<br/>" );
// document.write("a = 2, b = 1" + "<br/>");
// document.write("--a - --b - ++b + b--" + "<br/>");
// document.write("--2 - --1 - ++1 + 1--" + "<br/>");
// document.write("1 - 0 + 1 + 1 "+"<br>");
// document.write("1 + 1 + 1 "+"<br>");
// document.write("The result is 3");

// answer no 3

// let userName = prompt("Enter your name:")
// alert("Hello " + userName)

// answer no 5

// let table = prompt("Enter a number");
// if(table==0){
//     for (let i=0 ; i<=10; i++) 
//     {document.write(5 + "x" + i + "=" + 5*i + "<br>")}
// }
// else{
//     for (let i=0 ; i<=10; i++) 
//     {document.write(table + "x" + i + "=" + table*i + "<br>")}
// }

// answer no 6
// //  a
// let firstSubject = prompt("Enter first subject name :");
// let secondSubject = prompt("Enter second subject name :");
// let thirdSubject = prompt("Enter third subject name :");

// // b
// let totalMarks = 100;

// // c
// let obtainedMarks1 = +prompt("Enter marks of your first subject:");

// // d
// let obtainedMarks2 = +prompt("Enter marks of your second subject:");
// let obtainedMarks3 = +prompt("Enter marks of your third subject:");

// // e
// let obtainedMarkss = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let totalMarkss = 300;
// let percentage = (obtainedMarkss/totalMarks)*100;
// percentage= percentage.toFixed(2);
// let percentage1 = (obtainedMarks1/100)*100;
// percentage1= percentage1.toFixed(2);

// let percentage2 = (obtainedMarks2/100)*100;
// percentage2= percentage2.toFixed(2);

// let percentage3 = (obtainedMarks3/100)*100;
// percentage3= percentage3.toFixed(2);

// document.write("<Table>") 
// document.write("<tr>"); 
// document.write("<th>"+"Subjects "+"</th>") 
// document.write("<th>"+"Total"+"</th>") 
// document.write("<th>"+" Obtained Marks "+"</th>") 
// document.write("<th>"+" Percentage "+"</th>") 
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+ firstSubject +"</td>")
// document.write("<td>"+totalMarks+"</td>")
// document.write("<td>"+ obtainedMarks1 +"</td>")
// document.write("<td>"+ percentage1 + "%" + "</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+ secondSubject +"</td>")
// document.write("<td>"+totalMarks+"</td>")
// document.write("<td>"+ obtainedMarks2 +"</td>")
// document.write("<td>"+ percentage2 + "%" +"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+ thirdSubject +"</td>")
// document.write("<td>"+totalMarks+"</td>")
// document.write("<td>"+ obtainedMarks3 +"</td>")
// document.write("<td>"+ percentage3 + "%" +"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>"+totalMarkss+"</th>");
// document.write("<th>"+obtainedMarkss+"</th>");
// document.write("<th>"+percentage+"%"+"</th>");
// document.write("</tr>");
// document.write("</Table>");



