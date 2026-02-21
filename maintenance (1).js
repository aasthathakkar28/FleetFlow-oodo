let logs = JSON.parse(localStorage.getItem("maintenanceLogs")) || [];

function openModal() {
  serviceModal.style.display = "flex";
}

function closeModal() {
  serviceModal.style.display = "none";
}

serviceForm.onsubmit = e => {
  e.preventDefault();

  logs.push({
    id: Date.now(),
    vehicle: vehicle.value,
    issue: issue.value,
    date: date.value,
    cost: cost.value,
    status: "New"
  });

  localStorage.setItem("maintenanceLogs", JSON.stringify(logs));
  closeModal();
  serviceForm.reset();
  renderLogs();
};

function renderLogs() {
  let searchText = search.value.toLowerCase();
  let filter = filterBy.value;
  let sort = sortBy.value;

  let data = [...logs];

  if (searchText) {
    data = data.filter(l =>
      l.vehicle.toLowerCase().includes(searchText) ||
      l.issue.toLowerCase().includes(searchText)
    );
  }

  if (filter) {
    data = data.filter(l => l.status === filter);
  }

  if (sort) {
    data.sort((a,b)=> a[sort].localeCompare(b[sort]));
  }

  logTable.innerHTML = "";

  data.forEach(l => {
    logTable.innerHTML += `
      <tr>
        <td>${l.id}</td>
        <td>${l.vehicle}</td>
        <td>${l.issue}</td>
        <td>${l.date}</td>
        <td>${l.cost}</td>
        <td><span class="status">${l.status}</span></td>
      </tr>
    `;
  });
}

renderLogs();