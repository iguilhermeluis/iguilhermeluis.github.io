function gerarChartRisk(
  chartDivId,
  data,
  titulo,
  valorX,
  valorY,
  valor,
  tooltip
) {
  // chartRisk code

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chartRisk = am4core.create(chartDivId, am4charts.XYChart);
  chartRisk.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chartRisk.maskBullets = false;

  var titleRisk = chartRisk.titles.create();
  titleRisk.text = titulo;
  titleRisk.fontSize = 18;
  titleRisk.marginBottom = 20;

  chartRisk.language.locale = am4lang_pt_BR;
  chartRisk.dateFormatter.language = new am4core.Language();
  chartRisk.dateFormatter.language.locale = am4lang_pt_BR;

  var xAxisRisk = chartRisk.xAxes.push(new am4charts.CategoryAxis());
  var yAxisRisk = chartRisk.yAxes.push(new am4charts.CategoryAxis());

  xAxisRisk.dataFields.category = valorX;
  yAxisRisk.dataFields.category = valorY;

  xAxisRisk.renderer.grid.template.disabled = true;
  xAxisRisk.renderer.minGridDistance = 40;

  yAxisRisk.renderer.grid.template.disabled = true;
  yAxisRisk.renderer.inversed = true;
  yAxisRisk.renderer.minGridDistance = 30;

  var seriesRisk = chartRisk.series.push(new am4charts.ColumnSeries());
  seriesRisk.dataFields.categoryX = valorX;
  seriesRisk.dataFields.categoryY = valorY;
  seriesRisk.dataFields.value = valor;
  seriesRisk.sequencedInterpolation = true;
  seriesRisk.defaultState.transitionDuration = 3000;

  // Set up column appearance
  var columnRisk = seriesRisk.columns.template;
  columnRisk.strokeWidth = 2;
  columnRisk.strokeOpacity = 1;
  columnRisk.stroke = am4core.color("#ffffff");
  columnRisk.tooltipText = tooltip;
  columnRisk.width = am4core.percent(100);
  columnRisk.height = am4core.percent(100);
  columnRisk.column.cornerRadius(6, 6, 6, 6);
  columnRisk.propertyFields.fill = "CorFundoR";

  // Set up bullet appearance
  var bullet1Risk = seriesRisk.bullets.push(new am4charts.CircleBullet());
  //bullet1Risk.circle.propertyFields.radius = "value";
  bullet1Risk.circle.fill = "{CorFundoFM}"; //am4core.color("#000");
  bullet1Risk.circle.strokeWidth = 0;
  bullet1Risk.circle.fillOpacity = 0.7;
  bullet1Risk.interactionsEnabled = false;

  var bullet2Risk = seriesRisk.bullets.push(new am4charts.LabelBullet());
  bullet2Risk.label.text = "{QtdClientes}";
  bullet2Risk.label.fill = am4core.color("#fff");
  bullet2Risk.zIndex = 1;
  bullet2Risk.fontSize = 11;
  bullet2Risk.interactionsEnabled = false;

  // define colors
  var colors = {
    //"critical": "#ca0101",
    //"bad": "#e17a2d",
    //"medium": "#e1d92d",
    //"good": "#5dbe24",
    //"verygood": "#0b7d03"
  };

  chartRisk.data = data;
  //chartRisk.data = processData(DATAEXCEL);

  var baseWidthRisk = Math.min(
    chartRisk.plotContainer.maxWidth,
    chartRisk.plotContainer.maxHeight
  );
  var maxRadiusRisk = baseWidthRisk / Math.sqrt(chartRisk.data.length) / 2 - 2; // 2 is jast a margin
  seriesRisk.heatRules.push({
    min: 10,
    max: maxRadiusRisk,
    property: "radius",
    target: bullet1Risk.circle,
  });

  chartRisk.plotContainer.events.on("maxsizechanged", function () {
    var side = Math.min(
      chartRisk.plotContainer.maxWidth,
      chartRisk.plotContainer.maxHeight
    );
    bullet1Risk.circle.clones.each(function (clone) {
      clone.scale = side / baseWidthRisk;
      //clone.fill = am4core.color("blue");
    });
  });

  return [chartRisk, seriesRisk];
}
