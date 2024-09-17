// Get Elements
let salaryInput = document.getElementById('salary-input')
let expensesInput = document.getElementById('expenses-input')
let categoryInput = document.getElementById('category-input')
let salaryForm = document.getElementById('salary-form')
let expensesForm = document.getElementById('expenses-form')
let salaryBox = document.getElementById('salary-box')
let expensesBox = document.getElementById('expenses-box')

// Functions
function salary() {
    if(salaryInput.value !== ''){

        salaryBox.classList.add('hide')
        expensesBox.classList.remove('hide')
    
    }

}