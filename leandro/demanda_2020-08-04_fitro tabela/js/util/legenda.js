function legenda(
  primaryChart,
  primarySeries,
  arrayChart,
  seriesChart,
  valueSearch,
  color,
  seriesChartAll
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
              // match
              if (value.visible) {
                document
                  .querySelectorAll(
                    `g[role="switch"]  g[fill="${value.dataContext[color]}"]`
                  )
                  .forEach((el) => {
                    el.setAttribute("fillBackup", el.getAttribute("fill"));
                    el.setAttribute("fill", "#999999");
                  });

                value.hide();
              } else {
                document
                  .querySelectorAll(
                    `g[role="switch"]  g[fillBackup="${value.dataContext[color]}"]`
                  )
                  .forEach((el) =>
                    el.setAttribute("fill", el.getAttribute("fillBackup"))
                  );

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

    createElementLegend(teste2, valueSearch, seriesChartAll, color);

    //  legend.data = teste2;
    /*
    legend.itemContainers.template.events.on("hit", function (ev) {
      let sequenceItem = ev.target.dataItem._dataContext.sequence;
      sequenceItem.map((el) => {
        //hidden
        toggleSlice(el, sequenceItem[sequenceItem.length - 1]);
      });
    });*/
  });
}

function createElementLegend(items, valueSearch, seriesChartAll, color) {
  let legendContainer = document.getElementById(`legend${valueSearch}`);
  let html = "";
  items.map((item) => {
    html += `<li data-active="true" data-value="${item.name}" data-category="${valueSearch}" data-color="${item.fill}">
              <div style="background-color: ${item.fill}"></div>
              <p>${item.name}</p>
            </li>`;
  });

  let checkboxHtml = `
    <div class="frame-wrap demo">
    <div class="demo d-flex" style="display: flex;">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="checkAll${valueSearch}"/>
        <label class="custom-control-label" for="checkAll${valueSearch}">Marcar todos</label>
      </div>
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="deselectAll${valueSearch}" />
        <label class="custom-control-label" for="deselectAll${valueSearch}">Desmarcar todos</label>
      </div>
    </div>
  </div>`;

  legendContainer.innerHTML = `<ul> ${html} </ul> ${checkboxHtml}`;
  addEventListenerLegend(legendContainer, seriesChartAll);
  toggleCheck(
    seriesChartAll,
    false,
    valueSearch,
    "VIP",
    `checkAll${valueSearch}`,
    `deselectAll${valueSearch}`,
    color
  );
}

function toggleItem(seriesChart, filter, valueSearch, isHidden) {
  seriesChart.map((el) => {
    el.dataItems.values.map((value) => {
      if (value.dataContext[filter] == valueSearch) {
        if (isHidden) {
          value.hide();
        } else {
          value.show();
        }
      }
    });
  });
}

function addEventListenerLegend(element, seriesChart) {
  var elements = element.querySelectorAll("li");

  var changeColor = function () {
    var value = this.getAttribute("data-value");
    var color = this.getAttribute("data-color");
    var category = this.getAttribute("data-category");
    var boxColor = this.getElementsByTagName("div")[0];
    var textColor = this.getElementsByTagName("p")[0];

    if (boxColor.style.background == "rgb(153, 153, 153)") {
      boxColor.style.background = color;
      textColor.style.color = "#000000";
      this.setAttribute("data-active", "true");
      toggleItem(seriesChart, category, value, false);
      filterTable(DADOS_TABELA, category, value, false);
    } else {
      boxColor.style.background = "#999999";
      textColor.style.color = "#999999";
      this.setAttribute("data-active", "false");
      toggleItem(seriesChart, category, value, true);
      filterTable(DADOS_TABELA, category, value, true);
    }
  };

  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", changeColor);
  });
}

function filterTable(data, category, valueSearch, isHidden) {
  let itemsActives = document
    .getElementById(`legend${category}`)
    .querySelectorAll("li[data-active='true']");

  tableFilter = [];
  data.map((item) => {
    itemsActives.forEach((elm) => {
      if (category == "InterpretacaoR") {
        if (item["Ação"] == elm.innerText) {
          tableFilter.push(item);
        }
      }
      if (category == "InterpretacaoFM") {
        if (item["Tipo de Cliente"] == elm.innerText) {
          tableFilter.push(item);
        }
      }
    });
  });
  TABELA_GLOBAL.fnDestroy();
  gerarTabela("#dt-basic-example", "#tbody", tableFilter);
}
