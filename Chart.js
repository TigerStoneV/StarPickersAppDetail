
window.onload = () => {
    var chartArea = document.getElementById("myChart");
    // 차트를 생성한다.
    var myChart = new Chart(chartArea, {
      // ①차트의 종류(String)
      type: "bar",
      // ②차트의 데이터(Object)
      data: {
        // ③x축에 들어갈 이름들(Array)
        labels: ["급가속", "급감속", "급회전", "과속", "급출발"],
        // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
        datasets: [
          {
            // ⑤dataset의 이름(String)
            label: "rider Percentage",
            // ⑥dataset값(Array)
            data: [urlParams.get("accel"), urlParams.get("decel"), urlParams.get("turn"), urlParams.get("overSpeed"), urlParams.get("start")],
            // ⑦dataset의 배경색(rgba값을 String으로 표현)
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'],
            borderColor: ['rgb(255, 99, 132,1.5)',
                'rgba(54, 162, 235, 1.5)',
                'rgba(255, 206, 86, 1.5)',
                'rgba(75, 192, 192, 1.5)',
                'rgba(153, 102, 255, 1.5)',
                'rgba(255, 159, 64, 1.5)'],
            // ⑨dataset의 선 두께(Number)
            borderWidth: 1,
          },
        ],
      },
      // ⑩차트의 설정(Object)
      options: {
        // ⑪축에 관한 설정(Object)
        scales: {
          // ⑫y축에 대한 설정(Object)
          yAxes: [{
            ticks: {
                // OR //
                beginAtZero: true ,  // minimum value will be 0.
                max:100,
            }
        }]
        },
      },
    });
  };