function toggleCheck(
  seriesChart,
  isGlobal,
  filter,
  valueSearch,
  checkId,
  uncheckId,
  colorSearch
) {
  document.getElementById(checkId).addEventListener("click", (e) => {
    TABELA_GLOBAL.fnDestroy();
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
        });

        value.show();
      });
    });
    document.getElementById(uncheckId).checked = false;
  });

  document.getElementById(uncheckId).addEventListener("click", (e) => {
    TABELA_GLOBAL.fnDestroy();
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
        });

        value.hide();
      });
    });
    document.getElementById(checkId).checked = false;
  });
}
