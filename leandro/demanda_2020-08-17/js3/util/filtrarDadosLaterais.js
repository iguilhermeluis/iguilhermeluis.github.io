// Código da Interpretação R; Código da Interpretação FM; e o IDs dos Clusters.
// console.warn( itemsActives,  itemsActivesInterpretacaoFM, itemsActivesInterpretacaoR);

function filtrarDadosLaterais(
  itemsActives,
  itemsActivesInterpretacaoFM,
  itemsActivesInterpretacaoR,
  filter,
  data
) {
  let dadosfiltrados = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    itemsActives.forEach((elm) => {
      if (filter == "InterpretacaoR") {
        if (item.InterpretacaoR == elm.innerText) {
          itemsActivesInterpretacaoFM.forEach((obj) => {
            if (item.InterpretacaoFM == obj.innerText) {
              dadosfiltrados.push(item);
            }
          });
        }
      }

      if (filter == "InterpretacaoFM") {
        if (item.InterpretacaoFM == elm.innerText) {
          itemsActivesInterpretacaoR.forEach((obj) => {
            if (item.InterpretacaoR == obj.innerText) {
              dadosfiltrados.push(item);
            }
          });
        }
      }
    });
  }

  calcularDadosLaterais(dadosfiltrados);
  return dadosfiltrados;
}

function calcularDadosLaterais(data) {
  console.warn("calcular dados", data);
  let TotalClientes = 0;
  let TotalPedidos = 0;
  let TotalVendas = 0;
  let TotalClusters = 0;
  let TicketMedio = 0;

  data.map((it) => {
    let qtdClientes = parseInt(it.MScore);
    TotalClientes += qtdClientes;

    let qtdPedidos = parseFloat(it.Frequency);
    TotalPedidos += qtdPedidos;

    let qtdVendas = parseFloat(it.MonetarySUM);
    TotalVendas += qtdVendas;

    //MonetaryAVG e dividir pela Quantidade de Clientes;
    let valTicketMedio = qtdVendas / qtdClientes;
    TicketMedio += valTicketMedio;

    TotalClusters += 1;
  });

  document.getElementById(
    "QtdTicketMedioLateral"
  ).innerHTML = `R$ ${TicketMedio.toFixed(2)}`;
  document.getElementById(
    "QtdVendasLateral"
  ).innerHTML = `R$ ${TotalVendas.toFixed(2)}`;
  document.getElementById("QtdPedidosLateral").innerHTML = `${TotalPedidos}`;
  document.getElementById("QtdClientesLateral").innerHTML = `${TotalClientes}`;
}
