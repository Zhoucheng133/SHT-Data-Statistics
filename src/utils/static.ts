export const recentHConfig=(times: any, max: number[], min: number[])=>{

  const allValues = max.concat(min);
  const globalMin = Math.floor(Math.min(...allValues) - 2);
  const globalMax = Math.ceil(Math.max(...allValues) + 2);

  return {
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        let time = params[0].axisValue;
        let content = `${time}<br/>`;
        params.forEach((item: any) => {
          const unit = "°C";
          content += `${item.seriesName}: ${item.data}${unit}<br/>`;
        });
        return content;
      }
    },
    legend: {
      data: ["max", "min"],
      top: "5%",
      selected: {
        "max": true,
        "min": true
      },
      textStyle: {
        fontSize: '15'
      }
    },
    grid: {
      top: "15%",
      left: "8%",
      right: "8%",
      bottom: "10%"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: times,
      axisLabel: {
        rotate: 45,
        interval: "auto",
        fontSize: '16'
      }
    },
    yAxis: [
      {
        type: "value",
        name: "°C",
        position: "left",
        axisLine: {
          lineStyle: { color: "#ff6b6b" }
        },
        splitLine: { show: true },
        min: globalMin,
        max: globalMax,
        axisLabel :{
          fontSize: '16'
        }
      },
    ],
    series: [
      {
        name: "max",
        type: "line",
        smooth: true,
        data: max,
        yAxisIndex: 0,
        itemStyle: { color: "#ff6b6b" },
        symbol: "circle",
        symbolSize: 8
      },
      {
        name: "min",
        type: "line",
        smooth: true,
        data: min,
        yAxisIndex: 0,
        itemStyle: { color: "#3398db" },
        symbol: "circle",
        symbolSize: 8
      }
    ]
  };
}

export const todayConfig=(times: any, temps: number[], hums: number[])=>{
  return {
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        let time = params[0].axisValue;
        let content = `${time}<br/>`;
        params.forEach((item: any) => {
          const unit = item.seriesName === "Temperature" ? "°C" : "%";
          content += `${item.seriesName === "Temperature" ? "🌡" : "💧"} ${item.seriesName}: ${item.data}${unit}<br/>`;
        });
        return content;
      }
    },
    legend: {
      data: ["Temperature", "Humidity"],
      top: "5%",
      selected: {
        "Temperature": true,
        "Humidity": false
      },
      textStyle: {
        fontSize: '15'
      }
    },
    grid: {
      top: "15%",
      left: "8%",
      right: "8%",
      bottom: "10%"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: times,
      axisLabel: {
        rotate: 45,
        interval: "auto",
        fontSize: '16'
      }
    },
    yAxis: [
      {
        type: "value",
        name: "Temperature (°C)",
        position: "left",
        axisLine: {
          lineStyle: { color: "#ff6b6b" }
        },
        splitLine: { show: true },
        min: function (value: any) {
          return (value.min - 2).toFixed(1);
        },
        max: function (value: any) {
          return (value.max + 2).toFixed(1);
        },
        axisLabel :{
          fontSize: '16'
        }
      },
      {
        type: "value",
        name: "Humidity (%)",
        position: "right",
        axisLine: {
          lineStyle: { color: "#3398db" }
        },
        splitLine: { show: false },
        min: function (value: any) {
          return (value.min - 2).toFixed(1);
        },
        max: function (value: any) {
          return (value.max + 2).toFixed(1);
        },
      }
    ],
    series: [
      {
        name: "Temperature",
        type: "line",
        smooth: true,
        data: temps,
        yAxisIndex: 0,
        itemStyle: { color: "#ff6b6b" },
        symbol: "circle",
        symbolSize: 8
      },
      {
        name: "Humidity",
        type: "line",
        smooth: true,
        data: hums,
        yAxisIndex: 1,
        itemStyle: { color: "#3398db" },
        symbol: "circle",
        symbolSize: 8
      }
    ]
  };
}