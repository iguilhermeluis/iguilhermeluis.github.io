// Código da Interpretação R; Código da Interpretação FM; e o IDs dos Clusters.
// console.warn( itemsActives,  itemsActivesInterpretacaoFM, itemsActivesInterpretacaoR);

function filtrarDados(
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

  calcularDados(dadosfiltrados);
  return dadosfiltrados;
}

function calcularDados(data) {
  let TotalClientes = 0;
  let TotalPedidos = 0;
    let TotalVendas = 0;
    let TotalVendasAVG = 0;
  let TotalClusters = 0;
  let TicketMedio = 0;

  data.map((it) => {
    //let qtdClientes = parseInt(it.MScore);
    TotalClientes += 1;

    let qtdPedidos = parseFloat(it.Frequency);
    TotalPedidos += qtdPedidos;

    let qtdVendas = parseFloat(it.MonetarySUM);
    TotalVendas += qtdVendas;

    let avgVendas = parseFloat(it.MonetaryAVG);
      TotalVendasAVG += avgVendas;

    TotalClusters += 1;

    //1.4) Para calcular o Tícket Médio dos Clientes, basta somar a coluna MonetaryAVG e dividir pela Quantidade de Clientes;
  });

    if (TotalClientes > 0) {
        let valTicketMedio = TotalVendasAVG / TotalClientes;
        TicketMedio += valTicketMedio;
    } else {
        TicketMedio = 0;
    }

    document.getElementById("QtdClientes").innerHTML = `${TotalClientes.toLocaleString('pt-br', { style: 'decimal', currency: 'BRL' })}`;
    document.getElementById("QtdPedidos").innerHTML = `${TotalPedidos.toLocaleString('pt-br', { style: 'decimal', currency: 'BRL' })}`;
    document.getElementById(
        "TotalVendas"
    ).innerHTML = `${TotalVendas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    document.getElementById(
    "TicketMedio"
  ).innerHTML = `${TicketMedio.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
}
