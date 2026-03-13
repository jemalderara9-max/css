let students = []; // The system stores students in an array of objects 

const studentForm = document.getElementById('student-form');
const studentTableBody = document.getElementById('student-list-body');
const resultsDisplay = document.getElementById('results-display');
function addStudent(name, grade) {
    const newStudent = {
        id: Date.now(), // Unique ID using timestamp [cite: 30]
        name: name,
        grade: parseFloat(grade)
    };
    students.push(newStudent);
    displayStudents(); // Update the list immediately [cite: 57, 59]
}
function displayStudents() {
    studentTableBody.innerHTML = ''; // Clear current list [cite: 48]
    
    students.forEach(student => {
        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>
                    <button onclick="editGrade(${student.id})" class="btn--edit">Edit</button>
                    <button onclick="deleteStudent(${student.id})" class="btn--delete">Delete</button>
                </td>
            </tr>`;
        studentTableBody.innerHTML += row;
    });
}
studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    const name = document.getElementById('student-name').value;
    const grade = document.getElementById('student-grade').value;
    
    addStudent(name, grade);
    studentForm.reset(); // Clear the form fields
});