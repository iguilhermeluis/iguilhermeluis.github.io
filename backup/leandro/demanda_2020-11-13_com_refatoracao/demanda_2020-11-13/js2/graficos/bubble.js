// JavaScript source code
function GerarGraficoBubble(
  chartDivId,
  data,
  titulo,
  legendaX,
  legendaY,
  valorX,
  valorY,
  valor,
  toolTip,
  corFundo,
  range,
  min,
  max,
  redirect = "",
  parametro = "",
  tooltipTipo = "text"
) {
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
    tittleBubble.marginBottom = 20;
  }

  var xAxisBubble = chartBubble.xAxes.push(new am4charts.ValueAxis());
  var yAxisBubble = chartBubble.yAxes.push(new am4charts.ValueAxis());

  xAxisBubble.title.text = legendaX;
  xAxisBubble.title.fontWeight = 600;
  xAxisBubble.renderer.minGridDistance = 50;
  xAxisBubble.renderer.grid.template.disabled = false;
  xAxisBubble.renderer.axisFills.template.disabled = true;
  xAxisBubble.renderer.ticks.template.disabled = false;

  yAxisBubble.title.text = legendaY;
  yAxisBubble.title.fontWeight = 600;
  yAxisBubble.renderer.grid.template.disabled = true;
  yAxisBubble.renderer.labels.template.disabled = true;
  yAxisBubble.min = 0;

  function createGrid(value) {
    let step = yAxisBubble.axisRanges.create();
    step.value = value;
    step.label.text = "{value}";
  }

  let valores = data.map((el) => el[valorY]);
  valores = Array.from(new Set(valores)); //remove numeros duplicados

  createGrid(0);
  valores.forEach((element) => {
    createGrid(element);
  });

  //var range = dadosInterpretacao;
  for (var i = 0; i < range.length; i++) {
    var item = range[i];
    createRangerX(
      xAxisBubble,
      item.MinR,
      item.MaxR,
      item.CorFundoR,
      item.InterpretacaoR
    );
  }

  var seriesBubble = chartBubble.series.push(new am4charts.ColumnSeries());
  seriesBubble.dataFields.valueY = valorY;
  seriesBubble.dataFields.valueX = valorX;
  seriesBubble.dataFields.value = valor;

  seriesBubble.columns.template.disabled = true;
  seriesBubble.sequencedInterpolation = true;

  seriesBubble.tooltip.label.interactionsEnabled = true;
  seriesBubble.tooltip.keepTargetHover = true;
  seriesBubble.tooltip.pointerOrientation = "horizontal";

  var bulletBubble = seriesBubble.bullets.push(new am4core.Circle());
  bulletBubble.strokeWidth = 3;
  bulletBubble.propertyFields.fill = corFundo;
  bulletBubble.fillOpacity = 0.7;
  bulletBubble.propertyFields.stroke = corFundo;
  bulletBubble.strokeOpacity = 0;

  if (toolTip) {
    if (tooltipTipo == "text") {
      bulletBubble.tooltipText = toolTip;
    } else {
      bulletBubble.tooltipHTML = toolTip;
    }
  }

  bulletBubble.adapter.add("tooltipY", function (tooltipY, target) {
    return -target.radius + 1;
  });

  if (redirect) {
    bulletBubble.events.on(
      "hit",
      function (ev) {
        let dataItem = ev.target.dataItem.dataContext;

        document.location.href =
          redirect + "?" + parametro + "=" + dataItem[parametro];
      },
      this
    );
    bulletBubble.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  }

  chartBubble.data = data;

  //usar o valor valor min/max da frequencia p/ o calcular min e max do raio do bubble
  seriesBubble.heatRules.push({
    property: "radius",
    target: bulletBubble,
    min: 10,
    max: 60,
  });

  //bulletBubble.radius = 15;

  bulletBubble.hiddenState.properties.scale = 0.01;
  bulletBubble.hiddenState.properties.opacity = 1;

  var hoverStateBublle = bulletBubble.states.create("hover");
  hoverStateBublle.properties.strokeOpacity = 1;

  return [chartBubble, seriesBubble];
}
