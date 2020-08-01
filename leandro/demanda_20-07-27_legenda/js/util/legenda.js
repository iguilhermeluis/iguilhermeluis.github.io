function legenda(
  primaryChart,
  primarySeries,
  arrayChart,
  seriesChart,
  valueSearch,
  color
) {
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
              console.log('@@@=>', column.dataContext)
              // match
              if (value.visible) {
               
                document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext[color]}"]`).forEach(el=>
                  {
                    el.setAttribute('fillBackup', el.getAttribute('fill'));
                    el.setAttribute('fill', '#999999');
                  }
                )

                value.hide();
              } else {
                document.querySelectorAll(`g[role="switch"]  g[fillBackup="${value.dataContext[color]}"]`).forEach(el=> el.setAttribute('fill', el.getAttribute('fillBackup') ))
          
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


    teste2 = Object.keys(teste).map((el) => {
      let valueColumn = sumValue[el].reduce((a, b) => a + b, 0).toFixed(0);
      teste[el].name = teste[el].name;

      //teste[el].fill = "#3498db"; // COLOR FIXED

      let dataSequence = { sequence: sequenceNumber[el] };
      return { ...teste[el], ...dataSequence };
    });

    legend.data = teste2;

    legend.itemContainers.template.events.on("hit", function (ev) {
      let sequenceItem = ev.target.dataItem._dataContext.sequence;
      sequenceItem.map((el) => {
        //hidden
        toggleSlice(el, sequenceItem[sequenceItem.length - 1]);
      });
    });

    document.querySelectorAll(`g[role="switch"]  g[fill="#999999"]`).forEach(el=>
      {
        el.setAttribute('fillBackup', el.getAttribute('fill'));
      }
    )

  });
}
