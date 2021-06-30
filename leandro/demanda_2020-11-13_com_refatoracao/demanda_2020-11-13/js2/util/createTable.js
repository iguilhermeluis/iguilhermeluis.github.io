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

function createTable(idTable, idTbody, dados) {
  updateTable(idTable, idTbody, dados);

  var table = $(idTable).dataTable({
    // language: {
    //   url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json",
    // },
    responsive: true,
    destroy: true,
    select: true,
    dom:
      "<'row mb-3' <'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'lB> >" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    pageLength: 50,
    lengthMenu: [50, 100, 200, 500, 1000],
    buttons: [
      {
        text: '<i class="fal fa-trash-alt"></i> Deletar',
        titleAttr: "Deletar",
        className: "btn btn-primary button-table-align-center",
        action: function (e, dt, node, config) {
          let table = $("#tblPedidos").dataTable().DataTable();
          table.$('input[type="checkbox"]:checked').each(function () {
            let element = this;
            console.warn("o id", element.value);
          });
        },
      },
    ],

    columnDefs: [
      {
        targets: 0,
        searchable: false,
        orderable: false,
        className: "dt-body-center",
        render: function (data, type, full, meta) {
          return `<input type="checkbox" name="id[]" value="${full[1]}" >`;
        },
      },
    ],

    order: [[1, "asc"]],
  });

  return table;
}

const handlerClickDelete = (id, action) => {
  //TODO ação do botão

  alert(`O id do cluster é ${id} a ação é ${action}`);
};

function updateTable(idTable, idTbody, dados) {
  let totalClientes = 0;
  let totalPedidos = 0;
  let totalUltimasCompra = 0;
  let totalFidelidade = 0;
  let totalTicketMedio = 0;
  let totalCLTV = 0;
  let totalVolumeDasVendas = 0;
  let avgVendas = 0;

  let arrayTemp = [];

  dados.map((data) => {
    totalClientes += parseFloat(data["QtdClientes"]);
    totalPedidos += parseFloat(data["SumF"]);
    //totalUltimasCompra += parseFloat(data["AvgRD"]);
    totalFidelidade += parseFloat(data["SumF"]);
    totalVolumeDasVendas += parseFloat(data["SumM"]);
    //avgVendas += parseFloat(data["AvgM"]);
    totalCLTV += parseFloat(data["CLTV"]);

    //<td>${defaultBR(data["SumM"], "R$ ")}</td>
    arrayTemp.push(
      ` <tr>
            <td class="tr-align">${data["ClusterId"]}</td>
            <td class="text-right">${data["QtdClientes"]}</td>
            <td class="text-right">${data["SumF"]}</td>
            <td class="text-right">${data["AvgRD"]}</td>
            <td class="text-right">${data["AvgF"]}</td>
            <td class="text-right">${numberToReal(data["AvgM"], "R$ ")}</td>
            <td class="text-right">${numberToReal(data["SumM"], "R$ ")}</td>
            <td class="text-right">${numberToReal(data["CLTV"], "R$ ")}</td>
            <td class="align">
                <span class='badge badge-pill' 
                
                style='background-color: ${data["CorFundoFM"]}; color: ${
        data["CorFonteFM"]
      }'>${data["InterpretacaoFM"]}<span>
            </td>
            <td class="align">
                <span class='badge badge-pill'  onclick='handlerClickDelete(${
                  data["ClusterId"]
                }, 5)'
                style='background-color: ${data["CorFundoR"]}; color: ${
        data["CorFonteR"]
      }'>${data["InterpretacaoR"]}</span>
            </td>
            <td class="align">
              <a onclick='handlerClickDelete(${data["ClusterId"]}, 1)'
               class='btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1' title='Delete Record'>
                <i class="fal fa-times"></i>
              </a>
              <div class='dropdown d-inline-block dropleft'>
                <a href='#'' class='btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0' data-toggle='dropdown' aria-expanded='true' title='More options'>
                  <i class="fal fa-ellipsis-v"></i>
                </a>
                <div class='dropdown-menu'>
                  <a class='dropdown-item'  onclick='handlerClickDelete(${
                    data["ClusterId"]
                  }, 2)'>Change Status</a>
                  <a class='dropdown-item' onclick='handlerClickDelete(${
                    data["ClusterId"]
                  }, 3)'>Generate Report</a>
                </div>
              </div> 
            </td>
        </tr>`
    );
  });
  $(idTbody).html(arrayTemp);

  /*var ticketMedio = 0;
    if (totalClientes > 0) { ticketMedio = avgVendas / totalClientes;}*/
  //defaultBR(totalVolumeDasVendas).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  $("#tfoot").html(`
    <tr>
    <th>TOTAL</th>
    <th class="text-right">${totalClientes.toLocaleString("pt-br", {
      style: "decimal",
      currency: "BRL",
    })}</th>
    <th class="text-right">${totalPedidos.toLocaleString("pt-br", {
      style: "decimal",
      currency: "BRL",
    })}</th>
    <th></th>
    <th></th>
    <th></th>
    <th class="text-right">${numberToReal(
      totalVolumeDasVendas,
      "R$ "
    ).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  `);
}
