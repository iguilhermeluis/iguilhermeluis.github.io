// JavaScript source code
function GerarGraficoColunas(chartColumn, data, categoria, valor, toolTip, corFundo, orientacao) {
    // Create chart instance
    var chartColumn = am4core.create(chartColumn, am4charts.XYChart);

    chartColumn.language.locale = am4lang_pt_BR;
    chartColumn.dateFormatter.language = new am4core.Language();
    chartColumn.dateFormatter.language.locale = am4lang_pt_BR;

    chartColumn.data = data;

    // Create axes
    var categoryAxis
    if (orientacao == "vertical") {
        categoryAxis = chartColumn.xAxes.push(new am4charts.CategoryAxis());
    }
    else if (orientacao == "horizontal") {
        var categoryAxis = chartColumn.yAxes.push(new am4charts.CategoryAxis());
    }

    categoryAxis.dataFields.category = categoria;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    if (orientacao == "vertical") {
        //categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
        //    if (target.dataItem && target.dataItem.index & 2 == 2) {
        //        return dy + 25;
        //    }
        //    return dy;
        //});
    }

    var valueAxis;
    if (orientacao == "vertical") {
        valueAxis = chartColumn.yAxes.push(new am4charts.ValueAxis());
    }
    else if (orientacao == "horizontal") {
        valueAxis = chartColumn.xAxes.push(new am4charts.ValueAxis());
    }

    // Create series
    var series = chartColumn.series.push(new am4charts.ColumnSeries());
    if (orientacao == "vertical") {
        series.dataFields.valueY = valor;
        series.dataFields.categoryX = categoria;
    }
    else if (orientacao == "horizontal") {
        series.dataFields.valueX = valor;
        series.dataFields.categoryY = categoria;
    }

    series.name = valor;
    series.columns.template.tooltipText = toolTip;
    series.columns.template.fillOpacity = .8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.propertyFields.fill = corFundo;
    columnTemplate.propertyFields.stroke = corFundo;

    if (orientacao == "vertical") {
    //    chartColumn.paddingBottom = 0;

        valueAxis.width = 175;

    //    valueAxis.renderer.grid.template.disabled = true;
    //    valueAxis.renderer.baseGrid.disabled = true;
    //    valueAxis.renderer.labels.template.disabled = true;

    //    categoryAxis.renderer.grid.template.disabled = true;
    //    categoryAxis.renderer.baseGrid.disabled = true;

    //    columnTemplate.width = am4core.percent(85);
    }
    else if (orientacao == "horizontal") {
    //    //categoryAxis.renderer.labels.template.disabled = true;    
        //valueAxis.width = 175;
    }

    chartColumn.paddingBottom = 0;

    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.baseGrid.disabled = true;

    columnTemplate.width = am4core.percent(85);

    categoryAxis.renderer.labels.template.disabled = true;    


    //New 2
    //var bullet = series.bullets.push(new am4charts.LabelBullet());

    //if (orientacao == "vertical") {
    //    bullet.label.text = "{valueY}";
    //    bullet.label.verticalCenter = "bottom";
    //}
    //else
    //{
    //    bullet.label.text = "{valueX}";
    //    bullet.label.horizontalCenter = "right";
    //}

    //chartColumn.maskBullets = false;

    //new 3
    var bulletLabel = series.bullets.push(new am4charts.LabelBullet());
    bulletLabel.label.background = new am4core.RoundedRectangle();
    bulletLabel.label.background.cornerRadius(5, 5, 5, 5);
    bulletLabel.label.background.fill = am4core.color("#eee");
    bulletLabel.label.background.stroke = am4core.color("#555");
    bulletLabel.label.background.strokeOpacity = 1;
    //bulletLabel.label.padding(4, 8, 4, 8);
    //bulletLabel.locationY = 0.5;

    if (orientacao == "vertical") {
        bulletLabel.label.text = "{valueY}";
    }
    else if (orientacao == "horizontal") {
        bulletLabel.label.text = "{valueX}";
    }

    if (orientacao == "vertical") {
        //bulletLabel.align = "center";
        //bulletLabel.valign = "middle";
        bulletLabel.locationY = 0.5;
    }
    else if (orientacao == "horizontal") {
        bulletLabel.align = "left";
        bulletLabel.valign = "bottom";
        bulletLabel.locationX = 0.5;
    }

    //New

    //columnTemplate.fill = am4core.color("white");
    //columnTemplate.stroke = am4core.color("white");

    //// Add a bullet
    //var label = series.columns.template.createChild(am4core.Label);
    //label.text = "{" + valor +"}";
    //label.zIndex = 2;
    //label.strokeWidth = 0;
    ////label.locationY = 0.5;
    //label.dy = 0;
    ////label.fill = am4core.color("white");

    //var bullet = series.columns.template.createChild(am4core.Rectangle);
    ////bullet.locationY = 0.5;
    //bullet.fill = am4core.color(corFundo);
    ////bullet.fillOpacity = 0.5;
    //bullet.propertyFields.fill = corFundo;
    //bullet.propertyFields.stroke = corFundo;

    //if (orientacao == "vertical") {
    //    label.align = "center";
    //    label.valign = "bottom";
    //    bullet.align = "center";
    //    bullet.valign = "bottom";
    //}
    //else if (orientacao == "horizontal") {
    //    label.align = "left";
    //    label.valign = "bottom";
    //    bullet.align = "left";
    //    bullet.valign = "bottom";
    //}

    ////bullet.radius = 20;

    //bullet.width = 50;
    //bullet.height = 50;
}
