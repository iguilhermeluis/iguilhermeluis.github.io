function toggleCheck(
  seriesChart,
  isGlobal,
  filter,
  valueSearch,
  checkId
) {
  document.getElementById(checkId).addEventListener("click", (e) => {
    TABELA_GLOBAL.fnDestroy();
    if (!e.target.checked) {
      gerarTabela("#dt-basic-example", "#tbody", DADOS_TABELA);

      seriesChart.map((el) => {
        el.dataItems.values.map((value) => {
          let elements = document.querySelectorAll(`.legend-chart li`);
          if (!isGlobal)
            elements = document.querySelectorAll(`#legend${filter} li`);

          if (value.dataContext[filter] == valueSearch) value.show();

          elements.forEach((el) => {
            var color = el.getAttribute("data-color");
            let boxColor = el.getElementsByTagName("div")[0];
            let textColor = el.getElementsByTagName("p")[0];
            boxColor.style.background = color;
            textColor.style.color = "#000000";
            el.setAttribute("data-active", "active");
          });

          value.show();
        });
      });
    } else {
      gerarTabela("#dt-basic-example", "#tbody", []);
      seriesChart.map((el) => {
        el.dataItems.values.map((value) => {
          let elements = document.querySelectorAll(`.legend-chart li`);

          if (!isGlobal)
            elements = document.querySelectorAll(`#legend${filter} li`);

          if (value.dataContext[filter] == valueSearch) value.hide();
          elements.forEach((el) => {

            var color = el.getAttribute("data-color");
            let boxColor = el.getElementsByTagName("div")[0];
            let textColor = el.getElementsByTagName("p")[0];
            boxColor.style.background = "#999999";
            textColor.style.color = "#999999";

            el.setAttribute("data-active", "false");
          });

          value.hide();
        });
      });
    }
  });

}