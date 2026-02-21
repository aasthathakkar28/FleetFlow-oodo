let vehicles = JSON.parse(localStorage.getItem("registryVehicles")) || [];

function openModal() {
  vehicleModal.style.display = "flex";
}

function closeModal() {
  vehicleModal.style.display = "none";
}

vehicleForm.onsubmit = e => {
  e.preventDefault();

  vehicles.push({
    plate: plate.value,
    model: model.value,
    type: type.value,
    capacity: capacity.value,
    odometer: odometer.value,
    status: "Idle"
  });

  localStorage.setItem("registryVehicles", JSON.stringify(vehicles));
  closeModal();
  renderTable();
  vehicleForm.reset();
};

function renderTable() {
  let searchText = search.value.toLowerCase();
  let filter = filterStatus.value;
  let sort = sortBy.value;

  let data = [...vehicles];

  if (searchText) {
    data = data.filter(v =>
      v.plate.toLowerCase().includes(searchText) ||
      v.model.toLowerCase().includes(searchText)
    );
  }

  if (filter) {
    data = data.filter(v => v.status === filter);
  }

  if (sort) {
    data.sort((a,b) => a[sort].localeCompare(b[sort]));
  }

  vehicleTable.innerHTML = "";

  data.forEach((v,i) => {
    vehicleTable.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${v.plate}</td>
        <td>${v.model}</td>
        <td>${v.type}</td>
        <td>${v.capacity}</td>
        <td>${v.odometer}</td>
        <td>${v.status}</td>
        <td>❌</td>
      </tr>
    `;
  });
}

renderTable();