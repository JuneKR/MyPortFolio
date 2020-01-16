function chartIt(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['1st year-sem1', '1st year-sem2', '2nd year-sem1', '2nd year-sem2'],
            datasets: [{
                label: 'My GPAX',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)', //2355FF rgb(255, 99, 132)
                data: [3.77, 0, 0, 0]
            }]
        },

        // Configuration options go here
        options: {}
    })
};