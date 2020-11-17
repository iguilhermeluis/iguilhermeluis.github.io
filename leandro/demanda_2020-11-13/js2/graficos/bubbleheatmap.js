// JavaScript source code
function GerarGraficoBubbleHeatMap(chartDivId, data, titulo, legendaX, legendaY, valorX, valorY, valor, toolTip, corFundo, range, min, max) {

    var chartBubble = am4core.create(chartDivId, am4charts.XYChart);
    chartBubble.maskBullets = false;

    chartBubble.language.locale = am4lang_pt_BR;
    chartBubble.dateFormatter.language = new am4core.Language();
    chartBubble.dateFormatter.language.locale = am4lang_pt_BR;

    chartBubble.marginTop = -200;

    if (titulo != "") {
        var tittleBubble = chartBubble.titles.create();
        tittleBubble.text = titulo;
        tittleBubble.fontSize = 18;
        tittleBubble.marginBottom = 20
    }

    var xAxisBubble = chartBubble.xAxes.push(new am4charts.ValueAxis());
    var yAxisBubble = chartBubble.yAxes.push(new am4charts.ValueAxis());

    xAxisBubble.title.text = legendaX;
    yAxisBubble.title.text = legendaY;

    xAxisBubble.title.fontWeight = 600;
    yAxisBubble.title.fontWeight = 600;

    xAxisBubble.renderer.minGridDistance = 50;

    xAxisBubble.renderer.grid.template.disabled = false;
    yAxisBubble.renderer.grid.template.disabled = false;
    xAxisBubble.renderer.axisFills.template.disabled = true;
    yAxisBubble.renderer.axisFills.template.disabled = true;
    yAxisBubble.renderer.ticks.template.disabled = false;
    xAxisBubble.renderer.ticks.template.disabled = false;

    var range = dadosInterpretacao;
    for (var i = 0; i < range.length; i++) {

        var item = range[i];

        createRangerX(xAxisBubble, item.MinD, item.MaxD, item.CorFundoR, item.InterpretacaoR);
    }

    var seriesBubble = chartBubble.series.push(new am4charts.ColumnSeries());
    seriesBubble.dataFields.valueY = valorY;
    seriesBubble.dataFields.valueX = valorX;
    seriesBubble.dataFields.value = valor;
    seriesBubble.columns.template.disabled = true;
    seriesBubble.sequencedInterpolation = true;

    var bulletBubble = seriesBubble.bullets.push(new am4core.Circle());
    bulletBubble.tooltipText = toolTip;
    bulletBubble.strokeWidth = 3;
    bulletBubble.propertyFields.stroke = corFundo;
    bulletBubble.strokeOpacity = 0;
    bulletBubble.propertyFields.fill = corFundo;

    bulletBubble.fillOpacity = 0.7;

    chartBubble.data = data;

    bulletBubble.adapter.add("tooltipY", function (tooltipY, target) {
        return -target.radius + 1;
    })

    //usar o valor valor min/max da frequencia p/ o calcular min e max do raio do bubble
    seriesBubble.heatRules.push({
        property: "radius",
        target: bulletBubble,
        min: min/3,
        max: max/3
    });

    bulletBubble.hiddenState.properties.scale = 0.01;
    bulletBubble.hiddenState.properties.opacity = 1;

    var hoverStateBublle = bulletBubble.states.create("hover");
    hoverStateBublle.properties.strokeOpacity = 1;
}
