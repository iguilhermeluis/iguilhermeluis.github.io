function GerarGraficoPictorialStacked(chartDivId, data, valorX, valorY, toolTip, cor, icon) {

    var chartPictorial = am4core.create(chartDivId, am4charts.SlicedChart);
    chartPictorial.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chartPictorial.language.locale = am4lang_pt_BR;
    chartPictorial.dateFormatter.language = new am4core.Language();
    chartPictorial.dateFormatter.language.locale = am4lang_pt_BR;

    chartPictorial.data = data;

    var series = chartPictorial.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = valorX;
    series.dataFields.category = valorY;
    series.alignLabels = true;

    series.slices.template.tooltipText = toolTip;

    series.maskSprite.path = icon;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0.5;

    series.slices.template.propertyFields.fill = cor;
    series.slices.template.propertyFields.stroke = cor;
    series.slices.template.fillOpacity = 0.7;

    //series.labelsContainer.width = 200;

    //chartPictorial.legend = new am4charts.Legend();
    //chartPictorial.legend.position = "left";
    //chartPictorial.legend.valign = "bottom";
}