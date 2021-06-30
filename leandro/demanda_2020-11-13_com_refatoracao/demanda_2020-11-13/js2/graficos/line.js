// JavaScript source code
function GerarGraficoLine(chartDivId, data, valorX, valorY, ToolTip, min, max)
{
    // Create chart instance
    var chart = am4core.create("chartLine", am4charts.XYChart);

    chart.language.locale = am4lang_pt_BR;
    chart.dateFormatter.language = new am4core.Language();
    chart.dateFormatter.language.locale = am4lang_pt_BR;

    chart.data = dadosPedidosCliente;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "category";
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.disabled = false;
    dateAxis.renderer.fullWidthTooltip = true;

    dateAxis.min = min; 
    dateAxis.max = max; 

    dateAxis.dateFormats.setKey("day", "dd/MM/yyyy");
    dateAxis.renderer.labels.template.rotation = -65;

    var chartAxisLine = chart.yAxes.push(new am4charts.ValueAxis());
    chartAxisLine.renderer.grid.template.disabled = false;
    chartAxisLine.renderer.labels.template.disabled = false;
    chartAxisLine.title.text = "Valor do Pedido";

    //chartAxisLine.min = 500;
    //chartAxisLine.max = 1500; 

    var chartSeriesLine = chart.series.push(new am4charts.LineSeries());
    chartSeriesLine.id = "g2";
    chartSeriesLine.dataFields.valueY = valorY;
    chartSeriesLine.dataFields.dateX = valorX;
    chartSeriesLine.yAxis = chartAxisLine;
    chartSeriesLine.name = "Pedidos";
    chartSeriesLine.strokeWidth = 2;
    chartSeriesLine.tooltipText = ToolTip;

    var chatBullet = chartSeriesLine.bullets.push(
        new am4charts.CircleBullet()
    );
    chatBullet.circle.fill = am4core.color("#fff");
    chatBullet.circle.strokeWidth = 2;
    chatBullet.circle.propertyFields.radius = 5;

    var latitudeState = chatBullet.states.create("hover");
    latitudeState.properties.scale = 1.2;

    var latitudeLabel = chartSeriesLine.bullets.push(
        new am4charts.LabelBullet()
    );
    latitudeLabel.label.horizontalCenter = "left";
    latitudeLabel.label.dx = 14;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;
}