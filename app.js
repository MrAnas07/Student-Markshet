var StudentName = prompt("Enter Student Name")
var English = +prompt("Enter English Marks")
var Urdu = +prompt("Enter Urdu Marks")
var Computer = +prompt("Enter Computer Marks")
var Physic = +prompt("Enter Physic Marks")
var Chemistry = +prompt("Enter Chemistry Marks")
var Maths = +prompt("Enter Maths Marks")
var total = English + Urdu + Computer + Physic + Chemistry + Maths
var percentage = total / 600 * 100
var grade;

if (percentage >= 80) {
    grade = "A+"
}
else if (percentage >= 70) {
    grade = "A"
}
else if (percentage >= 60) {
    grade = "B"
}
else if (percentage >= 50) {
    grade = "C"
}
else if (percentage >= 40) {
    grade = "D"
}

else { grade = "Fail Nikemmy" }

document.write(`<table border="2px"> <tr>
  <th>STUDENT NAME</th>
  <th>English</th>
  <th>Urdu</th>
  <th>Computer</th>
  <th>Physic</th>
  <th>Chemistry</th>
  <th>Maths</th>
  <th>total</th>
  <th>Parcantage</th>
  <th>Grade</th>
</tr>
 <tr>
  <td>${StudentName}</td>
     <td>${English}</td>
     <td>${Urdu}</td>
     <td>${Computer}</td>
     <td>${Physic}</td>
     <td>${Chemistry}</td>
     <td>${Maths} </td>
     <td>${total} /600</td>
     <td>${percentage.toFixed(2)} % </td>
     <td>${grade} </td>
     </tr>
</table>`)
