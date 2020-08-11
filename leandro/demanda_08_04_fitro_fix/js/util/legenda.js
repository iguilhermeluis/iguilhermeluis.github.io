function legenda(data, valueSearch, color, seriesChartAll) {
  let formedData = processData(
  data,
  valueSearch == "InterpretacaoR" ? "R" : "FM"
  );
  createElementLegend(formedData, valueSearch, seriesChartAll, color);
  }
  
  function createElementLegend(items, valueSearch, seriesChartAll, color) {
  let legendContainer = document.getElementById(`legend${valueSearch}`);
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
      } else {
        boxColor.style.background = "#999999";
        textColor.style.color = "#999999";
        this.setAttribute("data-active", "false");
        toggleItem(seriesChart, category, value, true);
      }
      filterTable(DADOS_TABELA, category);
    };
  
    Array.from(elements).forEach(function (element) {
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
    gerarTabela("#dt-basic-example", "#tbody", tableFilter);
  }