// JavaScript source code
function GerarGraficoMultiAxisXY(chartDivId, data) {
  //, titulo, legendaX, legendaY, valorX, valorY, valor, toolTip, corFundo, range)
  // Create chart instance
  var chartMultiAxis = am4core.create("chartdivMultiAxis", am4charts.XYChart);

  function ConfiguracaoInicial() {
    chartMultiAxis.colors.step = 2;
    chartMultiAxis.maskBullets = false;

    chartMultiAxis.language.locale = am4lang_pt_BR;
    chartMultiAxis.dateFormatter.language = new am4core.Language();
    chartMultiAxis.dateFormatter.language.locale = am4lang_pt_BR;
  }
  ConfiguracaoInicial();

  var valorTotalM = 0;

  function TotalSumM(data) {
    var valorTotal = 0;

    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      valorTotal = valorTotal + item.SumM;
    }
    return valorTotal;
  }

  valorTotalM = TotalSumM(dadosclusters);

  var dataFormat = dadosclusters.map((item) => {
    //let calcBullet = (parseFloat(item.SumM) / 100).toFixed(1);
    let calcBullet = (parseFloat(item.SumM) / valorTotalM) * 100;
    let ver = { calcBullet: calcBullet };
    return { ...item, ...ver };
  });

  chartMultiAxis.data = dataFormat;

  //function CriarSerieClientes() {
  // Add category axis
  var categoryAxis = chartMultiAxis.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "ClusterId";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 50;
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.fullWidthTooltip = true;

  /* Decorate axis tooltip content */
  categoryAxis.adapter.add("getTooltipText", function (text, target) {
    return "Cluster: [bold]" + text + "[/]";
  });

  // Add value axis
  var valueAxis = chartMultiAxis.yAxes.push(new am4charts.ValueAxis());
  //valueAxis.title.text = "Quantidade";
  valueAxis.fontSize = 12;

  // Add series
  var series = chartMultiAxis.series.push(new am4charts.ColumnSeries());
  series.name = "Total de Clientes";
  series.dataFields.categoryX = "ClusterId";
  series.dataFields.valueY = "QtdClientes";
  series.columns.template.fillOpacity = 0.7;
  series.columns.template.propertyFields.fill = "CorFundoFM";
  series.columns.template.propertyFields.stroke = "CorFundoFM";

  series.sequencedInterpolation = true;
  series.columns.template.tooltipText =
    "[bold]Cluster:[/] {ClusterId}\n{InterpretacaoFM} - {InterpretacaoR}\n[bold]Qtd. Clientes[/]: {QtdClientes}";


  /*DEMANDA TOOLTIP DINAMICO O panelCheckAxis está FIXO, agora terá que passar
   mais uma propriedade para o gráfico, no caso o id do painel de filtro dos gráficos

  series.tooltipHTML = toolTipBubble("tooltip-" + chartDivId, "panelCheckAxis", chartDivId);
  series.tooltip.label.interactionsEnabled = true;
  series.tooltip.keepTargetHover = true;
  series.tooltip.pointerOrientation = "vertical"; */

  

  /*Qtd. Pedidos*/
  var QtdPedidosAxis = chartMultiAxis.yAxes.push(new am4charts.ValueAxis());
  QtdPedidosAxis.renderer.grid.template.disabled = true;
  QtdPedidosAxis.renderer.labels.template.disabled = false;
  QtdPedidosAxis.renderer.opposite = true;
  //QtdPedidosAxis.title.text = "QtdPedidos";
  QtdPedidosAxis.fontSize = 12;

  // Add cursor
  chartMultiAxis.cursor = new am4charts.XYCursor();
  chartMultiAxis.cursor.fullWidthLineX = true;
  chartMultiAxis.cursor.xAxis = categoryAxis;
  chartMultiAxis.cursor.lineX.strokeOpacity = 0;
  chartMultiAxis.cursor.lineX.fill = am4core.color("#000");
  chartMultiAxis.cursor.lineX.fillOpacity = 0.1;

  chartMultiAxis.leftAxesContainer.layout = "vertical";

  return [chartMultiAxis, series];
}
