function criarSliderDate(
  min,
  max,
  marks,
  labels,
  id,
  idContainer,
  isDate = false
) {
  let newDiv = document.createElement("div");

  newDiv.setAttribute("id", id);
  newDiv.setAttribute("class", "slider-fix");

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  let divAtual = document.getElementById(idContainer);

  var divPai = divAtual.parentNode;

  //document.body.insertBefore(newDiv, divAtual);
  divPai.insertBefore(newDiv, divAtual);

  //(min, max, marks, id, labels);

  let slider = document.getElementById(id);

  function dataAtualFormatada(data) {
    var dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  const timestamp = (str) => {
    return new Date(str).getTime();
  };

  var dateSlider = document.getElementById(id);

  let createSliderDate = () => {
    addMarks(min, max, marks, id, labels);

    let loadLabels = () => {
      document
        .getElementById(id)
        .querySelectorAll("div.noUi-tooltip")
        .forEach((el, index) => {
          let text = el.innerText.split(" - ");

          let date;

          if (!text[0].includes("/")) {
            date = dataAtualFormatada(new Date(parseInt(text[0])));
            el.innerText = `${date}`;
          } else {
            let dateSplit = text[0].split("/");
            date = dataAtualFormatada(
              new Date(`${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`)
            );
          }
        });
    };

    let stepType = (type) => {
      const oneDay = (7 * 24 * 60 * 60 * 1000) / 7;
      switch (type) {
        case "day":
          return oneDay;
        case "week":
          return oneDay * 7;
        case "month":
          return oneDay * 7 * 4;
        case "twomonths":
          return oneDay * 7 * 4 * 2;
        case "trimester":
          return oneDay * 7 * 4 * 3;
        case "half":
          return oneDay * 7 * 4 * 6;
        case "year":
          return oneDay * 7 * 4 * 12;
      }
    };

    let masksConverted = marks.map((mark) => timestamp(mark));
    console.warn("masksconverted", masksConverted);

    noUiSlider.create(dateSlider, {
      // Create two timestamps to define a range.
      range: {
        min: timestamp(min),
        max: timestamp(max),
      },

      // Steps of one week
      step: stepType("day"),

      // Two more timestamps indicate the handle starting positions.
      start: [timestamp("2000"), timestamp("2015")],
      tooltips: true,
      pips: {
        mode: "values",
        values: masksConverted,
        density: 4,
      },
      // No decimals
      format: wNumb({
        decimals: 0,
      }),
    });

    document
      .querySelectorAll(
        "#sliderDate > div.noUi-pips.noUi-pips-horizontal .noUi-value-large"
      )
      .forEach((el) => {
        let value = dataAtualFormatada(new Date(parseInt(el.innerText)));
        console.warn("aaaaaaaaaa", value);
        el.innerText = value;
      });

    dateSlider.noUiSlider.on("change.one", function () {
      loadLabels();
    });

    dateSlider.noUiSlider.on("update", function (values, handle) {
      loadLabels();
    });

    let stepTypeEl = document.getElementById("stepDate");

    stepTypeEl.addEventListener("change", (event) => {
      dateSlider.noUiSlider.updateOptions({
        step: stepType(event.target.value),
        range: {
          min: timestamp(min),
          max: timestamp(max),
        },
        start: [timestamp("2010"), timestamp("2018")],
        tooltips: true,
        pips: {
          mode: "values",
          values: masksConverted,
          density: 4,
        },
        // No decimals
        format: wNumb({
          decimals: 0,
        }),
      });

      dateSlider.noUiSlider.on("update", function (values, handle) {
        loadLabels();
      });

      loadLabels();
    });

    loadLabels();

    function addMarks(min, max, marks, id, labels) {
      var html = "";
      var left = 0;
      var i;

      marks.forEach((mark, index) => {
        console.warn("maskkkkk");
        left = convertToPercent(parseFloat(timestamp(mark)), min, max);
        html += `
                  <span class="mark tooltip" style="left: ${left}%" tooltip="${mark}">
                    <span class="boxToolTip">${mark}</span> 
                      <span class="tooltiptext">${mark + 50}</span>
                  </span> 
                  `;
      });

      $("#" + id).after(html);
    }
  };

  createSliderDate();
}
