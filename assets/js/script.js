// Get Elements
let salaryInput = document.getElementById('salary-input')
let expensesInput = document.getElementById('expenses-input')
let categoryInput = document.getElementById('category-input')
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
        tableFP.innerHTML = `Salary: ${format.format(salaryInput.value)}£`
        tableHeader.appendChild(tableFP)

        let tableSP = document.createElement('p')
        tableSP.innerHTML = `Balance: ${format.format(salaryInput.value)}£`
        tableHeader.appendChild(tableSP)
        tableSP.classList.add('balance-p')
    } else{
        salaryInput.style.border = '1px solid red'
        validation[0].style.display = 'block'
    }
    expensesInput.focus()
}

function expenses(){
    let percentage = (expensesInput.value * 100) / salaryInput.value

    if(expensesInput.value && categoryInput.value){
        let tr = document.createElement('tr')
        let tdCateg = document.createElement('td')
        let tdValue = document.createElement('td')
        let tdPercent = document.createElement('td')
        let tdDelete = document.createElement('td')

        let btn = document.createElement('button')
        btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        tdDelete.appendChild(btn)

        tdCateg.innerHTML = categoryInput.value
        tdValue.innerHTML = `${format.format(expensesInput.value)} £`
        tdPercent.innerHTML = `${percentage.toFixed(1)} %`

        tr.appendChild(tdCateg)
        tr.appendChild(tdValue)
        tr.appendChild(tdPercent)
        tr.appendChild(tdDelete)

        table.appendChild(tr)

        tdDelete.addEventListener('click', deleteRow)

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
    let balanceP = document.querySelector('.balance-p')
    balanceP.innerText = `Balance: ${salaryInput.value -= expensesInput.value}£`
}

function deleteRow(){
    
}