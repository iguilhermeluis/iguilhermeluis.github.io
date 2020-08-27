function criarLegenda(
  data,
  valueSearch,
  color,
  seriesChartAll,
  id,
  groupBy,
  targetSort
) {
  let formedData = processData(data, groupBy);
  let dataSort = formedData.sort(function(a, b) {
    if (a[targetSort] > b[targetSort]) {
      return 1;
    }
    if (a[targetSort] < b[targetSort]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  createElementLegend(dataSort, valueSearch, seriesChartAll, color, id);
}

function createElementLegend(
  items,
  valueSearch,
  seriesChartAll,
  color,
  idLegend
) {
  let legendContainer = document.getElementById(idLegend);
  let html = "";
  items.map((item) => {
    html += `<li data-active="true" data-value="${item.name}" data-category="${valueSearch}" data-color="${item[color]}">
    <div style="background-color: ${item[color]}"></div>
    <p>${item.name}</p>
  </li>`;
  });

  let checkboxHtml = `
  <div class="frame-wrap demo">
    <div class="demo d-flex" style="display: flex;">
      <div class="custom-control custom-switch">
        <label class="space-label" for="checkAll">Marcar todos</label>
        <input type="checkbox" class="custom-control-input" id="checkAll${valueSearch}" />
        <label class="custom-control-label" for="checkAll${valueSearch}">Desmarcar todos</label>
      </div>
    </div>
  </div>`;

  legendContainer.innerHTML = `<ul> ${html} </ul> ${checkboxHtml}`;
  addEventListenerLegend(legendContainer, seriesChartAll);
  HabilitarDesabilitarCheck(
    seriesChartAll,
    false,
    valueSearch,
    `checkAll${valueSearch}`,
    "legendaPrincipal",
    'legendInterpretacaoFM',
    'legendInterpretacaoR'
  );
}

function HabilitarDesabilitarItem(
  seriesChart,
  filter,
  parametroAlvo,
  parametroFM,
  parametroR,
) {
  let itemsActives = document
    .getElementById(parametroAlvo)
    .querySelectorAll("li[data-active='true']");

  let itemsActivesInterpretacaoFM = document
    .getElementById(parametroFM)
    .querySelectorAll("li[data-active='true']");

  let itemsActivesInterpretacaoR = document
    .getElementById(parametroR)
    .querySelectorAll("li[data-active='true']");

  seriesChart.map((el) => {
    if (el._className == "LineSeries") {
      el.dataItems.each(function(dataItem) {
        dataItem.value = 1;
      });
    }

    el.dataItems.values.map((value) => {
      value.hide();

      itemsActives.forEach((elm) => {
        if (filter == "InterpretacaoR") {
          if (value.dataContext["InterpretacaoR"] == elm.innerText) {
            itemsActivesInterpretacaoFM.forEach((obj) => {
              if (value.dataContext["InterpretacaoFM"] == obj.innerText) {
                value.show();
              }
            });
          }
        }

        if (filter == "InterpretacaoFM") {
          if (value.dataContext["InterpretacaoFM"] == elm.innerText) {
            itemsActivesInterpretacaoR.forEach((obj) => {
              if (value.dataContext["InterpretacaoR"] == obj.innerText) {
                value.show();
              }
            });
          }
        }
      });
    });
  });
}

function addEventListenerLegend(element, seriesChart) {
  let elements = element.querySelectorAll("li");

  let changeColor = function() {
    let value = this.getAttribute("data-value");
    let color = this.getAttribute("data-color");
    let category = this.getAttribute("data-category");
    let boxColor = this.getElementsByTagName("div")[0];
    let textColor = this.getElementsByTagName("p")[0];
    let isDisabled = boxColor.style.background == "rgb(153, 153, 153)";

    boxColor.style.background = isDisabled ? color : "#999999";
    textColor.style.color = isDisabled ? "#000000" : "#999999";
    this.setAttribute("data-active", isDisabled ? "true" : "false");
    HabilitarDesabilitarItem(
      seriesChart,
      category,
      category == "InterpretacaoFM" ?
      "legendInterpretacaoFM" :
      "legendInterpretacaoR",
      "legendInterpretacaoFM",
      "legendInterpretacaoR"
    );

    filterTable(DADOS_TABELA, category);
  };

  Array.from(elements).forEach(function(element) {
    element.addEventListener("click", changeColor);
  });
}

function filterTable(data, category) {
  let itemsActives = document
    .getElementById(`legend${category}`)
    .querySelectorAll("li[data-active='true']");

  let itemsActivesInterpretacaoFM = document
    .getElementById(`legendInterpretacaoFM`)
    .querySelectorAll("li[data-active='true']");

  let itemsActivesInterpretacaoR = document
    .getElementById(`legendInterpretacaoR`)
    .querySelectorAll("li[data-active='true']");

  tableFilter = [];
  data.map((item) => {
    itemsActives.forEach((elm) => {
      if (category == "InterpretacaoR") {
        if (item["Ação"] == elm.innerText) {
          itemsActivesInterpretacaoFM.forEach((obj) => {
            if (item["Tipo de Cliente"] == obj.innerText) {
              tableFilter.push(item);
            }
          });
        }
      }
      if (category == "InterpretacaoFM") {
        if (item["Tipo de Cliente"] == elm.innerText) {
          itemsActivesInterpretacaoR.forEach((obj) => {
            if (item["Ação"] == obj.innerText) {
              tableFilter.push(item);
            }
          });
        }
      }
    });
  });
  TABELA_GLOBAL.fnDestroy();
  createTable("#dt-basic-example", "#tbody", tableFilter);
}