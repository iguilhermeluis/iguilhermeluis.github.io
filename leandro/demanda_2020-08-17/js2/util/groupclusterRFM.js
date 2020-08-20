function groupByInterpretacao(data) {
    var data = data;

    var groupedData = {};

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (!groupedData[item.InterpretacaoFM])
            groupedData[item.InterpretacaoFM] = [];
        groupedData[item.InterpretacaoFM].push(item);
    }
    return groupedData;
}

function groupByInterpretacao(data, tipo) {
    var data = data;

    var groupedData = {};

    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        var tipoItem;

        if (tipo == "FM") { tipoItem = item.InterpretacaoFM; }
        else if (tipo == "R") { tipoItem = item.InterpretacaoR; }

        if (!groupedData[tipoItem])
            groupedData[tipoItem] = [];
        groupedData[tipoItem].push(item);
    }
    return groupedData;
}

function processDataStacker(data) {
    let dataProcess = groupByInterpretacao(data);
    let treeData = [];

    Object.keys(dataProcess).map(item => {
        var TotalClientes = 0;
        var TotalPedidos = 0;
        var TotalVendas = 0;
        var TotalClusters = 0;

        var clusterData = { children: [] };

        clusterData.InterpretacaoR = item;

        dataProcess[item].map(it => {

            //clusterData[it.InterpretacaoR] = parseInt(it.QtdClientes);
            //clusterData.InterpretacaoFM = it.InterpretacaoFM;
            var Valor;

            if (tipo == "clientes") {

                if (clusterData[it.InterpretacaoR] == null) { TotalClientes = 0; }

                let qtdClientes = parseInt(it.QtdClientes);
                TotalClientes += qtdClientes;

                Valor = TotalClientes;

            } else if (tipo == "clusters") {

                if (clusterData[it.InterpretacaoR] == null) { TotalClusters = 0; }

                TotalClusters++;
                Valor = TotalClusters;

            }

            //clusterData.QtdClientes = TotalClientes;

            clusterData[it.InterpretacaoR] = Valor;

            //let qtdPedidos = parseInt(it.SumF);
            //let qtdVendas = parseFloat(it.SumM);

            //TotalClientes += qtdClientes;
            //TotalPedidos += qtdPedidos;
            //TotalVendas += qtdVendas;
            //TotalClusters++;

            //clusterData.CorFundoFM = it.CorFundoFM;
            //clusterData.CorFundoR = it.CorFundoR;
            //clusterData.QtdClientes = TotalClientes;
            //clusterData.QtdPedidos = TotalPedidos;
            //clusterData.MonetarioSum = TotalVendas;
            //clusterData.QTDClusters = TotalClusters;

            //clusterData.children.push({
            ////    ClusterId: it.ClusterId,
            ////    QtdClientes: qtdClientes,
            ////    obj: it,
            ////    CorFundoFM: it.CorFundoFM,
            ////    CorFundoR: it.CorFundoR
            //});
        });
        //// only bigger cluster
        //if (TotalClientes > 0) {
            treeData.push(clusterData);
        //}
    });

    return treeData;
}

function processData(data, tipo) {
    let dataProcess = groupByInterpretacao(data, tipo);
    let treeData = [];

    Object.keys(dataProcess).map(item => {
        var TotalClientes = 0;
        var TotalPedidos = 0;
        var TotalVendas = 0;
        var TotalClusters = 0;

        var clusterData = { name: item, children: [] };

        dataProcess[item].map(it => {

            let qtdClientes = parseInt(it.QtdClientes);
            let qtdPedidos = parseInt(it.SumF);
            let qtdVendas = parseFloat(it.SumM);

            TotalClientes += qtdClientes;
            TotalPedidos += qtdPedidos;
            TotalVendas += qtdVendas;
            TotalClusters++;

            clusterData.CorFundoFM = it.CorFundoFM;
            clusterData.CorFundoR = it.CorFundoR;
            clusterData.QtdClientes = TotalClientes;
            clusterData.QtdPedidos = TotalPedidos;
            clusterData.MonetarioSum = TotalVendas;
            clusterData.QTDClusters = TotalClusters;
            clusterData.ROrdem = it.ROrdem;
            clusterData.FMOrdem = it.FMOrdem;

            clusterData.children.push({
                ClusterId: it.ClusterId,
                QtdClientes: qtdClientes,
                obj: it,
                CorFundoFM: it.CorFundoFM,
                CorFundoR: it.CorFundoR
            });
        });
        // only bigger cluster
        if (TotalClientes > 0) {
            treeData.push(clusterData);
        }
    });

    return treeData;
}