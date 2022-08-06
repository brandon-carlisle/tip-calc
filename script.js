// Elements
//
// Inputs
const billInput = document.getElementById('bill-input');
const tipInput = document.getElementById('tip-input');
const peopleInput = document.getElementById('people-input');
//
// Labels
const tipLabel = document.querySelector('.tip-label');
const totalLabel = document.querySelector('.total-label');
//
// Buttons
const btnCalculate = document.querySelector('.btn-calculate');
//

// App
//
btnCalculate.addEventListener('click', function () {
  const billPrice = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const numberOfPeople = Number(peopleInput.value);

  if (billPrice >= 1 && tipPercentage > 0 && tipPercentage <= 100) {
    // Calculate and show total
    total = calculateTotal(billPrice, tipPercentage).toFixed(2);
    console.log(total);
    totalLabel.textContent = `£${total}`;
    totalLabel.style.opacity = 100;

    // Calculate and show per person
    const perPerson = calculatePerPerson(total, numberOfPeople).toFixed(2);
    tipLabel.textContent = `£${perPerson}`;
    tipLabel.style.opacity = 100;
  }
});

const calculateTotal = (bill, tip) => bill * tip + bill;
const calculatePerPerson = (total, people) => total / people;
