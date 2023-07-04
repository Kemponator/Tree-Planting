"use strict";

// console.log("hi");

const dataFromLS = JSON.parse(localStorage.getItem("weekly-data"));
const weeksFromLS = JSON.parse(localStorage.getItem("weeks"));

console.log(weeksFromLS);

// console.log(dataFromLS);

function renderBarChart() {
  const barChartCanvas = document.getElementById("bar-chart");

  const weekNumbers = [];
  const dataSets = [];

  for (let i = 0; i < dataFromLS.length; i++) {
    dataSets.push({
      label: dataFromLS[i].name,
      data: dataFromLS[i].treesPerWeek,
    });
  }

  for (let i = 0; i < weeksFromLS; i++) {
    weekNumbers.push(`Week ${i + 1}`);
  }

  const barChartData = {
    labels: weekNumbers,
    datasets: dataSets,
  };

  const barChart = new Chart(barChartCanvas, {
    type: "bar",
    data: barChartData,
  });

  console.log(weekNumbers);
  localStorage.clear();
}

renderBarChart();
