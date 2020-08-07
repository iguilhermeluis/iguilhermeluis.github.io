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
  atualizarTabela(idTable, idTbody, dados);

  var table = $(idTable).dataTable({
    responsive: true,
    destroy: true,
    dom:
      "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    buttons: [
      {
        extend: "colvis",
        text: "Column Visibility",
        titleAttr: "Col visibility",
        className: "btn-outline-default",
      },
      {
        extend: "csvHtml5",
        text: "CSV",
        titleAttr: "Generate CSV",
        className: "btn-outline-default",
      },
      {
        extend: "copyHtml5",
        text: "Copy",
        titleAttr: "Copy to clipboard",
        className: "btn-outline-default",
      },
      {
        extend: "print",
        text: '<i class="fal fa-print"></i>',
        titleAttr: "Print Table",
        className: "btn-outline-default",
      },
    ],
  });

  return table;
}

function atualizarTabela(idTable, idTbody, dados) {
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
              <a href='javascript:void(0);' class='btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1' title='Delete Record'>
                <i class="fal fa-times"></i>
              </a>
              <div class='dropdown d-inline-block dropleft'>
                <a href='#'' class='btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0' data-toggle='dropdown' aria-expanded='true' title='More options'>
                  <i class="fal fa-ellipsis-v"></i>
                </a>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='javascript:void(0);'>Change Status</a>
                  <a class='dropdown-item' href='javascript:void(0);'>Generate Report</a>
                </div>
              </div> 
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
}
