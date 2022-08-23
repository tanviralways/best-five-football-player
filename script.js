// naymar button
document.getElementById("naymar-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("naymar-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});

// messi button
document.getElementById("messi-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("messi-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});

// ramos button
document.getElementById("ramos-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("ramos-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});

// mbappe button
document.getElementById("mbappe-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("mbappe-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});

// sanches button
document.getElementById("sanches-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("sanches-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});

// navas button
document.getElementById("navas-btn").addEventListener("click", function () {
  const getNaymarElement = document.getElementById("navas-text");
  const getNaymarText = getNaymarElement.innerText;

  const getLi = document.createElement("li");

  getLi.innerText = getNaymarText;
  const selectedPlayer = document.getElementById("selected-player");
  selectedPlayer.appendChild(getLi);
});
//
document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerInputValue = document.getElementById("per-player-input");
  const perPlayerValue = parseInt(perPlayerInputValue.value);

  const getLi = document.createElement("li");

  const selectedPlayer = document.getElementById("selected-player");

  const allSelectedPlayer = selectedPlayer.childNodes.length;

  const totalPlayerPrice = allSelectedPlayer * perPlayerValue;

  const playerExpensesElement = document.getElementById("player-expenses");

  playerExpensesElement.innerText = totalPlayerPrice;
});
// Calculate Total Button
document
  .getElementById("Calculate-Total")
  .addEventListener("click", function () {
    // total player price calculate
    const getLi = document.createElement("li");

    const selectedPlayer = document.getElementById("selected-player");

    const allSelectedPlayer = selectedPlayer.childNodes.length;
    const perPlayerInputValue = document.getElementById("per-player-input");
    const perPlayerValue = parseInt(perPlayerInputValue.value);

    const totalPlayerPrice = allSelectedPlayer * perPlayerValue;

    const playerExpensesElement = document.getElementById("player-expenses");

    playerExpensesElement.innerText = totalPlayerPrice;
    //
    const managerInput = document.getElementById("manager-input");
    const managerInputValue = parseInt(managerInput.value);
    const coachInput = document.getElementById("coach-input");
    const coachInputVAlue = parseInt(coachInput.value);
    const totalmanagementExpenses =
      totalPlayerPrice + managerInputValue + coachInputVAlue;

    const totalElement = document.getElementById("total");
    const total = parseInt(totalElement.innerText);
    totalElement.innerText = totalmanagementExpenses;
  });
