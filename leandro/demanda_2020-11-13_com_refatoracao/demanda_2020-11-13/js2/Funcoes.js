//import { func } from "prop-types";

function AlertaMensagem() {

    var EnviarMsg = false;
    var title = '';
    var icon = '';

    var erroMessage = document.getElementById("ctl00_ErroMessage");
    if (erroMessage == null) { erroMessage = document.getElementById("ctl00$ErroMessage"); }
    else if (erroMessage == null) { erroMessage = document.getElementById("ErroMessage"); }

    var sucessMessage = document.getElementById("ctl00_SucessMessage");
    if (sucessMessage == null) { erroMessage = document.getElementById("ctl00$SucessMessage"); }
    else if (sucessMessage == null) { erroMessage = document.getElementById("SucessMessage"); }

    var alertMessage = document.getElementById("ctl00_AlertMessage");
    if (alertMessage == null) { erroMessage = document.getElementById("ctl00$AlertMessage"); }
    else if (alertMessage == null) { erroMessage = document.getElementById("AlertMessage"); }

    if (erroMessage != null) {
        if (erroMessage.value != "") {
            msg = erroMessage.value;

            erroMessage.value = "";
            document.getElementById("ctl00_ErroMessage").value = "";

            title = 'Oops...';
            icon = 'error';
            EnviarMsg = true;

            erroMessage.value = '';
        }
    }

    if (sucessMessage != null) {
        if (sucessMessage.value != "") {
            msg = sucessMessage.value;
            sucessMessage.value = "";

            title = 'Oba!';
            icon = 'success';
            EnviarMsg = true;

            sucessMessage.value = '';
        }
    }

    if (alertMessage != null) {
        if (alertMessage.value != "") {
            msg = alertMessage.value;
            alertMessage.value = "";

            title = 'Atenção...';
            icon = 'warning';
            EnviarMsg = true;

            alertMessage = '';
        }
    }

    if (EnviarMsg) {
        Swal.fire({
            icon: icon,
            title: title,
            //text: msg,
            html: msg,
            confirmButtonColor: '#3085d6'
        });
    }
}

function sweetAlertConfirm(btn, title, msg, textbutton) {
    if (btn.dataset.confirmed) {
        // The action was already confirmed by the user, proceed with server event
        btn.dataset.confirmed = false;
        return true;
    } else {
        // Ask the user to confirm/cancel the action
        event.preventDefault();
        Swal.fire({
            title: title,
            //text: msg,
            html: msg,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: textbutton,
            cancelButtonText: "Não",
            reverseButtons: true
        }).then((result) => {
            if (result.value === true) {
                btn.dataset.confirmed = true;
                btn.click();
            }
            else {
                return false;
            }
        }).catch(function (reason) {
            // The action was canceled by the user
            return false;
        });
    }
}

//function CancelarOperacao(msg, txtbotao) {

//    if (msg == null && msg == '') { msg = 'Deseja cancelar esta operação?'; }
//    if (txtbotao == null && txtbotao == '') { txtbotao = 'Deseja cancelar esta operação?'; }

//    if (sweetAlertConfirm(this, msg, '', txtbotao))
//    { history.back(); }
//    else { return false; }
//}
