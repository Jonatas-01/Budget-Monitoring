// Get Elements
const salaryInputEl = document.getElementById("salary-input");
const salaryFix = document.getElementById("salary-fix");
const balanceAmount = document.getElementById("balance-amount");
const expensesInputEl = document.getElementById("expenses-input");
const categoryInputEl = document.getElementById("category-input");
const salaryBox = document.getElementById("salary-box");
const expensesBox = document.getElementById("expenses-box");
const tableDiv = document.getElementById("table-div");
const validation = document.getElementsByClassName("validation");
const expenseList = document.getElementById("expense-list");
let itemList = [];
let itemId = 0;
let salaryValue = 0;

// Salary Function
function salaryFunc() {
  salaryValue = salaryInputEl.value;

  if (salaryValue == "" || salaryValue < 0) {
    salaryInputEl.style.border = "2px solid red";
    validation[0].style.display = "block";
    setTimeout(() => {
      validation[0].style.display = "none";
      salaryInputEl.style.border = "";
    }, 2500);
  } else {
    salaryFix.textContent = salaryValue;
    showBalance();

    salaryBox.classList.add("hide");
    expensesBox.classList.remove("hide");
    tableDiv.classList.remove("hide");
  }
  expensesInputEl.focus();
}

// Balance Function
function showBalance() {
  const expenses = totalExpenses();
  const total = parseInt(salaryFix.textContent) + expenses;
  balanceAmount.textContent = total.toFixed(1);
}

// Calculate Expenses Function
function totalExpenses() {
  const total = itemList.reduce((sum, expense) => sum - expense.amount, 0);
  return total;
}

// Expenses Function
function expenses() {
  let expensesAmountValue = expensesInputEl.value;
  let expenseCategValue = categoryInputEl.value;
  if (expensesAmountValue && expenseCategValue) {
    let amount = expensesAmountValue;

    expensesInputEl.value = "";
    categoryInputEl.value = "";

    // store the value inside the object
    let expenses = {
      id: itemId,
      title: expenseCategValue,
      amount: amount,
    };
    itemId++;
    itemList.push(expenses);

    // add expenses to HTML page
    addExpenses(expenses);
    showBalance();

    // go back to expenses input after send the details
    expensesInputEl.focus();
  } else {
    if (expensesAmountValue === "" || expensesAmountValue < 0) {
      expensesInputEl.style.border = "2px solid red";
      validation[1].style.display = "block";
      setTimeout(() => {
        validation[1].style.display = "none";
        expensesInputEl.style.border = "";
      }, 2500);
    }

    if (expenseCategValue === "") {
      categoryInputEl.style.border = "2px solid red";
      validation[2].style.display = "block";
      setTimeout(() => {
        validation[2].style.display = "none";
        categoryInputEl.style.border = "";
      }, 2500);
    }
  }
}

// Add content in HTML page
function addExpenses(expenses) {
  const html = `
        <tr>
            <td>${expenses.title}</td>
            <td>${expenses.amount} £</td>
            <td><button class="btn-delete" data-id="${expenses.id}"><i class="fa-solid fa-trash-can"></i></button</td>
        </tr>`;
  expenseList.innerHTML += html;
}

// Delete Row Function
expenseList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    const id = parseInt(e.target.dataset.id);
    itemList = itemList.filter((expenses) => expenses.id !== id);
    let element = e.target.parentElement.parentElement;
    element.remove();
    showBalance();
  }
});

// Edit salary function
function editSalary() {
  salaryBox.classList.remove("hide");
  expensesBox.classList.add("hide");
  tableDiv.classList.add("hide");
}
