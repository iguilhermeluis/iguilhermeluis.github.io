/*
    Função responsável por fazer a troca de dados dinamicos dos graficos,
    ela captura o value do checkbox e usa como campo de pesquisa nos dados
    dataItem.dataContext[ev.target.value];
*/
function addCheckboxInChart(id, serie, value) {
  let changeValueChart = (serieParam, ev, target) => {
    // pega a series que return na bubble [chart, series]
    serieParam.dataItems.each(function (dataItem) {
      let newValue = dataItem.dataContext[ev.target.value];

      console.warn("newV", newValue);

      if (newValue) {
        dataItem[target] = newValue;
      }
    });
  };

  document.getElementById(id).onclick = function (ev) {
    changeValueChart(serie, ev, value);
    console.warn(serie);
    document
      .getElementById(id)
      .querySelectorAll("input")
      .forEach((el) => {
        // desmarcar todos os outros checkboxs
        if (el.value != ev.target.value) {
          el.checked = false;
        } else {
          document.querySelectorAll("#tooltip-multiaxis tr").forEach((el) => {
            if (ev.target.value == el.dataset.value) {
              let color = el.dataset.color;
              //el.dataset.value

              el.bgColor = color;
              console.warn(el);
            }
          });
        }
      });
  };
}
