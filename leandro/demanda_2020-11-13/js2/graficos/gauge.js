// JavaScript source code
function GerarGraficoGauge(chartDivId, data, dataRange, multirange, min, max, valor, valorreferencia, CorFundo, CorFonte, texto, tooltip, corReferencia, tooltipReferencia, formatCurrency) {

    var chartMin = dataRange[0][min];
    var chartMax = dataRange[dataRange.length - 1][max];

    var chartdivGauge = am4core.create(chartDivId, am4charts.GaugeChart);
    chartdivGauge.hiddenState.properties.opacity = 0;
    chartdivGauge.fontSize = 11;
    chartdivGauge.innerRadius = am4core.percent(80);
    chartdivGauge.resizable = true;

    chartdivGauge.language.locale = am4lang_pt_BR;
    chartdivGauge.dateFormatter.language = new am4core.Language();
    chartdivGauge.dateFormatter.language.locale = am4lang_pt_BR;

    var axis = chartdivGauge.xAxes.push(new am4charts.ValueAxis());
    axis.min = chartMin;
    axis.max = chartMax;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 0.1;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeWidth = 0.5;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = am4core.percent(15);
    axis.renderer.labels.template.fontSize = "0.9em";

    var axis2 = chartdivGauge.xAxes.push(new am4charts.ValueAxis());
    axis2.min = chartMin;
    axis2.max = chartMax;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = false;
    axis2.renderer.grid.template.opacity = 0.5;
    axis2.renderer.labels.template.bent = true;
    axis2.renderer.labels.template.fill = am4core.color("#000");
    axis2.renderer.labels.template.fontWeight = "bold";
    axis2.renderer.labels.template.fillOpacity = 0.3;

    function CreateRange(objAxis, min, max, texto, cor)
    {
        var range = objAxis.axisRanges.create();

        if (cor != "") { range.axisFill.fill = am4core.color(cor); } //COR

        range.axisFill.fillOpacity = 0.8;
        range.axisFill.zIndex = -1;
        range.value = min > chartMin ? min : chartMin; //Min
        range.endValue = max < chartMax ? max : chartMax; //Max
        range.grid.strokeOpacity = 0;

        if (cor != "") { range.stroke = am4core.color(cor).lighten(-0.1); }

        range.label.inside = true;
        range.label.text = texto; //Texto
        range.label.inside = true;
        range.label.location = 0.5;
        range.label.inside = true;
        range.label.radius = am4core.percent(10);
        range.label.paddingBottom = -5; // ~half font size
        range.label.fontSize = "0.9em";
    }

    if (multirange) {
        for (var i = 0; i < dataRange.length; i++) {
            var item = dataRange[i];

            CreateRange(axis2, item[min], item[max], item[texto].toUpperCase(), item[CorFundo]);
        }
    }
    else {
        CreateRange(axis2, chartMin, chartMax, texto.toUpperCase(), data[CorFundo].toUpperCase());
    }

    var label = chartdivGauge.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = "6em";
    label.x = am4core.percent(50);
    label.paddingBottom = 15;
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.fill = am4core.color(data[CorFundo]);//am4core.color(matchingGrade.CorFundo); //cor
    label.tooltipText = tooltip;

    if (!formatCurrency) { label.text = data[valor]; }
    else {
        var valorLabel = data[valor];
        label.text = "R$" + valorLabel.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }

    var label2 = chartdivGauge.radarContainer.createChild(am4core.Label);
    label2.isMeasured = false;
    label2.fontSize = "2em";
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "bottom";
    if (multirange) {
        label2.text = data[texto].toUpperCase();
    }
    else {
        label2.text = texto.toUpperCase();
    }
    label2.fill = am4core.color(data[CorFundo]);

    var hand = chartdivGauge.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(55);
    hand.startWidth = 8;
    hand.pin.disabled = true;
    hand.value = data[valor]; //valor
    hand.fill = am4core.color("#444");
    hand.stroke = am4core.color("#000");

    //var hand2 = chartdivGauge.hands.push(new am4charts.ClockHand());
    //hand2.innerRadius = am4core.percent(95);
    //hand2.radius = am4core.percent(100);
    //hand2.startWidth = 20;
    //hand2.pin.disabled = true;
    //hand2.value = Number(valorreferencia); 
    //hand2.fill = am4core.color(corReferencia);
    //hand2.stroke = am4core.color(corReferencia);
    //hand2.tooltipText = "My ToolTip";
    ////hand2.tooltip.tooltipPosition = "fixed";

    ////hand2.tooltip.pointerOrientation = "vertical"
    ////hand2.tooltip.dy = 100;

    ////var label3 = hand2.createChild(am4core.Label);
    ////label3.isMeasured = false;
    ////label3.text = "AA";


    var event = createEnventX(axis, valorreferencia, corReferencia, tooltipReferencia);
    event.bullet.rotation = -15;

    //event.bullet.radius = am4core.percent(25);
    //event.bullet.innerRadius = am4core.percent(20);
}
