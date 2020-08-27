/* SLIDER  */
function criarSlider(min, max, marks, labels, id) {
  marks.unshift(min);
  labels.unshift("");

  let newDiv = document.createElement("div");

  newDiv.setAttribute("id", id);
  newDiv.setAttribute("class", "slider-fix");

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  let divAtual = document.getElementById("boxSliders");

  var divPai = divAtual.parentNode;

  //document.body.insertBefore(newDiv, divAtual);
  divPai.insertBefore(newDiv, divAtual);

  addMarks(min, max, marks, id, labels);

  let slider = document.getElementById(id);

  let loadLabels = () => {
    document
      .getElementById(id)
      .querySelectorAll("div.noUi-tooltip")
      .forEach((el, index) => {
        let text = el.innerText.split(" - ");
        el.innerText = `${text[0]} - ${labels[index]}`;
      });
  };

  noUiSlider.create(slider, {
    start: marks,
    connect: true,
    tooltips: [false, true, true, true, true, true],
    range: {
      min: [min],
      max: [max],
    },
    tooltips: true,
    pips: {
      mode: "values",
      values: marks,
      density: 4,
    },
  });

  slider.noUiSlider.on("change.one", function () {
    loadLabels();
  });

  loadLabels();

  document
    .getElementById(id)
    .querySelector("div.noUi-base > div:nth-child(2)").style.display = "none";

  let connect = slider.querySelectorAll(".noUi-connect");
  let classes = [
    "c-1-color",
    "c-2-color",
    "c-3-color",
    "c-4-color",
    "c-5-color",
  ];

  for (let i = 0; i < connect.length; i++) {
    connect[i].classList.add(classes[i]);
  }
}

function convertToPercent(num, min, max) {
  let percent = ((num - min) / (max - min)) * 100;

  return percent;
}

function addMarks(min, max, marks, id, labels) {
  var html = "";
  var left = 0;
  var i;

  marks.forEach((mark, index) => {
    left = convertToPercent(parseFloat(mark), min, max);
    html += `
            <span class="mark tooltip" style="left: ${left}%" tooltip="${mark}">
              <span class="boxToolTip">${mark}</span> 
                <span class="tooltiptext">${mark + 50}</span>
            </span> 
            `;
  });

  $("#" + id).after(html);
}

function iniciarSlider() {
  criarSlider(
    100,
    500,
    [100, 200, 300, 400, 500],
    ["recente", "atenção", "em risco", "perdido", "hibernando"],
    "slider-color-main"
  );
}
