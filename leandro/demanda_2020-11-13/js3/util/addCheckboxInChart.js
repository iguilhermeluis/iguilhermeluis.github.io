/*
    Função responsável por fazer a troca de dados dinamicos dos graficos,
    ela captura o value do checkbox e usa como campo de pesquisa nos dados
    dataItem.dataContext[ev.target.value];
*/
function addCheckboxInChart(id, serie, value){


    let changeValueChart = (serieParam, ev, target) => {
      // pega a series que return na bubble [chart, series]
      serieParam.dataItems.each(function(dataItem) {
        let newValue = dataItem.dataContext[ev.target.value];
        if (newValue) {
          dataItem[target] = newValue;
        }
      });
    }

    document.getElementById(id).onclick = function(ev) {
      changeValueChart(serie, ev, value);
      document.getElementById(id).querySelectorAll("input").forEach((el) => {
        // desmarcar todos os outros checkboxs
        if (el.value != ev.target.value) {
          el.checked = false;
        }
      });
    }
  }