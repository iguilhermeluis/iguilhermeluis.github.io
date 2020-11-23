function gerarChartBubble(
  chartDivId,
  data,
  titulo,
  valueX,
  valueY,
  value,
  category,
  tooltip
) {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chartBubble = am4core.create(chartDivId, am4charts.XYChart);
  chartBubble.maskBullets = false;

  var tittleBubble = chartBubble.titles.create();
  tittleBubble.text = titulo;

  tittleBubble.fontSize = 18;
  tittleBubble.marginBottom = 20;

  chartBubble.language.locale = am4lang_pt_BR;
  chartBubble.dateFormatter.language = new am4core.Language();
  chartBubble.dateFormatter.language.locale = am4lang_pt_BR;

  var xAxisBubble = chartBubble.xAxes.push(new am4charts.ValueAxis());
  var yAxisBubble = chartBubble.yAxes.push(new am4charts.ValueAxis());

  xAxisBubble.title.text = "Data da Última Compra (em dias)";
  yAxisBubble.title.text = "Quantidade de Pedidos (Fidelidade)";

  xAxisBubble.title.fontWeight = 600;
  yAxisBubble.title.fontWeight = 600;

  xAxisBubble.renderer.minGridDistance = 50;

  xAxisBubble.renderer.grid.template.disabled = false;
  yAxisBubble.renderer.grid.template.disabled = false;
  xAxisBubble.renderer.axisFills.template.disabled = true;
  yAxisBubble.renderer.axisFills.template.disabled = true;
  yAxisBubble.renderer.ticks.template.disabled = false;
  xAxisBubble.renderer.ticks.template.disabled = false;

  yAxisBubble.renderer.inversed = false;

  var seriesBubble = chartBubble.series.push(new am4charts.ColumnSeries());

  seriesBubble.dataFields.valueX = valueX;
  seriesBubble.dataFields.valueY = valueY;
  seriesBubble.dataFields.value = value;
  seriesBubble.dataFields.category = category;

  seriesBubble.columns.template.disabled = true;
  seriesBubble.sequencedInterpolation = true;

 
  function createRanger(min, max, color, text) {
    var range = xAxisBubble.axisRanges.create();
    range.value = min;
    range.endValue = max;
    range.axisFill.fill = am4core.color(color);
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0;
    createEnvent(min, color, text);
  }

  function createEnvent(value, color, text) {
    var event = xAxisBubble.axisRanges.create();
    event.value = value;
    event.bulletBubble = new am4core.Triangle();
    event.bulletBubble.width = 15;
    event.bulletBubble.height = 11;
    event.bulletBubble.fill = am4core.color(color);
    event.bulletBubble.horizontalCenter = "middle";
    event.bulletBubble.tooltipText = text;


     
  }

  //Fazer um For do BD para parametrizar os valores por Interpretação R
  createRanger(0, 10, "#64c832", "Recente");
  createRanger(10, 20, "#fff900", "Atenção");
  createRanger(20, 38, "#ff8700", "Em Risco");
  createRanger(38, 64, "#d10a00", "Perdido");
  createRanger(64, 91, "#7b7b7b", "Hibernando");

  var bulletBubble = seriesBubble.bullets.push(new am4core.Circle());



  
    /*DEMANDA TOOLTIP DINAMICO O panelCheckAxis está FIXO, agora terá que passar
      mais uma propriedade para o gráfico, no caso o id do painel de filtro dos gráficos
    */
    let tooltipHtmlCustom =toolTipBubble("tooltip-" + chartDivId, "panelCheck", chartDivId);
    bulletBubble.tooltipHTML = tooltipHtmlCustom;
    /*
      O CHART PRECISA DESSAS PROPRIEDADES PARA DEIXAR OS LINKS CLICAVEIS
    */
    seriesBubble.tooltip.label.interactionsEnabled = true;
    seriesBubble.tooltip.keepTargetHover = true;
    seriesBubble.tooltip.pointerOrientation = "vertical";





    bulletBubble.strokeWidth = 3;
    bulletBubble.stroke = am4core.color("#ffffff");
    bulletBubble.strokeOpacity = 0;
    bulletBubble.propertyFields.fill = "CorFundoFM";

    chartBubble.data = data;

  seriesBubble.heatRules.push({
    property: "radius",
    target: bulletBubble,
    min: 2,
    max: 40,
  });

  bulletBubble.hiddenState.properties.scale = 0.01;
  bulletBubble.hiddenState.properties.opacity = 1;

  var hoverStateBublle = bulletBubble.states.create("hover");
  hoverStateBublle.properties.strokeOpacity = 1;







  return [chartBubble, seriesBubble];
}
