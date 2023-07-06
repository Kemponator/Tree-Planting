"use strict";

const dataFromLS = JSON.parse(localStorage.getItem("weekly-data"));
const weeksFromLS = JSON.parse(localStorage.getItem("weeks"));
const weekFromLS = JSON.parse(localStorage.getItem("week"));

function renderBarChart() {
  if (dataFromLS) {
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

    localStorage.clear();
  } else {
    window.location = "index.html";
  }
}

renderBarChart();
