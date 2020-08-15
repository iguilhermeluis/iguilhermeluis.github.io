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

  // Add legend
  chartMultiAxis.legend = new am4charts.Legend();
  chartMultiAxis.legend.fontSize = 10;

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

  /*Qtd. Pedidos*/
  var QtdPedidosAxis = chartMultiAxis.yAxes.push(new am4charts.ValueAxis());
  QtdPedidosAxis.renderer.grid.template.disabled = true;
  QtdPedidosAxis.renderer.labels.template.disabled = false;
  QtdPedidosAxis.renderer.opposite = true;
  //QtdPedidosAxis.title.text = "QtdPedidos";
  QtdPedidosAxis.fontSize = 12;

  var QtdPedidosSeries = chartMultiAxis.series.push(new am4charts.LineSeries());
  QtdPedidosSeries.connect = false;
  QtdPedidosSeries.id = "g4";

  QtdPedidosSeries.dataFields.categoryX = "ClusterId";
  QtdPedidosSeries.dataFields.valueY = "SumF";

  QtdPedidosSeries.yAxis = QtdPedidosAxis;
  QtdPedidosSeries.name = "Total Pedidos";
  QtdPedidosSeries.strokeWidth = 2;
  QtdPedidosSeries.tooltipText =
    "[bold]Cluster:[/] {ClusterId}\n{InterpretacaoFM} - {InterpretacaoR}\n[bold]Total de Pedidos[/]: {SumF}\n[bold]Frequência Média:[/] {AvgF} pedido(s)";

  var QtdPedidosBullet = QtdPedidosSeries.bullets.push(new am4charts.Bullet());

  var QtdPedidosRectangle = QtdPedidosBullet.createChild(am4core.Rectangle);
  QtdPedidosRectangle.horizontalCenter = "middle";
  QtdPedidosRectangle.verticalCenter = "middle";
  QtdPedidosRectangle.width = 7;
  QtdPedidosRectangle.height = 7;
  QtdPedidosRectangle.width = 7;
  QtdPedidosRectangle.height = 7;

  var QtdPedidosState = QtdPedidosBullet.states.create("hover");
  QtdPedidosState.properties.scale = 1.2;

  var QtdPedidosLabel = QtdPedidosSeries.bullets.push(
    new am4charts.LabelBullet()
  );

  QtdPedidosLabel.label.horizontalCenter = "left";
  QtdPedidosLabel.label.dx = 14;

  /*SOMATORIO M*/
  var SomatorioMAxis = chartMultiAxis.yAxes.push(new am4charts.ValueAxis());
  SomatorioMAxis.renderer.grid.template.disabled = true;
  SomatorioMAxis.renderer.labels.template.disabled = false;
  SomatorioMAxis.renderer.opposite = true;
  SomatorioMAxis.fontSize = 12;

  var SomatorioMSeries = chartMultiAxis.series.push(new am4charts.LineSeries());
  SomatorioMSeries.id = "g2";
  SomatorioMSeries.connect = false;

  SomatorioMSeries.dataFields.categoryX = "ClusterId";
  SomatorioMSeries.dataFields.valueY = "SumM";

  SomatorioMSeries.yAxis = SomatorioMAxis;
  SomatorioMSeries.name = "Total em Vendas $";
  SomatorioMSeries.strokeWidth = 2;
  SomatorioMSeries.tooltipText =
    "[bold]Cluster:[/] {ClusterId}\n{InterpretacaoFM} - {InterpretacaoR}\n[bold]Valor das Vendas[/]: R$ {SumM.formatNumber('#,###.00')}\n[bold]Ticket Médio[/]: R$ {AvgM.formatNumber('#,###.00')}";

  var SomatorioMBullet = SomatorioMSeries.bullets.push(
    new am4charts.CircleBullet()
  );
  SomatorioMBullet.circle.fill = am4core.color("#fff");
  SomatorioMBullet.circle.strokeWidth = 2;
  SomatorioMBullet.circle.radius = 5;

  var SomatorioMState = SomatorioMBullet.states.create("hover");
  SomatorioMState.properties.scale = 1.2;

  var SomatorioMLabel = SomatorioMSeries.bullets.push(
    new am4charts.LabelBullet()
  );

  SomatorioMLabel.label.horizontalCenter = "left";
  SomatorioMLabel.label.dx = 14;

  var legend = new am4charts.Legend();
  legend.parent = chartMultiAxis.chartContainer;
  legend.align = "bottom";
  legend.valign = "bottom";
  legend.marginTop = "5px";
  legend.fontSize = 10;

  series.events.on("ready", function (ev) {
    var legenddata = [];
    var teste = [];
    var sequenceNumber = [];
    var sumValue = [];

    function toggleSlice(item) {
      var column = series.dataItems.getIndex(item);
      if (column.visible) {
        column.hide();
      } else {
        column.show();
      }
    }

    //series.columns.each(function (column, i) {
    //    let value = parseFloat(column.dataItem.column.dataItem.valueY);
    //    let nameCategory =
    //        column.dataItem.column.dataItem.dataContext.InterpretacaoFM;
    //    let fill = column.fill.hex;

    //    if (!teste[fill]) teste[fill] = [];
    //    teste[fill] = {
    //        name: nameCategory,
    //        fill: fill,
    //    };

    //    if (!sequenceNumber[fill]) sequenceNumber[fill] = [];
    //    sequenceNumber[fill].push(i);

    //    if (!sumValue[fill]) sumValue[fill] = [];
    //    sumValue[fill].push(value);

    //    legenddata.push({
    //        name: nameCategory,
    //        fill: fill,
    //    });
    //});

    //teste2 = Object.keys(teste).map((el) => {
    //    let valueColumn = sumValue[el]
    //        .reduce((a, b) => a + b, 0)
    //        .toFixed(0);
    //    teste[el].name = teste[el].name;
    //    let dataSequence = { sequence: sequenceNumber[el] };
    //    return { ...teste[el], ...dataSequence };
    //});

    //legend.data = teste2;

    //legend.itemContainers.template.events.on("hit", function (ev) {
    //    let sequenceItem = ev.target.dataItem._dataContext.sequence;
    //    sequenceItem.map((el) => {
    //        //hidden
    //        toggleSlice(el);
    //    });
    //});
  });

  // Add cursor
  chartMultiAxis.cursor = new am4charts.XYCursor();
  chartMultiAxis.cursor.fullWidthLineX = true;
  chartMultiAxis.cursor.xAxis = categoryAxis;
  chartMultiAxis.cursor.lineX.strokeOpacity = 0;
  chartMultiAxis.cursor.lineX.fill = am4core.color("#000");
  chartMultiAxis.cursor.lineX.fillOpacity = 0.1;

  chartMultiAxis.leftAxesContainer.layout = "vertical";

  return [chartMultiAxis, series, QtdPedidosSeries, SomatorioMSeries];
}
