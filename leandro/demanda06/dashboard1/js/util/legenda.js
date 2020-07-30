function legenda(
  primaryChart,
  primarySeries,
  arrayChart,
  seriesChart,
  valueSearch,
  color
) {
  console.warn(primaryChart, primarySeries, arrayChart, seriesChart);
  //legenda
  var legend = new am4charts.Legend();
  legend.parent = primaryChart.chartContainer;
  legend.align = "bottom";
  legend.valign = "bottom";
  legend.marginTop = "5px";
  legend.fontSize = 10;

  primarySeries.events.on("ready", function (ev) {
    var legenddata = [];
    var teste = [];
    var sequenceNumber = [];
    var sumValue = [];

    function toggleSlice(item, lastItem) {
      var column = primarySeries.dataItems.getIndex(item);

      if (item == lastItem) {
        //seriesbubble aqui tem que ser um foreach

        seriesChart.map((el) => {
          el.dataItems.values.map((value) => {
            if (
              column.dataContext[valueSearch] == value.dataContext[valueSearch]
            ) {
              // match
              if (value.visible) {
                value.hide();
              } else {
                value.show();
              }
            }
          });
        });
      }

      if (column.visible) {
        column.hide();
      } else {
        column.show();
      }
    }

    primarySeries.columns.each(function (column, i) {
      console.warn(column.dataItem.column.dataItem.dataContext[valueSearch]);
      let value = parseFloat(column.dataItem.column.dataItem.valueY);
      let nameCategory =
        column.dataItem.column.dataItem.dataContext[valueSearch];
      let fill = column.dataItem.column.dataItem.dataContext[color];

      if (!teste[fill]) teste[fill] = [];
      teste[fill] = {
        name: nameCategory,
        fill: fill,
      };

      if (!sequenceNumber[fill]) sequenceNumber[fill] = [];
      sequenceNumber[fill].push(i);

      if (!sumValue[fill]) sumValue[fill] = [];
      sumValue[fill].push(value);

      legenddata.push({
        name: nameCategory,
        fill: fill,
      });
    });

    console.warn("legenddata", teste);

    teste2 = Object.keys(teste).map((el) => {
      let valueColumn = sumValue[el].reduce((a, b) => a + b, 0).toFixed(0);
      teste[el].name = teste[el].name;

      //teste[el].fill = "#3498db"; // COLOR FIXED

      let dataSequence = { sequence: sequenceNumber[el] };
      return { ...teste[el], ...dataSequence };
    });

    console.warn("teste2", teste2);

    legend.data = teste2;

    legend.itemContainers.template.events.on("hit", function (ev) {
      let sequenceItem = ev.target.dataItem._dataContext.sequence;
      sequenceItem.map((el) => {
        //hidden
        toggleSlice(el, sequenceItem[sequenceItem.length - 1]);
      });
    });
  });
}
