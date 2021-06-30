function HabilitarDesabilitarCheck(
  seriesChart,
  isGlobal,
  filter,
  checkId,
  idGlobal,
  parametroFM,
  parametroR) {
  document.getElementById(checkId).addEventListener("click", (e) => {
    TABELA_GLOBAL.fnDestroy();

    createTable(
      "#dt-basic-example",
      "#tbody",
      !e.target.checked ? DADOS_TABELA : []
    );

    let elements = document.getElementById(idGlobal).querySelectorAll(`.legend-chart li`);
    if (!isGlobal) elements = document.getElementById(
      filter == "InterpretacaoFM" ?
      parametroFM :
      parametroR).querySelectorAll('li');

    elements.forEach((el) => {
      let value = el.getAttribute("data-value");
      let color = el.getAttribute("data-color");
      let category = el.getAttribute("data-category");
      let boxColor = el.getElementsByTagName("div")[0];
      let textColor = el.getElementsByTagName("p")[0];

      boxColor.style.background = !e.target.checked ? color : "#999999";
      textColor.style.color = !e.target.checked ? "#000000" : "#999999";
      el.setAttribute("data-active", !e.target.checked ? "true" : "false");
      HabilitarDesabilitarItem(
        seriesChart,
        category,
        category == "InterpretacaoFM" ?
        "legendInterpretacaoFM" :
        "legendInterpretacaoR",
        "legendInterpretacaoFM",
        "legendInterpretacaoR"
      );
    });
  });
}