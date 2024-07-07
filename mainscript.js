// Bar Graph
var xValues = ["2020", "2021", "2022", "2023", "2024"];
var yValues = [65, 56, 77, 73,86 ];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("mybarGraph", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Year wise progress"
    }
  }
});

// Pie chart 
var xValues = ["Section-1", "Section-2", "Section-3", "Section-4", "Section-5"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("mypieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Student Report Analysis"
    }
  }
});