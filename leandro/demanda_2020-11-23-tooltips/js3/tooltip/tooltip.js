const toolTipBubble = (tooltipID, panelCheckID, chartID) => {
   

    /*
    tooltipID = Um id unico com para o tooltip, na função que cria o gráfico eu concateno
    panelCheckID = O id aonde fica as opções de filtro em cima do Gráfico (qtCliente, CLTV ...)
    chartID = O id do gráfico
    */
    
    document.getElementById(chartID).addEventListener("mouseover", function( event ) {  
        getColor()
    }, false);

    const getColor = () => { // 'panelCheckAxis'
        document.getElementById(panelCheckID).querySelectorAll("input").forEach((el) => {
        // desmarcar todos os outros checkboxs
            if (el.checked) {
                document.querySelectorAll(`#${tooltipID} tr`).forEach(el2=> {
                    if(el.value == el2.dataset.value) {
                        el2.bgColor = el2.dataset.color;
                    } else {
                        el2.bgColor = '';
                    }
                })
            }
        });
    }


    /*
    
    Na tags de tr contem duas propriedades data-value data-color

    O data-value tem que se igual ao filtro, exemplo avgM, cltv...PropTypes.any,

    O data-color é a cor que será colocada quando a opção estiver ativa, você pode alterar nessa propriedade
    
    */


  return (
    "" +
    "<div  tabindex='1' onblur='alert(1)' id='" +   tooltipID + "' style='background: #393b54; font-family: verdana; sans-serif; color: white; border-radius: 6px; width: 300px; position: relative; font-size: 12px; display: flex; justify-content: space-between; flex-direction: column;'>" +
    "    <div style='padding: 10px;'>" +
    "        <p style='width: 250px'><b>CLUSTER: {ClusterId}</b></p>" +
    "        <p style='width: 250px'>" +
    "        <span style='display: flex; align-items: center; justify-content: start;'>" +
    "            <span style='background-color: {CorFundoFM}; width: 15px; height: 15px; border-radius: 5px; margin-right: 10px;'></span>" +
    "            <b>PERFIL: </b> <span style='color: {CorFundoFM};'>{InterpretacaoFM}</span>" +
    "        </span>" +
    "        <span style='display: flex; align-items: center; justify-content: start;'>" +
    "            <span style='background-color: {CorFundoR}; width: 15px; height: 15px; border-radius: 5px; margin-right: 10px; opacity: 0.7;'></span>" +
    "            <b>SITUAÇÃO: </b> <span style='color: {CorFundoR};'>{InterpretacaoR}</span>" +
    "        </span>" +
    "        </p>" +
    "        <hr style='margin: 10px 0; border: 3px solid #fff!important' />" +
    "        <table style='width: 100%;'>" +
    "            <tbody style='width: 100%;'>" +
    "                <tr data-value='QtdClientes' data-color='#7a59ad'>" +
    "                    <td align='left' style='width: 50%;'><b>Qtd. Clientes</b></td>" +
    "                    <td align='right'>{QtdClientes.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr data-value='SumF' data-color='#00cec9'>" +
    "                    <td align='left' style='width: 50%;'><b>Total de Pedidos</td>" +
    "                    <td align='right'>{SumF.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "            </tbody>" +
    "        </table>" +
    "         <hr style='margin: 10px 0; border: 3px solid #fff!important' />" +
    "        <div style='display: flex; margin-bottom: 10px;'>" +
    "            <strong>{Titulo 2 }</strong>" +
    "        </div>" +
    "        <table>" +
    "            <tbody style='width: 100%;'>" +
    "                <tr data-value='AvgRD' data-color='#d63031'>" +
    "                    <th align='left' style='width: 50%;'><b>R (Último Pedido)</b></th>" +
    "                    <td align='right'>{AvgRD.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr data-value='AvgF' data-color='#0984e3'>" +
    "                    <th align='left' style='width: 50%;'><b>F (Fidelidade)</b></th>" +
    "                    <td align='right'>{AvgF.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr data-value='AvgM' data-color='#6c5ce7'>" +
    "                    <th align='left' style='width: 50%;'><b>M (Tícket Médio)</b></th>" +
    "                    <td align='right'>R$ {AvgM.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "                <tr data-value='CLTV' data-color='#208956'>" +
    "                    <th align='left' style='width: 50%;'><b>M (CLTV)</b></th>" +
    "                    <td align='right'>R$ {CLTV.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "                <tr data-value='SumM' data-color='#154622'>" +
    "                    <th align='left' style='width: 50%;'><b>M (Valor dos Pedidos)</b></th>" +
    "                    <td align='right'>R$ {SumM.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "            </tbody>" +
    "        </table>" +
    "         <hr style='margin: 10px 0; border: 3px solid #fff!important' />" +
    "    </div>" +
    "    <div style='background: #292a43; width: 100%; padding: 1px 6px; box-sizing: border-box; display: flex; flex-direction: column;'>" +
    '       <button onclick="alert(`string test`)" style="cursor: pointer; display: flex!important; color: #123; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; justify-content: center; align-items: center; margin-bottom:5px" >' +
    '            <i class="fal fa-eye" style="margin-right:5px"></i> view details' +
    '      </button>' +
    '       <button onclick="alert(`string test`)" style="cursor: pointer; display: flex!important; color: #123; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; justify-content: center; align-items: center; margin-bottom:5px">' +
    '            <i class="fal fa-bullseye-arrow" style="margin-right:5px"></i> save segment' +
    '     </button>'+
    '       <button  onclick="alert(`string test`)" style="cursor: pointer; display: flex!important; color: #123; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; justify-content: center; align-items: center; margin-bottom:5px">' +
    '            <i class="fal fa-mail-bulk"></i> create message' +
    '      </button>' +
    '    </div>' +
    "</div>"
  );
};
