// Get Elements
let salaryInput = document.getElementById('salary-input')
let expensesInput = document.getElementById('expenses-input')
let categoryInput = document.getElementById('category-input')
let salaryForm = document.getElementById('salary-form')
let expensesForm = document.getElementById('expenses-form')
let salaryBox = document.getElementById('salary-box')
let expensesBox = document.getElementById('expenses-box')
let tableDiv = document.getElementById('table-div')
let tableHeader = document.getElementById('table-header')
let table = document.getElementById('tbl')
let validation = document.getElementsByClassName('validation')

// Format Numbers
const format = new Intl.NumberFormat('en')

// Functions
function salary() {
    if(salaryInput.value !== ''){
        salaryBox.classList.add('hide')
        expensesBox.classList.remove('hide')
        tableDiv.classList.remove('hide')
    
        let tableFP = document.createElement('p')
        tableFP.innerHTML = `Salary: ${format.format(salaryInput.value)} £`
        tableHeader.appendChild(tableFP)

        let tableSP = document.createElement('p')
        tableSP.innerHTML = `Balance: ${format.format(salaryInput.value)} £`
        tableHeader.appendChild(tableSP)
    } else{
        salaryInput.style.border = '1px solid red'
        validation[0].style.display = 'block'
    }
}

function expenses(){
    let percentage = (expensesInput.value * 100) / salaryInput.value

    if(expensesInput.value && categoryInput.value){
        let tr = document.createElement('tr')
        let tdCateg = document.createElement('td')
        let tdValue = document.createElement('td')
        let tdPercent = document.createElement('td')

        tdCateg.innerHTML = categoryInput.value
        tdValue.innerHTML = `${format.format(expensesInput.value)} £`
        tdPercent.innerHTML = `${percentage.toFixed(1)} %`

        tr.appendChild(tdCateg)
        tr.appendChild(tdValue)
        tr.appendChild(tdPercent)

        table.appendChild(tr)

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