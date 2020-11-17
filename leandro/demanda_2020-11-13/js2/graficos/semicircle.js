function GerarGraficoSemiCircle(chartDivId, data, valorX, valorY, valor, corFundoX, toolTip)//, titulo, legendaX, legendaY, valorX, valorY, valor, toolTip, corFundo, range
{
    var chartdivSemiCircle = am4core.create(chartDivId, am4charts.PieChart);
    chartdivSemiCircle.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chartdivSemiCircle.responsive.enabled = true;

    chartdivSemiCircle.language.locale = am4lang_pt_BR;
    chartdivSemiCircle.dateFormatter.language = new am4core.Language();
    chartdivSemiCircle.dateFormatter.language.locale = am4lang_pt_BR;

    chartdivSemiCircle.data = data;

    chartdivSemiCircle.radius = am4core.percent(70);
    chartdivSemiCircle.innerRadius = am4core.percent(40);
    chartdivSemiCircle.startAngle = 180;
    chartdivSemiCircle.endAngle = 360;

    var seriesSemiCircle = chartdivSemiCircle.series.push(new am4charts.PieSeries());
    seriesSemiCircle.maxLevels = 1;
    seriesSemiCircle.dataFields.value = valor;
    seriesSemiCircle.dataFields.category = valorY;

    seriesSemiCircle.dataFields.categoryX = valorX;
    seriesSemiCircle.slices.template.propertyFields.fill = corFundoX;

    seriesSemiCircle.slices.template.tooltipText = toolTip;

    seriesSemiCircle.slices.template.cornerRadius = 10;
    seriesSemiCircle.slices.template.innerCornerRadius = 7;
    seriesSemiCircle.slices.template.draggable = false;
    seriesSemiCircle.slices.template.inert = true;
    seriesSemiCircle.alignLabels = false;

    seriesSemiCircle.hiddenState.properties.startAngle = 90;
    seriesSemiCircle.hiddenState.properties.endAngle = 90;

    seriesSemiCircle.labels.template.paddingTop = 0;
    seriesSemiCircle.labels.template.paddingBottom = 0;
    seriesSemiCircle.labels.template.fontSize = 14;

    seriesSemiCircle.labels.template.text = "{ClusterId} | {value.formatNumber('#,###.00')}%";

    //Remove a descriçaõ dos Labels da série do gráfico
    seriesSemiCircle.labels.template.disabled = true;

    var labelSemiCircle = seriesSemiCircle.createChild(am4core.Label);
    labelSemiCircle.textAlign = "middle";
    labelSemiCircle.horizontalCenter = "middle";
    labelSemiCircle.verticalCenter = "middle";
    labelSemiCircle.y = -70;
    labelSemiCircle.adapter.add("text", function (text, target) {
        return (
            "Total[/]:\n[bold font-size:30px]" +
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(seriesSemiCircle.dataItem.values.value.sum) +
            "[/]"
        );
    });

    var legendSemiCircle = new am4charts.Legend();
    legendSemiCircle.parent = chartdivSemiCircle.chartContainer;
    legendSemiCircle.align = "bottom";
    legendSemiCircle.valign = "bottom";
    legendSemiCircle.marginTop = "200px";

    seriesSemiCircle.events.on("ready", function (ev) {
        var legenddata = [];
        var teste = [];
        var sequenceNumber = [];
        var sumValue = [];

        function toggleSlice(item) {
            var slice = seriesSemiCircle.dataItems.getIndex(item);
            if (slice.visible) {
                slice.hide();
            } else {
                slice.show();
            }
        }

        seriesSemiCircle.slices.each(function (slice, i) {
            let value = parseFloat(
                slice.dataItem.label.readerTitle.split(" | ")[1].replace("%", "")
            );

            if (!teste[slice.fill]) teste[slice.fill] = [];
            teste[slice.fill] = {
                name: slice.dataItem.categoryX,
                fill: slice.fill,
            };

            if (!sequenceNumber[slice.fill]) sequenceNumber[slice.fill] = [];
            sequenceNumber[slice.fill].push(i);

            if (!sumValue[slice.fill]) sumValue[slice.fill] = [];
            sumValue[slice.fill].push(value);

            legenddata.push({
                name: slice.dataItem.categoryX,
                fill: slice.fill,
            });
        });

        teste2 = Object.keys(teste).map((el) => {
            let valueSlice = sumValue[el].reduce((a, b) => a + b, 0).toFixed(2);
            //teste[el].name = teste[el].name + " | " + valueSlice + "%";
            let dataSequence = { sequence: sequenceNumber[el] };
            return { ...teste[el], ...dataSequence };
        });

        legendSemiCircle.data = teste2;

        legendSemiCircle.itemContainers.template.events.on("hit", function (ev) {
            let sequenceItem = ev.target.dataItem._dataContext.sequence;
            sequenceItem.map((el) => {
                //hidden
                toggleSlice(el);
            });
        });
    });

    chartdivSemiCircle.responsive.rules.push({
        relevant: function (target) {
            if (target.pixelWidth <= 600) {
                return true;
            }
            return false;
        },
        state: function (target, stateId) {
            if (target instanceof am4charts.PieChart) {
                var state = target.states.create(stateId);

                state.properties.y = -110;

                return state;
            } else if (target instanceof am4charts.Legend) {
                var state = target.states.create(stateId);
                state.sprite.fontSize = 8;
                state.sprite.dy = -20;
                return state;
            }

            if (target.text == "Total {values.value.sum}") {
                var state = target.states.create(stateId);

                state.sprite.fontSize = 21;
                state.sprite.y = 15;
                state.sprite.x = window.innerWidth / 2 - 146.7 + 20;
                state.sprite.textAlign = "center";
                return state;
            }
            return null;
        },
    });
}

function legenda() {
    let legenda = document.querySelectorAll(
        "g[aria-describedby=id-96-description"
    );

    let newGraph = [];

    Object.keys(legenda).map((el) => {
        let switches = legenda[el].querySelectorAll("g[role=switch]");

        Object.keys(switches).map((st) => {
            let stroke = switches[st]
                .querySelectorAll("g[stroke-opacity]")[1]
                .getAttribute("fill");

            if (!newGraph[stroke]) newGraph[stroke] = [];
        });
    });

    const reducer = (accumulator, currentValue) =>
        accumulator + currentValue;

    Object.keys(newGraph).map((el) => {
        newGraph[el] = newGraph[el].reduce(reducer);
    });
}
