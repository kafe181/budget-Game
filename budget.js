var budget_limit = document.getElementById('budget-limit');
var limit = 0;
var remaining = 0;
var added_value = document.getElementById('add_value');
var add_btn = document.getElementById('add_btn');
var budget_remaining = document.getElementById('budget-remaining')

var formatNumber = function (num) {
  var numSplit, int, dec;
  num = Math.abs(num);
  num = num.toFixed(2);
  numSplit = num.split(".");
  int = numSplit[0];
  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input 2310 output 2,310
  }
  dec = numSplit[1];
  return  int + "." + dec;
};

add_btn.addEventListener('click', function(){
  limit = added_value.value;
  limit = parseInt(limit)
  remaining = added_value.value;
  remaining = parseInt(remaining)
  budget_limit.innerHTML = formatNumber(limit);
  budget_remaining.innerHTML = formatNumber(remaining);
})

document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector(".add-budget__btn");
  const budgetList = document.getElementById("budget-list");

  addButton.addEventListener("click", function() {
    const category = document.getElementById("budget-category").value;
    let amount = document.getElementById("budget-amount").value;

    num = 0;
    remaining = remaining - amount;
    budget_remaining.innerHTML = formatNumber(remaining)

    interval = setInterval(function(){
      
    }, 1000)

    if (category && amount) {
      const budgetItem = document.createElement("div");
      budgetItem.classList.add("new-budget-item");

      budgetItem.innerHTML = `
        <div class='item-cont' style='display: flex; flex-direction: row; justify-content: space-around; font-family: inherit'><span style='font-family: inherit'>${category}</span><span style='inherit'>${formatNumber(amount)} 
        <button class="item__delete--btn">&times;</button>
        </span>
        </div>
      `;

      budgetList.appendChild(budgetItem);

      // Clear input fields after adding budget item  
      document.getElementById("budget-category").value = "";
      document.getElementById("budget-amount").value = "";

      // Delete functionality
      const deleteButton = budgetItem.querySelector(".item__delete--btn");
      deleteButton.addEventListener("click", function() {
        amount = parseInt(amount)
        remaining += amount;
        budget_remaining.innerHTML = formatNumber(remaining)
        budgetList.removeChild(budgetItem);
      });
    }
  });
});