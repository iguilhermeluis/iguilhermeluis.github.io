// JavaScript source code
function GerarGraficoDumbbellPlot(chartDivId, data, legendaY, valorX, min, avg, max, toolTip, corFundoX, corFundoY, range) {

    var chartDumbbell = am4core.create(chartDivId, am4charts.XYChart);

    chartDumbbell.language.locale = am4lang_pt_BR;
    chartDumbbell.dateFormatter.language = new am4core.Language();
    chartDumbbell.dateFormatter.language.locale = am4lang_pt_BR;

    chartDumbbell.data = data;

    var categoryAxisDumbbell = chartDumbbell.xAxes.push(new am4charts.CategoryAxis());
    categoryAxisDumbbell.renderer.grid.template.location = 0;
    categoryAxisDumbbell.dataFields.category = valorX;
    categoryAxisDumbbell.renderer.minGridDistance = 15;
    categoryAxisDumbbell.renderer.grid.template.location = 0.5;
    categoryAxisDumbbell.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxisDumbbell.renderer.labels.template.rotation = -90;
    categoryAxisDumbbell.renderer.labels.template.horizontalCenter = "left";
    categoryAxisDumbbell.renderer.labels.template.location = 0.5;
    categoryAxisDumbbell.renderer.inside = false;

    categoryAxisDumbbell.renderer.labels.template.adapter.add("dx", function (dx, target) {
        return -target.maxRight / 2;
    })

    /* Decorate axis tooltip content */
    categoryAxisDumbbell.adapter.add("getTooltipText", function (text, target) {
        return "Cluster: [bold]" + text + "[/]";
    });

    var valueAxisDumbbell = chartDumbbell.yAxes.push(new am4charts.ValueAxis());
    valueAxisDumbbell.tooltip.disabled = true;
    valueAxisDumbbell.renderer.ticks.template.disabled = true;
    valueAxisDumbbell.renderer.axisFills.template.disabled = true;
    valueAxisDumbbell.renderer.inside = false;

    valueAxisDumbbell.title.text = legendaY;
    valueAxisDumbbell.title.fontWeight = 600;

    for (var i = 0; i < range.length; i++) {

        var item = range[i];

        createRangerY(valueAxisDumbbell, item.MinD, item.MaxD, item.CorFundoR, item.InterpretacaoR);
    }

    var mediaBulletSerie = chartDumbbell.series.push(new am4charts.LineSeries());
    mediaBulletSerie.dataFields.categoryX = valorX;
    mediaBulletSerie.dataFields.valueY = avg;
    mediaBulletSerie.strokeWidth = 0;

    var mediabullet = mediaBulletSerie.bullets.push(new am4charts.Bullet());
    var mediaLine = mediabullet.createChild(am4core.Line);
    mediaLine.x1 = -5;
    mediaLine.y1 = 0;
    mediaLine.x2 = 5;
    mediaLine.propertyFields.stroke = corFundoX;

    //valueAxisDumbbell.max = 95;
    //valueAxisDumbbell.strictMinMax = true; 
    //valueAxisDumbbell.extraMax = 0.05;

    var valueAxisDumbbell = chartDumbbell.series.push(new am4charts.ColumnSeries());
    valueAxisDumbbell.dataFields.categoryX = valorX;
    valueAxisDumbbell.dataFields.openValueY = min;
    valueAxisDumbbell.dataFields.valueY = max;
    valueAxisDumbbell.tooltipText = toolTip;
    valueAxisDumbbell.sequencedInterpolation = true;
    valueAxisDumbbell.fillOpacity = 0;
    valueAxisDumbbell.strokeOpacity = 1;
    valueAxisDumbbell.columns.template.width = 0.01;
    valueAxisDumbbell.tooltip.pointerOrientation = "horizontal";

    valueAxisDumbbell.columns.template.propertyFields.fill = corFundoX;
    valueAxisDumbbell.columns.template.propertyFields.stroke = corFundoX;

    var openBulletDumbbell = valueAxisDumbbell.bullets.create(am4charts.CircleBullet);
    openBulletDumbbell.locationY = 1;
    openBulletDumbbell.propertyFields.fill = corFundoX;
    openBulletDumbbell.propertyFields.stroke = "#000000";

    var closeBulletDumbbell = valueAxisDumbbell.bullets.create(am4charts.CircleBullet);

    closeBulletDumbbell.propertyFields.fill = corFundoX;
    closeBulletDumbbell.propertyFields.stroke = "#000000";

    chartDumbbell.cursor = new am4charts.XYCursor();

    //chartDumbbell.scrollbarX = new am4core.Scrollbar();
    //chartDumbbell.scrollbarY = new am4core.Scrollbar();

    //chartDumbbell.scrollbarX.startGrip.disabled = true;
    //chartDumbbell.scrollbarX.endGrip.disabled = true;
}
