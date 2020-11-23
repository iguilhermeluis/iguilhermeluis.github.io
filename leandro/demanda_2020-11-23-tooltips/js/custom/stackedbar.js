am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("stackedBarChart", am4charts.XYChart);

  // Add data
  chart.data = [
    {
      age: "85+",
      male: -0.1,
      female: 0.3,
    },
    {
      age: "80-54",
      male: -0.2,
      female: 0.3,
    },
    {
      age: "75-79",
      male: -0.3,
      female: 0.6,
    },
    {
      age: "70-74",
      male: -0.5,
      female: 0.8,
    },
    {
      age: "65-69",
      male: -0.8,
      female: 1.0,
    },
    {
      age: "60-64",
      male: -1.1,
      female: 1.3,
    },
    {
      age: "55-59",
      male: -1.7,
      female: 1.9,
    },
    {
      age: "50-54",
      male: -2.2,
      female: 2.5,
    },
    {
      age: "45-49",
      male: -2.8,
      female: 3.0,
    },
    {
      age: "40-44",
      male: -3.4,
      female: 3.6,
    },
    {
      age: "35-39",
      male: -4.2,
      female: 4.1,
    },
    {
      age: "30-34",
      male: -5.2,
      female: 4.8,
    },
    {
      age: "25-29",
      male: -5.6,
      female: 5.1,
    },
    {
      age: "20-24",
      male: -5.1,
      female: 5.1,
    },
    {
      age: "15-19",
      male: -3.8,
      female: 3.8,
    },
    {
      age: "10-14",
      male: -3.2,
      female: 3.4,
    },
    {
      age: "5-9",
      male: -4.4,
      female: 4.1,
    },
    {
      age: "0-4",
      male: -5.0,
      female: 4.8,
    },
  ];

  // Use only absolute numbers
  chart.numberFormatter.numberFormat = "#.#s";

  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "age";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.inversed = true;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.extraMin = 0.1;
  valueAxis.extraMax = 0.1;
  valueAxis.renderer.minGridDistance = 40;
  valueAxis.renderer.ticks.template.length = 5;
  valueAxis.renderer.ticks.template.disabled = false;
  valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
  valueAxis.renderer.labels.template.adapter.add("text", function (text) {
    return text == "Male" || text == "Female" ? text : text + "%";
  });

  // Create series
  var male = chart.series.push(new am4charts.ColumnSeries());
  male.dataFields.valueX = "male";
  male.dataFields.categoryY = "age";
  male.clustered = false;

  var maleLabel = male.bullets.push(new am4charts.LabelBullet());
  maleLabel.label.text = "{valueX}%";
  maleLabel.label.hideOversized = false;
  maleLabel.label.truncate = false;
  maleLabel.label.horizontalCenter = "right";
  maleLabel.label.dx = -10;

  var female = chart.series.push(new am4charts.ColumnSeries());
  female.dataFields.valueX = "female";
  female.dataFields.categoryY = "age";
  female.clustered = false;

  var femaleLabel = female.bullets.push(new am4charts.LabelBullet());
  femaleLabel.label.text = "{valueX}%";
  femaleLabel.label.hideOversized = false;
  femaleLabel.label.truncate = false;
  femaleLabel.label.horizontalCenter = "left";
  femaleLabel.label.dx = 10;

  var maleRange = valueAxis.axisRanges.create();
  maleRange.value = -10;
  maleRange.endValue = 0;
  maleRange.label.text = "Male";
  maleRange.label.fill = chart.colors.list[0];
  maleRange.label.dy = 20;
  maleRange.label.fontWeight = "600";
  maleRange.grid.strokeOpacity = 1;
  maleRange.grid.stroke = male.stroke;

  var femaleRange = valueAxis.axisRanges.create();
  femaleRange.value = 0;
  femaleRange.endValue = 10;
  femaleRange.label.text = "Female";
  femaleRange.label.fill = chart.colors.list[1];
  femaleRange.label.dy = 20;
  femaleRange.label.fontWeight = "600";
  femaleRange.grid.strokeOpacity = 1;
  femaleRange.grid.stroke = female.stroke;
}); // end am4core.ready()
