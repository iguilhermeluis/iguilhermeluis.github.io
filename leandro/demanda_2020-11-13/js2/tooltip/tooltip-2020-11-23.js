var toolTipBubble = "" +
"<div style='background: #393b54; font-family: verdana; sans-serif; color: white; border-radius: 6px; width: 300px; position: relative; font-size: 12px; display: flex; justify-content: space-between; flex-direction: column;'>" +
    "    <div style='padding: 10px;'>" +
    "        <p style='width: 250px'><b>CLUSTER: {ClusterId}</b></p>" +
    "        <p style='width: 250px'>" +
    "        <span style='display: flex; align-items: center; justify-content: start;'>" +
    "            <span style='background-color: {CorFundoFM}; width: 15px; height: 15px; border-radius: 5px; margin-right: 10px;'></span>" +
    "            <b>PERFIL:</b>&nbsp;<span style='color: {CorFundoFM};'>{InterpretacaoFM}</span>" +
    "        </span>" +
    "        <span style='display: flex; align-items: center; justify-content: start;'>" +
    "            <span style='background-color: {CorFundoR}; width: 15px; height: 15px; border-radius: 5px; margin-right: 10px; opacity: 0.7;'></span>" +
    "            <b>SITUAÇÃO:</b>&nbsp;<span style='color: {CorFundoR};'>{InterpretacaoR}</span>" +
    "        </span>" +
    "        </p>" +
    "        <hr style='margin: 10px 0; border: 1px solid #fff!important' />" +
    "        <table style='width: 100%;'>" +
    "            <tbody style='width: 100%;'>" +
    "                <tr bgcolor='#7a59ad'>" +
    "                    <td align='left' style='width: 50%;'><b>Qtd. Clientes</b></td>" +
    "                    <td align='right'>{QtdClientes.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr>" +
    "                    <td align='left' style='width: 50%;'><b>Total de Pedidos</td>" +
    "                    <td align='right'>{SumF.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "            </tbody>" +
    "        </table>" +
    "        <hr style='margin: 10px 0; border: 1px solid #fff!important' />" +
    "        <div style='display: flex; margin-bottom: 10px;'>" +
    "            <strong>{Titulo 2 }</strong>" +
    "        </div>" +
    "        <table>" +
    "            <tbody style='width: 100%;'>" +
    "                <tr>" +
    "                    <th align='left' style='width: 50%;'><b>R (Último Pedido)</b></th>" +
    "                    <td align='right'>{AvgRD.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr>" +
    "                    <th align='left' style='width: 50%;'><b>F (Fidelidade)</b></th>" +
    "                    <td align='right'>{AvgF.formatNumber('#,###')}</td>" +
    "                </tr>" +
    "                <tr>" +
    "                    <th align='left' style='width: 50%;'><b>M (Tícket Médio)</b></th>" +
    "                    <td align='right'>R$ {AvgM.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "                <tr>" +
    "                    <th align='left' style='width: 50%;'><b>M (CLTV)</b></th>" +
    "                    <td align='right'>R$ {CLTV.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "                <tr>" +
    "                    <th align='left' style='width: 50%;'><b>M (Valor dos Pedidos)</b></th>" +
    "                    <td align='right'>R$ {SumM.formatNumber('#,###.00')}</td>" +
    "                </tr>" +
    "            </tbody>" +
    "        </table>" +
    "        <hr style='margin: 10px 0; border: 1px solid #fff!important' />" +
    "    </div>" +
    "    <div style='background: #292a43; width: 100%; padding: 5px 10px; box-sizing: border-box; border-radius: 0 0 6px 6px; display: flex; flex-direction: column;'>" +
    "       <button onclick='' style='background: transparent; cursor: pointer; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; color: #fff; display: flex; justify-content: space-around;'>" +
    "            <i class='fal fa-eye'></i> view details" +
    "      </button>" +
    "       <button onclick='' style='background: transparent; cursor: pointer; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; color: #fff; margin-top: 5px; display: flex; justify-content: space-around;'>" +
    "            <i class='fal fa-bullseye-arrow'></i> save segment" +
    "      </button>" +
    "       <button onclick='' style='background: transparent; cursor: pointer; padding: 5px 10px; width: 100%; border: 1px solid #fff; border-radius: 4px; color: #fff; margin-top: 5px; display: flex; justify-content: space-around;'>" +
    "            <i class='fal fa-mail-bulk'></i> create message" +
    "      </button>" +
    "    </div>" +
"</div>"