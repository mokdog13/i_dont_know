window.onload = function(){
/*
	var predChart = document.getElementById('predatorChart').getContext('2d');
	var preyChart = document.getElementById('preyChart').getContext('2d');
	var vChart = document.getElementById('vegetationChart').getContext('2d');
*/

	var ppv = document.getElementById('ppvChart').getContext('2d');
	
	//Font Settings
	Chart.defaults.global.defualtFontFamily = 'Lato';
	Chart.defaults.global.defaultFontSize = 20;
	Chart.defaults.global.defaultFontColor = '#777';


	var data1 = 9;


	var updateIntervarl = 1000;
	var numberElements = 10;
	var current_time = 0;


	var updateCount = 0;


/*

	var predatorChart = new Chart(predChart,{
		type: 'line', //type of chart, we can have pie, bar, radar, etc.

		data:{
			datasets:
			[ //array of objects, can have more than one
				{ 
				label: ['Predator'],
				data: 0,
				//backgroundColor:'rgb(153,102,99',
				fill: false,
				borderColor: 'red',
				borderWidth: 1
				},

			]
		},

		options: {
			title:{
				display: true,
				text: 'Predator Population',
				fontSize: 15,
			},

			legend: {
				display: false,
			},

		}
	});


	var preyChart = new Chart(preyChart,{
		type: 'line', //type of chart, we can have pie, bar, radar, etc.

		data:{
			datasets:
			[ //array of objects, can have more than one
				{ 
				label: ['Prey'],
				data: 0,
				//backgroundColor:'rgb(153,102,99',
				fill: false,
				borderColor: 'red',
				borderWidth: 1
				},

			]
		},

		options:{
			title:{
				display: true,
				text: 'Prey Population',
				fontSize: 15,
			},

			layout:{
				padding:{
					left: 0,
					right: 0,
					bottom: 0,
					top: 0,
				}
			},

			legend: {
				display: false,
			},
		}
	});


	var vegetationChart = new Chart(vChart,{
		type: 'line', //type of chart, we can have pie, bar, radar, etc.

		data:{
			datasets:
			[ //array of objects, can have more than one
				{ 
				label: ['Vegetation'],
				data: 0,
				//backgroundColor:'rgb(153,102,99',
				fill: false,
				borderColor: 'red',
				borderWidth: 1
				},

			]
		},

		options:{
			title:{
				display: true,
				text: 'Vegetation Population',
				fontSize: 15,
			},

			layout:{
				padding:{
					left: 0,
					right: 0,
					bottom: 0,
					top: 0,
				}
			},

			legend: {
				display: false,
			},
		}
	});

*/

	var ppvc = new Chart(ppvChart,{
		type: 'line', //type of chart, we can have pie, bar, radar, etc.

		data:{
			datasets:
			[ //array of objects, can have more than one
				{ 
				label: ['Predator'],
				data: 0,
				backgroundColor:'rgb(153,102,99)',
				fill: false,
				borderColor: 'red',
				borderWidth: 1
				},

				{ 
				label: ['Prey'],
				data: 0,
				backgroundColor:'rgb(222,10,99)',
				fill: false,
				borderColor: 'blue',
				borderWidth: 1
				},

				{ 
				label: ['Vegetation'],
				data: 0,
				backgroundColor:'rgb(190,150,9)',
				fill: false,
				borderColor: 'green',
				borderWidth: 1
				},

			]
		},

		options: {
			title:{
				display: true,
				text: 'Predator/Prey/Vegetation Population',
				fontSize: 25,
			},

			legend: {
				display: false,
			},

		}
	});


	function updateChart(data){
		if(data){
			/*
			predatorChart.data.labels.push(current_time);
			predatorChart.data.datasets.forEach((dataset)=>{
				dataset.data.push(data);
			});

			preyChart.data.labels.push(current_time);
			preyChart.data.datasets.forEach((dataset)=>{
				dataset.data.push(data);
			});

			vegetationChart.data.labels.push(current_time);
			vegetationChart.data.datasets.forEach((dataset)=>{
				dataset.data.push(data);
			});
			*/
			ppvc.data.labels.push(current_time);
			ppvc.data.datasets[0].data.push(data);
			data =+ 5;
			ppvc.data.datasets[1].data.push(data);
			data =+ 2;
			ppvc.data.datasets[2].data.push(data);


			if(updateCount > numberElements){ //limits the instances of plants.... So chart can only have 200 instances of plants population displayed
				/*
				predatorChart.data.labels.shift(); // shifts bottom axis to the left
				predatorChart.data.datasets[0].data.shift();//shifts left axis up

				preyChart.data.labels.shift(); 
				preyChart.data.datasets[0].data.shift();

				vegetationChart.data.labels.shift(); 
				vegetationChart.data.datasets[0].data.shift();
				*/
				ppvc.data.labels.shift(); 
				ppvc.data.datasets[0].data.shift();
			}
			else updateCount++;
		
			current_time++;
			/*
			predatorChart.update();
			preyChart.update();
			vegetationChart.update();
			*/
			ppvc.update();
		}
	};

	function updateData(){
		console.log("update data");
		updateChart(data1);
		data1++;

		setTimeout(updateData, updateIntervarl);
	}


	updateData();




}
