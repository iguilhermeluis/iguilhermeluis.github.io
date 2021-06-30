// JavaScript source code
function GerarGraficoRiskHeatMap(chartDivId, data, titulo, valorX, valorY, valor, toolTip, corFundoX, corFundoY, textoLabel) {

    var chartRisk = am4core.create(chartDivId, am4charts.XYChart);

    chartRisk.language.locale = am4lang_pt_BR;
    chartRisk.dateFormatter.language = new am4core.Language();
    chartRisk.dateFormatter.language.locale = am4lang_pt_BR;

    chartRisk.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chartRisk.maskBullets = false;

    if (titulo != "") {
        var titleRisk = chartRisk.titles.create();
        titleRisk.text = titulo;
        titleRisk.fontSize = 18;
        titleRisk.marginBottom = 20;
    }

    var xAxisRisk = chartRisk.xAxes.push(new am4charts.CategoryAxis());
    var yAxisRisk = chartRisk.yAxes.push(new am4charts.CategoryAxis());

    xAxisRisk.dataFields.category = valorX;
    xAxisRisk.dataFields.value = `{${valorX}}`;
    yAxisRisk.dataFields.category = valorY;

    xAxisRisk.renderer.grid.template.disabled = true;
    xAxisRisk.renderer.minGridDistance = 40;

    yAxisRisk.renderer.grid.template.disabled = true;
    yAxisRisk.renderer.inversed = true;
    yAxisRisk.renderer.minGridDistance = 30;

    var seriesRisk = chartRisk.series.push(new am4charts.ColumnSeries());
    seriesRisk.dataFields.categoryX = valorX;
    seriesRisk.dataFields.categoryY = valorY;
    seriesRisk.dataFields.value = valor;
    seriesRisk.sequencedInterpolation = true;
    seriesRisk.defaultState.transitionDuration = 3000;

    seriesRisk.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    seriesRisk.columns.template.events.on(
        "hit",
        function (ev) {
            let dataItem = ev.target.dataItem.dataContext;
            alert(`Gráfico ${chartDivId} | A qtdcliente é ${dataItem.QtdClientes}, InterpretacaoFM ${dataItem.InterpretacaoFM}, InterpretacaoR ${dataItem.InterpretacaoR}`);
            /* 
            o dataItem contem o objeto do item clicado
            vgF: 4
            AvgM: 492.2230769230769
            CorFonteFM: "#000000"
            CorFonteR: "#000000"
            CorFundoFM: "#01995f"
            CorFundoR: "#ff8700"
            FMOrdem: 1
            InterpretacaoFM: "VIP"
            InterpretacaoR: "Em Risco"
            QTDClusters: 1
            QtdClientes: 13
            ROrdem: 3
            SumF: 63
            SumM: 6398.9 */
        },
        this
    );

    // Set up column appearance
    var columnRisk = seriesRisk.columns.template;
    columnRisk.strokeWidth = 2;
    columnRisk.strokeOpacity = 1;
    columnRisk.stroke = am4core.color("#ffffff");
    columnRisk.tooltipText = toolTip;
    columnRisk.width = am4core.percent(100);
    columnRisk.height = am4core.percent(100);
    columnRisk.column.cornerRadius(0, 0, 0, 0);
    columnRisk.propertyFields.fill = corFundoX;
    columnRisk.fillOpacity = 0.7;

    chartRisk.data = data;

    // Set up bullet appearance
    var bullet1Risk = seriesRisk.bullets.push(new am4charts.CircleBullet());
    bullet1Risk.circle.fillOpacity = 0.6;
    bullet1Risk.circle.strokeWidth = 1;

    bullet1Risk.propertyFields.stroke = corFundoX;
    bullet1Risk.propertyFields.fill = corFundoY;

    bullet1Risk.interactionsEnabled = false;

    var bullet2Risk = seriesRisk.bullets.push(new am4charts.LabelBullet());
    bullet2Risk.label.text = "{value.formatNumber('#.')}";
    bullet2Risk.label.fill = am4core.color("#fff");
    bullet2Risk.zIndex = 1;
    bullet2Risk.fontSize = 11;
    bullet2Risk.interactionsEnabled = false;

    var baseWidthRisk = Math.min(chartRisk.plotContainer.maxWidth, chartRisk.plotContainer.maxHeight);
    var maxRadiusRisk = baseWidthRisk / Math.sqrt(chartRisk.data.length) / 2 - 2; // 2 is jast a margin
    seriesRisk.heatRules.push({ min: 10, max: maxRadiusRisk, property: "radius", target: bullet1Risk.circle });

    chartRisk.plotContainer.events.on("maxsizechanged", function () {
        var side = Math.min(chartRisk.plotContainer.maxWidth, chartRisk.plotContainer.maxHeight);
        bullet1Risk.circle.clones.each(function (clone) {
            clone.scale = side / baseWidthRisk;
            //clone.fill = am4core.color("blue");
        })
    })

    /*
      SELECIONAR OS DADOS DO GRÁFICO
    */
    let forEqX = {}
    let forEqY = {}
    data.map(el => {
        forEqX[el[valorX]] = el[valorX]
        forEqY[el[valorY]] = el[valorY]
    })
    const returnedTarget = Object.assign(forEqX, forEqY);
    setTimeout(() => {
        document.getElementById(chartDivId).querySelectorAll("text tspan").forEach(el => {
            Object.keys(returnedTarget).map(value => {
                if (el.innerHTML == value) {
                    el.style.cursor = "pointer";
                    el.addEventListener("click", () => {
                        //Todo 
                        alert(`O valor clicado foi ${value} no gráfico ${chartDivId}`)
                    });
                }
            })
        })
    }, 5000)

    return [chartRisk, seriesRisk];
}
