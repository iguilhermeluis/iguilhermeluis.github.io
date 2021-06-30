am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);

  // Themes end
  var chart = am4core.create("semiCircleChartdiv", am4charts.PieChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.responsive.enabled = true;

  chart.language.locale = am4lang_pt_BR;
  chart.dateFormatter.language = new am4core.Language();
  chart.dateFormatter.language.locale = am4lang_pt_BR;

  chart.data = DATAEXCEL;

  chart.radius = am4core.percent(70);
  chart.innerRadius = am4core.percent(40);
  chart.startAngle = 180;
  chart.endAngle = 360;

  var series = chart.series.push(new am4charts.PieSeries());
  series.maxLevels = 1;
  series.dataFields.value = "SomatorioM";
  series.dataFields.category = "NomeCluster";
  series.dataFields.categoryX = "Interpretacao";
  series.slices.template.propertyFields.fill = "color";

  series.slices.template.tooltipText =
    "[bold]Cluster {NomeCluster} - {Interpretacao}[]\nGastos: R$ {SomatorioM.formatNumber('#,###.00')}\nTicket Médio: R$ {MediaM.formatNumber('#,###.00')}\n{QtdClientes} clientes\n{value.percent.formatNumber('#.0')}% dos Gastos";

  series.slices.template.cornerRadius = 10;
  series.slices.template.innerCornerRadius = 7;
  series.slices.template.draggable = false;
  series.slices.template.inert = true;
  series.alignLabels = false;

  series.hiddenState.properties.startAngle = 90;
  series.hiddenState.properties.endAngle = 90;

  series.labels.template.paddingTop = 0;
  series.labels.template.paddingBottom = 0;
  series.labels.template.fontSize = 14;

  series.labels.template.text =
    "{NomeCluster} | {value.formatNumber('#,###.00')}%";

  //Remove a descriçaõ dos Labels da série do gráfico
  series.labels.template.disabled = true;

  /*  series.ticks.template.adapter.add("hidden", hideSmall);
  series.labels.template.adapter.add("hidden", hideSmall);
  function hideSmall(hidden, target) {
      return target.dataItem.values.value.percent < 100 ? true : false;
  }*/

  var label = series.createChild(am4core.Label);
  label.textAlign = "middle";
  label.horizontalCenter = "middle";
  label.verticalCenter = "middle";
  label.y = -10; // -70  // font-size: 30px
  label.adapter.add("text", function (text, target) {
    return (
      "Total[/]:\n[bold font-size:24px]" +
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(series.dataItem.values.value.sum) +
      "[/]"
    );
  });

  var legend = new am4charts.Legend();
  legend.parent = chart.chartContainer;
  legend.align = "bottom";
  legend.valign = "bottom";
  legend.marginTop = "200px";

  /*var legend = new am4charts.Legend();
  legend.parent = chart.chartContainer;
  legend.align = "bottom";
  legend.valign = "bottom";
  legend.marginTop = "5px";
  legend.fontSize = 10;*/

  series.events.on("ready", function (ev) {
    var legenddata = [];
    var teste = [];
    var sequenceNumber = [];
    var sumValue = [];

    function toggleSlice(item) {
      var slice = series.dataItems.getIndex(item);
      if (slice.visible) {
        slice.hide();
      } else {
        slice.show();
      }
    }

    series.slices.each(function (slice, i) {
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

    legend.data = teste2;

    legend.itemContainers.template.events.on("hit", function (ev) {
      let sequenceItem = ev.target.dataItem._dataContext.sequence;
      sequenceItem.map((el) => {
        //hidden
        toggleSlice(el);
      });
    });
  });

  chart.responsive.rules.push({
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

      if (target.text) {
        if (target.text.indexOf("Total") != -1) {
          var state = target.states.create(stateId);

          if (myapp_config.isMobile) {
            state.sprite.y = 15;
            return state;
          } else {
            state.sprite.y = -10;
          }
        }
      }
      return null;
    },
  });
}); // end am4core.ready()

function detectMob() {
  return window.innerWidth <= 800 && window.innerHeight <= 600;
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

      let porcent = parseFloat(
        switches[st].querySelectorAll("tspan")[1].innerHTML.replace("%", "")
      );

      if (!newGraph[stroke]) newGraph[stroke] = [];
      newGraph[stroke].push(porcent);
    });
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  Object.keys(newGraph).map((el) => {
    newGraph[el] = newGraph[el].reduce(reducer);
  });
}
