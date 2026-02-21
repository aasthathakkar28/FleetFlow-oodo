let trips = JSON.parse(localStorage.getItem("trips")) || [];

function addTrip() {
  trips.push({
    id: trips.length + 1,
    type: vehicle.value,
    origin: origin.value,
    destination: destination.value,
    driver: driver.value,
    status: "On Way"
  });

  localStorage.setItem("trips", JSON.stringify(trips));

  vehicle.value = "";
  weight.value = "";
  driver.value = "";
  origin.value = "";
  destination.value = "";
  fuel.value = "";

  renderTrips();
}

function renderTrips() {
  let searchText = search.value.toLowerCase();
  let filter = filterBy.value;
  let sort = sortBy.value;

  let data = [...trips];

  if (searchText) {
    data = data.filter(t =>
      t.type.toLowerCase().includes(searchText) ||
      t.driver.toLowerCase().includes(searchText)
    );
  }

  if (filter) {
    data = data.filter(t => t.status === filter);
  }

  if (sort) {
    data.sort((a,b)=> a[sort].localeCompare(b[sort]));
  }

  tripTable.innerHTML = "";

  data.forEach(t => {
    tripTable.innerHTML += `
      <tr>
        <td>${t.id}</td>
        <td>${t.type}</td>
        <td>${t.origin}</td>
        <td>${t.destination}</td>
        <td>${t.driver}</td>
        <td><span class="status">${t.status}</span></td>
      </tr>
    `;
  });
}

renderTrips();