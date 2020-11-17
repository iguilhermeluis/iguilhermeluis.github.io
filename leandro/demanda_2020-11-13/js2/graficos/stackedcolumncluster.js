function StackedColumnCluster(chartDivId, data, dadointerpretacao) {

    var chartDivId = am4core.create(chartDivId, am4charts.XYChart);

    chartDivId.data = data;

    // Create axes
    var categoryAxis = chartDivId.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "InterpretacaoR";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chartDivId.yAxes.push(new am4charts.ValueAxis());
    valueAxis.calculateTotals = true;

    var series2;
    for (var i = 0; i < dadosInterpretacao.length; i++) {
        var item = dadosInterpretacao[i];
        series2 = createSeries(chartDivId, item.InterpretacaoR, item.CorFundoR);
    }

    var bullet = series2.bullets.push(new am4charts.LabelBullet());
    bullet.label.text = "{valueY.total}";
    bullet.label.verticalCenter = "bottom";

    chartDivId.maskBullets = false;
    chartDivId.legend = new am4charts.Legend();
}

function createSeries(chart, name, cor) {

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = name;
    series.dataFields.categoryX = "InterpretacaoR";
    series.stacked = true;
    series.sequencedInterpolation = true;
    series.name = name;
    series.columns.template.width = am4core.percent(60);
    series.columns.template.tooltipText = "[bold]{categoryX} - {name}[/]\nQtd. Clusters: {valueY}";
    series.columns.template.fill = am4core.color(cor);
    series.columns.template.fillOpacity = 0.7;
    series.columns.template.stroke = am4core.color(cor);
    series.columns.template.strokeWidth = 1;
    series.columns.template.strokeOpacity = 1;

    // Add label
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
    labelBullet.label.hideOversized = true;

    return series;
}