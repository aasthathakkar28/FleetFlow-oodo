let drivers = JSON.parse(localStorage.getItem("drivers")) || [
  {name:"John",license:"23223",expiry:"22/36",completion:92,safety:89,complaints:4},
  {name:"Amit Patel",license:"77821",expiry:"10/25",completion:85,safety:70,complaints:8},
  {name:"Rohit Shah",license:"44512",expiry:"06/27",completion:90,safety:88,complaints:2},
  {name:"Karan Dave",license:"99887",expiry:"03/24",completion:78,safety:65,complaints:9},
  {name:"Monik Joshi",license:"66554",expiry:"11/28",completion:95,safety:93,complaints:1},
  {name:"Yash Mehta",license:"33441",expiry:"08/26",completion:88,safety:82,complaints:3},
  {name:"Prisha Shah",license:"22119",expiry:"01/25",completion:91,safety:86,complaints:2},
  {name:"Neha Vadhner",license:"55678",expiry:"05/29",completion:84,safety:79,complaints:5},
  {name:"Lakshya Mehta",license:"77331",expiry:"09/27",completion:89,safety:81,complaints:4},
  {name:"Kirit Patel",license:"11990",expiry:"12/26",completion:93,safety:90,complaints:1},
  {name:"Harsh Dodiya",license:"88221",expiry:"07/24",completion:80,safety:72,complaints:6},
  {name:"Raj Malvi",license:"99331",expiry:"04/28",completion:87,safety:84,complaints:3},
  {name:"Ankit Rana",license:"55421",expiry:"02/25",completion:76,safety:60,complaints:10},
  {name:"Vivek Joshi",license:"66778",expiry:"06/29",completion:94,safety:91,complaints:0},
  {name:"Sahil Parmar",license:"33489",expiry:"10/26",completion:83,safety:78,complaints:5},
  {name:"Darshan Patel",license:"11290",expiry:"01/27",completion:88,safety:85,complaints:2}
];

function renderDrivers(){
  let s = search.value.toLowerCase();
  let filter = filterBy.value;
  let sort = sortBy.value;

  let data = [...drivers];

  /* SEARCH */
  if(s){
    data = data.filter(d =>
      d.name.toLowerCase().includes(s) ||
      d.license.includes(s)
    );
  }

  /* FILTER */
  if(filter==="Good"){
    data = data.filter(d => d.safety>=80 && d.complaints<=5);
  }
  if(filter==="Risk"){
    data = data.filter(d => d.safety<80 || d.complaints>5);
  }

  /* SORT */
  if(sort==="completion"){
    data.sort((a,b)=>b.completion-a.completion);
  }
  if(sort==="safety"){
    data.sort((a,b)=>b.safety-a.safety);
  }

  driverTable.innerHTML="";

  data.forEach(d=>{
    let cls = d.safety>=80 ? "good" : "risk";
    driverTable.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.license}</td>
        <td>${d.expiry}</td>
        <td>${d.completion}%</td>
        <td><span class="score ${cls}">${d.safety}%</span></td>
        <td>${d.complaints}</td>
      </tr>
    `;
  });

  localStorage.setItem("drivers",JSON.stringify(drivers));
}

renderDrivers();