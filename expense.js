let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function openModal() {
  expenseModal.style.display = "flex";
}

function closeModal() {
  expenseModal.style.display = "none";
}

expenseForm.onsubmit = e => {
  e.preventDefault();

  expenses.push({
    tripId: tripId.value,
    driver: driver.value,
    distance: distance.value + " km",
    fuel: fuel.value,
    misc: misc.value,
    status: "Done"
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));
  closeModal();
  expenseForm.reset();
  renderExpenses();
};

function renderExpenses() {
  let searchText = search.value.toLowerCase();
  let filter = filterBy.value;
  let sort = sortBy.value;

  let data = [...expenses];

  if (searchText) {
    data = data.filter(e =>
      e.tripId.toLowerCase().includes(searchText) ||
      e.driver.toLowerCase().includes(searchText)
    );
  }

  if (filter) {
    data = data.filter(e => e.status === filter);
  }

  if (sort) {
    data.sort((a,b)=> a[sort].localeCompare(b[sort]));
  }

  expenseTable.innerHTML = "";

  data.forEach(e => {
    expenseTable.innerHTML += `
      <tr>
        <td>${e.tripId}</td>
        <td>${e.driver}</td>
        <td>${e.distance}</td>
        <td>${e.fuel}</td>
        <td>${e.misc}</td>
        <td><span class="status">${e.status}</span></td>
      </tr>
    `;
  });
}

renderExpenses();