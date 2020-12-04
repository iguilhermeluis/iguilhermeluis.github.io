// JavaScript source code
function GerarGraficoRadar(chartDivId, data, valorX, valorY, toolTip, corFundo)
{
    // Create chartRadial instance
    var chartRadial = am4core.create(chartDivId, am4charts.RadarChart);

    //Define Scroll
    //chartRadial.scrollbarX = new am4core.Scrollbar();

    chartRadial.data = data;
    chartRadial.radius = am4core.percent(100);
    chartRadial.innerRadius = am4core.percent(50);

    // Create axes
    var categoryAxisRadial = chartRadial.xAxes.push(new am4charts.CategoryAxis());
    categoryAxisRadial.dataFields.category = valorX;
    categoryAxisRadial.renderer.grid.template.location = 0;
    categoryAxisRadial.renderer.minGridDistance = 30;
    categoryAxisRadial.tooltip.disabled = true;
    categoryAxisRadial.renderer.minHeight = 110;
    categoryAxisRadial.renderer.grid.template.disabled = true;

    let labelTemplateRadial = categoryAxisRadial.renderer.labels.template;
    labelTemplateRadial.radius = am4core.percent(-60);
    labelTemplateRadial.location = 0.5;
    labelTemplateRadial.relativeRotation = 90;

    var valueAxisRadial = chartRadial.yAxes.push(new am4charts.ValueAxis());
    valueAxisRadial.renderer.grid.template.disabled = true;
    valueAxisRadial.renderer.labels.template.disabled = true;
    valueAxisRadial.tooltip.disabled = true;

    // Create series
    var seriesRadial = chartRadial.series.push(new am4charts.RadarColumnSeries());
    seriesRadial.sequencedInterpolation = true;
    seriesRadial.dataFields.valueY = valorY;
    seriesRadial.dataFields.categoryX = valorX;
    seriesRadial.columns.template.strokeWidth = 0;
    seriesRadial.tooltip.background.fill = corFundo;
    seriesRadial.columns.template.radarColumn.cornerRadius = 10;
    seriesRadial.columns.template.radarColumn.innerCornerRadius = 0;

    seriesRadial.columns.template.radarColumn.propertyFields.fill = corFundo;
    seriesRadial.columns.template.radarColumn.propertyFields.stroke = corFundo;

    seriesRadial.columns.template.radarColumn.tooltipText = toolTip;

    // on hover, make corner radiuses bigger
    let hoverState = seriesRadial.columns.template.radarColumn.states.create("hover");
    hoverState.properties.cornerRadius = 0;
    hoverState.properties.fillOpacity = 1;

    // Cursor
    chartRadial.cursor = new am4charts.RadarCursor();
    chartRadial.cursor.innerRadius = am4core.percent(50);
    chartRadial.cursor.lineY.disabled = true;
}
