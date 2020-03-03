const renderChart = (data, labels) => {
  const ctx = document.getElementById('myChart');
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [
        {
          label: 'My GPA',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)', // 2355FF rgb(255, 99, 132)
          data: data
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
};

// render chat with information when load page!
window.addEventListener('load', () => {
  const data = [3.77, 0, 0, 0];
  const labels = [
    '1st year-sem1',
    '1st year-sem2',
    '2nd year-sem1',
    '2nd year-sem2'
  ];
  renderChart(data, labels);
});
