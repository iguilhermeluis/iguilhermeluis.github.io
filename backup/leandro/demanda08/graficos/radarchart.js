//function GerarGraficoRiskHeatMap(chartDivId, data, titulo, valorX, valorY, valor, toolTip, corFundoX, corFundoY, textoLabel) {

function gerarRadarChart(
  chartDivId,
  data,
  titulo,
  valorX,
  valorY,
  valor,
  toolTip,
  corFundoX,
  corFundoY,
  textoLabel
) {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create(chartDivId, am4charts.RadarChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.language.locale = am4lang_pt_BR;
  chart.dateFormatter.language = new am4core.Language();
  chart.dateFormatter.language.locale = am4lang_pt_BR;

  if (titulo != "") {
    let titleRisk = chart.titles.create();
    titleRisk.text = titulo;
    titleRisk.fontSize = 18;
    titleRisk.marginBottom = 20;
  }

  //chart.padding(20, 20, 20, 20);
  chart.colors.step = 4;

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());

  categoryAxis.dataFields.category = "InterpretacaoFM";

  categoryAxis.renderer.labels.template.location = 0.5;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.tooltipLocation = 0.5;
  categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
  categoryAxis.renderer.axisFills.template.disabled = true;
  categoryAxis.interactionsEnabled = false;
  categoryAxis.renderer.minGridDistance = 10;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.labels.template.horizontalCenter = "left";
  /* valueAxis.min = 0;
        valueAxis.max = 1000;*/

  valueAxis.strictMinMax = true;
  valueAxis.renderer.maxLabelPosition = 0.99;
  valueAxis.renderer.minGridDistance = 10;
  valueAxis.renderer.grid.template.strokeOpacity = 0.07;
  valueAxis.renderer.axisFills.template.disabled = true;
  valueAxis.interactionsEnabled = false;

  // Create series
  function createSeries(name, color) {
    let series = chart.series.push(new am4charts.RadarColumnSeries());
    series.columns.template.tooltipText = toolTip;
    series.name = name;
    series.dataFields.categoryY = "InterpretacaoFM";
    series.dataFields.valueX = "QtdClientes";
    series.dataFields.color = "CorFundoR";
    series.stacked = true;
    series.columns.template.fill = am4core.color(color);
    series.columns.template.fillOpacity = 0.7;
    series.columns.template.stroke = am4core.color("#000000");
    series.columns.template.strokeWidth = 1;
    series.columns.template.strokeOpacity = 1;

    /*series.columns.template.adapter.add("fill", function (fill, target) {
      return target.dataItem.color;
    });*/

    return series;
  }

  dataInterpretacaoRObj = {
    Recente: { color: "#64c832" },
    Atenção: { color: "#fff900" },
    "Em Risco": { color: "#ff8700" },
    Perdido: { color: "#d10a00" },
    Hibernando: { color: "#7b7b7b" },
    Desativados: { color: "#000000" },
  };

  Object.keys(dataInterpretacaoRObj).map((el, index) => {
    createSeries(el, dataInterpretacaoRObj[el].color);
  });

  // Legend
  chart.legend = new am4charts.Legend();

  chart.data = data;

  chart.seriesContainer.zIndex = -1;

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.exportable = false;
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.exportable = false;

  chart.cursor = new am4charts.RadarCursor();
  chart.cursor.lineY.disabled = true;
}
