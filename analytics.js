/* Fuel Efficiency Line Chart */
new Chart(document.getElementById("fuelChart"), {
  type: "line",
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "km/L",
      data: [12,14,13,15,16,18],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.2)",
      tension: 0.4,
      fill:true
    }]
  }
});

/* Costliest Vehicles Bar Chart */
new Chart(document.getElementById("costChart"), {
  type: "bar",
  data: {
    labels: ["VAN-03","TRK-01","TRK-02","VAN-07","TRK-05"],
    datasets: [{
      label: "Cost (L)",
      data: [2,3.5,4,2.8,5],
      backgroundColor: "#f97316"
    }]
  }
});