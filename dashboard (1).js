function go(page){
  window.location.href = page;
}

const data = [
  {trip:1, vehicle:"Truck-12", driver:"John", status:"On Trip", location:"Mumbai"},
  {trip:2, vehicle:"Van-05", driver:"Rohit", status:"Available", location:"Ahmedabad"},
  {trip:3, vehicle:"Bike-09", driver:"Monik", status:"In Shop", location:"Surat"},
  {trip:4, vehicle:"Truck-22", driver:"Amit", status:"On Trip", location:"Delhi"}
];

function renderTable(){
  let search = document.getElementById("search").value.toLowerCase();
  let filter = document.getElementById("filterStatus").value;
  let sort = document.getElementById("sortBy").value;

  let rows = [...data];

  if(search){
    rows = rows.filter(r =>
      r.vehicle.toLowerCase().includes(search) ||
      r.driver.toLowerCase().includes(search)
    );
  }

  if(filter){
    rows = rows.filter(r => r.status === filter);
  }

  if(sort){
    rows.sort((a,b)=>a[sort].localeCompare(b[sort]));
  }

  let body = document.getElementById("tableBody");
  body.innerHTML="";

  let active=0, maint=0, pending=0;

  rows.forEach(r=>{
    if(r.status==="On Trip") active++;
    if(r.status==="In Shop") maint++;
    if(r.status==="Available") pending++;

    body.innerHTML += `
      <tr>
        <td>${r.trip}</td>
        <td>${r.vehicle}</td>
        <td>${r.driver}</td>
        <td class="status-${r.status}">${r.status}</td>
        <td>${r.location}</td>
      </tr>
    `;
  });

  document.getElementById("activeCount").innerText = active;
  document.getElementById("maintCount").innerText = maint;
  document.getElementById("pendingCount").innerText = pending;
}

renderTable();