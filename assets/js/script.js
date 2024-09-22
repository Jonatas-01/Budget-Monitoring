// Get Elements
let salaryInputEl = document.getElementById('salary-input')
let expensesInputEl = document.getElementById('expenses-input')
let salaryFix = document.getElementById('salary-fix')
let balanceAmount = document.getElementById('balance-amount')


let categoryInput = document.getElementById('category-input')
let salaryBox = document.getElementById('salary-box')
let expensesBox = document.getElementById('expenses-box')
let tableDiv = document.getElementById('table-div')
let tableHeader = document.getElementById('table-header')
let table = document.getElementById('tbl')
let validation = document.getElementsByClassName('validation')
let buttonSalary = document.getElementById('btn-sal')

// Format Numbers
const format = new Intl.NumberFormat('en')

// Salary Function
function salaryFunc() {
    const salaryValue = salaryInputEl.value
    
    if(salaryValue == '' || salaryValue < 0){
        salaryInputEl.style.border = '1px solid red'
        validation[0].style.display = 'block'
    } else{
        salaryFix.textContent = salaryValue
        salaryInputEl.value = ""
        showBalance()

        salaryBox.classList.add('hide')
        expensesBox.classList.remove('hide')
        tableDiv.classList.remove('hide')

    }
    expensesInputEl.focus()
}

// Balance Function
function showBalance(){
    const expenses = totalExpenses()
    const total = parseInt(salaryFix.textContent) - expenses
    balanceAmount.textContent = total
}

// Calculate Expenses Function
function totalExpenses(){
    let total = 50
    return total
}


function expenses(){
    let percentage = (expensesInput.value * 100) / salaryInput.value

    if(expensesInput.value && categoryInput.value){
        // Create a row
        let tr = document.createElement('tr')
        let tdCateg = document.createElement('td')
        let tdValue = document.createElement('td')
        let tdPercent = document.createElement('td')
        let tdDelete = document.createElement('td')

        let btn = document.createElement('button')
        btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        tdDelete.appendChild(btn)

        tdCateg.innerHTML = categoryInput.value
        tdValue.innerHTML = `<span id="expense-value">${format.format(expensesInput.value)}</span> £`
        tdPercent.innerHTML = `${percentage.toFixed(1)} %`

        tr.appendChild(tdCateg)
        tr.appendChild(tdValue)
        tr.appendChild(tdPercent)
        tr.appendChild(tdDelete)

        table.appendChild(tr)

        // Delete function
        // tdDelete.addEventListener('click', deleteRow)

        // Change Balance in table header
        balance()

        // Remove old value and focus on firts input
        expensesInput.value = ''
        categoryInput.value = ''
        expensesInput.focus()

        // remove the required style after submit
        expensesInput.style.border = ''
        validation[1].style.display = 'none'
        categoryInput.style.border = ''
        validation[2].style.display = 'none'
    } else{
        if(expensesInput.value === ''){
            expensesInput.style.border = '1px solid red'
            validation[1].style.display = 'block'
        }
        if(categoryInput.value === ''){
            categoryInput.style.border = '1px solid red'
            validation[2].style.display = 'block'
        }
    }
}

function balance(){
    let currentAmount = document.getElementById('current-amount')
    currentAmount.innerHTML = `${salaryInput.value -= expensesInput.value}`
}

// function deleteRow(){
//     let currentAmount = document.getElementById('current-amount')
//     let expenseValue = document.getElementById('expense-value')
//     currentAmount.innerHTML = `${Number(currentAmount.value) + Number(expenseValue.value)}`
//     this.parentElement.remove()
// }