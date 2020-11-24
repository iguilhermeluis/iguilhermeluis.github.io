// JavaScript source code
function GerarGraficoDumbbellPlot(chartDivId, data, legenda, valor, min, avg, max, toolTip, corFundoX, corFundoY, range, orientacao) {
    
    var legendaY = legenda;
    var valorX = valor;
    var corFundoX = corFundoX;
    var corFundoY = corFundoY;

    var chartDumbbell = am4core.create(chartDivId, am4charts.XYChart);

    chartDumbbell.language.locale = am4lang_pt_BR;
    chartDumbbell.dateFormatter.language = new am4core.Language();
    chartDumbbell.dateFormatter.language.locale = am4lang_pt_BR;

    chartDumbbell.data = data;

    var categoryAxisDumbbell; 

    if (orientacao == "horizontal") {
        categoryAxisDumbbell = chartDumbbell.xAxes.push(new am4charts.CategoryAxis());

        categoryAxisDumbbell.renderer.labels.template.rotation = -90;
        categoryAxisDumbbell.renderer.labels.template.horizontalCenter = "left";
        categoryAxisDumbbell.renderer.labels.template.location = 0.5;

        categoryAxisDumbbell.renderer.labels.template.adapter.add("dx", function (dx, target) {
            return -target.maxRight / 2;
        })
    }
    else if (orientacao == "vertical") {
        categoryAxisDumbbell = chartDumbbell.yAxes.push(new am4charts.CategoryAxis());

        categoryAxisDumbbell.renderer.ticks.template.disabled = true;
        categoryAxisDumbbell.renderer.axisFills.template.disabled = true;
        categoryAxisDumbbell.renderer.inversed = true;
    }

    categoryAxisDumbbell.renderer.grid.template.location = 0;
    categoryAxisDumbbell.dataFields.category = valor;
    categoryAxisDumbbell.renderer.minGridDistance = 15;
    categoryAxisDumbbell.renderer.grid.template.location = 0.5;
    categoryAxisDumbbell.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxisDumbbell.renderer.inside = false;

    /* Decorate axis tooltip content */
    categoryAxisDumbbell.adapter.add("getTooltipText", function (text, target) {
        return "Cluster: [bold]" + text + "[/]";
    });

    var valueAxisDumbbell 

    if (orientacao == "horizontal") {
        valueAxisDumbbell = chartDumbbell.yAxes.push(new am4charts.ValueAxis());
    }
    else if (orientacao == "vertical") {
        valueAxisDumbbell = chartDumbbell.xAxes.push(new am4charts.ValueAxis());
    }

    valueAxisDumbbell.tooltip.disabled = true;
    valueAxisDumbbell.renderer.ticks.template.disabled = true;
    valueAxisDumbbell.renderer.axisFills.template.disabled = true;
    valueAxisDumbbell.renderer.inside = false;

    valueAxisDumbbell.title.text = legendaY;
    valueAxisDumbbell.title.fontWeight = 600;

    for (var i = 0; i < range.length; i++) {

        var item = range[i];

        if (orientacao == "horizontal") {
            createRangerY(valueAxisDumbbell, item.MinD, item.MaxD, item.CorFundoR, item.InterpretacaoR);
        }
        else if (orientacao == "vertical") {
            createRangerX(valueAxisDumbbell, item.MinD, item.MaxD, item.CorFundoR, item.InterpretacaoR);
        }
    }

    var mediaBulletSerie = chartDumbbell.series.push(new am4charts.LineSeries());

    if (orientacao == "horizontal") {
        mediaBulletSerie.dataFields.categoryX = valorX;
        mediaBulletSerie.dataFields.valueY = avg;
    }
    else if (orientacao == "vertical") {
        mediaBulletSerie.dataFields.categoryY = valorX;
        mediaBulletSerie.dataFields.valueX = avg;
    }

    mediaBulletSerie.strokeWidth = 0;

    var mediabullet = mediaBulletSerie.bullets.push(new am4charts.Bullet());
    //var mediaLine = mediabullet.createChild(am4core.Line);
    var mediaLine = mediabullet.createChild(am4core.Triangle);

    mediaLine.propertyFields.fill = corFundoX;

    mediaLine.width = 10;
    mediaLine.height = 10;

    if (orientacao == "horizontal") {
        mediaLine.x1 = -5;
        mediaLine.y1 = 0;
        mediaLine.x2 = 5;
        mediaLine.verticalCenter = "middle";
        mediaLine.direction = "left";
    }
    else if (orientacao == "vertical") {
        mediaLine.y1 = -5;
        mediaLine.x1 = 0;
        mediaLine.y2 = 5;
        mediaLine.horizontalCenter = "middle";
        mediaLine.direction = "top";
    }

    mediaLine.propertyFields.stroke = corFundoX;

    var valueAxisDumbbell = chartDumbbell.series.push(new am4charts.ColumnSeries());

    if (orientacao == "horizontal") {
        valueAxisDumbbell.dataFields.categoryX = valorX;
        valueAxisDumbbell.dataFields.openValueY = min;
        valueAxisDumbbell.dataFields.valueY = max;

        valueAxisDumbbell.columns.template.width = 0.01;
    }
    else if (orientacao == "vertical") {
        valueAxisDumbbell.dataFields.categoryY = valorX;
        valueAxisDumbbell.dataFields.openValueX = min;
        valueAxisDumbbell.dataFields.valueX = max;

        valueAxisDumbbell.columns.template.height = 0.01;
    }

    valueAxisDumbbell.tooltipText = toolTip;
    valueAxisDumbbell.sequencedInterpolation = true;
    valueAxisDumbbell.fillOpacity = 0;
    valueAxisDumbbell.strokeOpacity = 1;
    
    valueAxisDumbbell.tooltip.pointerOrientation = orientacao;

    valueAxisDumbbell.columns.template.propertyFields.fill = corFundoX;
    valueAxisDumbbell.columns.template.propertyFields.stroke = corFundoX;

    var openBulletDumbbell = valueAxisDumbbell.bullets.create(am4charts.CircleBullet);

    if (orientacao == "horizontal") {
        openBulletDumbbell.locationY = 1;
    }
    else if (orientacao == "vertical") {
        openBulletDumbbell.locationX = 1;
    }

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

    let arraySeriesDumbbell = [];

    arraySeriesDumbbell.push(valueAxisDumbbell);
    arraySeriesDumbbell.push(mediaBulletSerie);

    return [chartDumbbell, arraySeriesDumbbell];
}
