function numberToReal(number, symbol) {
  var number = parseFloat(number);

  number = number.toFixed(2).split(".");
  number[0] = symbol + number[0].split(/(?=(?:...)*$)/).join(".");
  return number.join(",");
}

function defaultBR(number) {
  return parseFloat(number).toLocaleString("pt-BR", {
    // Ajustando casas decimais
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function gerarTabela(idTable, idTbody, dados) {
  let totalClientes = 0;
  let totalPedidos = 0;
  let totalUltimasCompra = 0;
  let totalFidelidade = 0;
  let totalTicketMedio = 0;
  let totalCLTV = 0;
  let totalVolumeDasVendas = 0;

  let arrayTemp = [];
  dados.map((data) => {
    totalClientes += parseFloat(data["Clientes"]);
    totalPedidos += parseFloat(data["Pedidos"]);
    totalUltimasCompra += parseFloat(data["Última Compra"]);
    totalFidelidade += parseFloat(data["Fidelidade"]);
    totalTicketMedio += parseFloat(data["Tícket Médio"]);
    totalCLTV += parseFloat(data["CLTV"]);
    totalVolumeDasVendas += parseFloat(data["Volume das Vendas"]);

    arrayTemp.push(
      ` <tr>
            <td >${data["Cluster"]}</td>
            <td>${data["Clientes"]}</td>
            <td>${data["Pedidos"]}</td>
            <td>${numberToReal(data["Última Compra"], "R$ ")}</td>
            <td>${data["Fidelidade"]}</td>
            <td>${defaultBR(data["Tícket Médio"])}</td>
            <td>${defaultBR(data["Volume das Vendas"])}</td>
            <td>${numberToReal(data["CLTV"], "R$ ")}</td>
            <td class="align">
                <span class='badge badge-pill' 
                style='background-color: ${data["ColorFM"]}'>${
        data["Tipo de Cliente"]
      }<span>
            </td>
            <td>
                <span class='badge badge-pill' 
                style='background-color: ${data["ColorR"]}'>${
        data["Ação"]
      }</span>
            </td>
            <td>
              <button class="btn-primary" onClick="alert('Ação 1 no cluster '+${
                data["Cluster"]
              })"  >ação 1</button>
              <button class="btn-default" onClick="alert('Ação 2 no cluster '+${
                data["Cluster"]
              })"  >ação 2</button>
            </td>
        </tr>`
    );
  });
  $(idTbody).html(arrayTemp);

  $("#tfoot").html(`
    <tr>
    <th>TOTAL</th>
    <th>${totalClientes}</th>
    <th>${totalPedidos}</th>
    <th>${numberToReal(totalUltimasCompra, "R$ ")}</th>
    <th>${totalFidelidade}</th>
    <th>${numberToReal(totalTicketMedio, "R$ ")}</th>
    <th>${defaultBR(totalVolumeDasVendas)}</th>
    <th>${numberToReal(totalCLTV, "R$ ")}</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  `);

  $(idTable).dataTable({
    responsive: true,

    //https://datatables.net/reference/option/columns.width
    //Defina a largura da primeira coluna para 20%
    columnDefs: [{ width: "10px", targets: 0 }],
  });
}
