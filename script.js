// SIDEBAR TOGGLE

let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



// ---------- CHARTS ----------

// BAR CHART
let barChartOptions = {
    series: [{
        data: [10,20,30,40,50,60,70,80]
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 400,
        width: 1200,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#FF1919",
        "#00BD35",

    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: true,
            columnWidth: "40%",
        }
    },
    noData: {
        text: "Loading..."
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: false,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Neuron Update", "NeuronETL", "Recharger Clean Duplicates", "Recharger API", "Smarthub Main Website", "GURU Body Corporate Updates", "Import Namakhoi Readings", "BizTalk Electricity Publishing Distribution Job"],
        title: {
            text: "Jobs Run",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTicks: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            style: {
                color:  "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

/*CALLING DYNAMIC API DATA REPLACE URL FOR DB API DATA*/

/*fetch("http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log(data)
        barChart.updateSeries([{
            name: "sales",
            data: data
            }])

    })
    .catch(reportError =>{
        console.log("error")
    }
);*/

let barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


/*Table*/

fetch('http://localhost:3000/customers') // The URL should match the server-side script that returns the data
    .then(response => response.json())
    .then(data => {

        const tableBody = document.getElementById('table-body-customers');

        data.forEach(item => {
            const row = tableBody.insertRow(-1);
            const idCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const lastnameCell = row.insertCell(2);
            const birthCell = row.insertCell(3);
            const phoneCell = row.insertCell(4);
            const addressCell = row.insertCell(5);
            const cityCell = row.insertCell(6);
            const stateCell = row.insertCell(7);
            const pointsCell = row.insertCell(8);


            idCell.textContent = item.customer_id;
            nameCell.textContent = item.first_name;
            lastnameCell.textContent = item.last_name;
            birthCell.textContent = item.birth_date;
            phoneCell.textContent = item.phone;
            addressCell.textContent = item.address;
            cityCell.textContent = item.city;
            stateCell.textContent = item.state;
            pointsCell.textContent = item.points;

        });
    })
    .catch(error => console.error('Error fetching data:', error));
