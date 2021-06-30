(function ($) {
  $(function () {
    let validar_cpf_cnpj = (id) => {
      let elemento = document.getElementById(id);
      elemento.classList.remove("is-valid");
      elemento.classList.add("is-invalid");
      let val = elemento.value;
      let valLength = val.replace(/\D/g, "").length;

      if (valLength == 11 || valLength == 14) {
        let cnpjOrCpf = val.replace(/\D/g, "");
        let isValid =
          valLength == 11 ? valid.cpf(cnpjOrCpf) : valid.cnpj(cnpjOrCpf);

        if (isValid) {
          elemento.classList.remove("is-invalid");
          elemento.classList.add("is-valid");
        } else {
          elemento.classList.remove("is-valid");
          elemento.classList.add("is-invalid");
        }

        return isValid;
      }
      return false;
    };

    let maskCNPJCPF = (id) => {
      let elementCPFCNPJ = document.getElementById(id);

      elementCPFCNPJ.addEventListener("blur", (event) => {
        validar_cpf_cnpj(id);
      });

      elementCPFCNPJ.addEventListener("keydown", (event) => {
        var maskCpjCnpj = function (val) {
            validar_cpf_cnpj(id);
            let valLength = val.replace(/\D/g, "").length;
            return valLength < 12 ? "000.000.000-009999" : "00.000.000/0000-00";
          },
          ccOptions = {
            onKeyPress: function (val, e, field, options) {
              field.mask(maskCpjCnpj.apply({}, arguments), options);
            },
          };

        $(`#${id}`).mask(maskCpjCnpj, ccOptions);
      });
    };

    let validationForm = (id) => {
      let form = document.getElementById(id);

      form.querySelectorAll("input").forEach((el) => {
        el.onblur = () => {
          if (el.checkValidity()) {
            el.classList.add("is-valid");
            el.classList.remove("is-invalid");
          } else {
            el.classList.remove("is-valid");
            el.classList.add("is-invalid");
          }
        };
      });

      //adiciona um ouvinte ao submeter o formulario
      form.addEventListener("submit", (event) => {
        /*  form.checkValidity() 
           Retorna verdadeiro se os inputs dentro do form contém dados válidos.
                            */
        if (!form.checkValidity() || !validar_cpf_cnpj("cpfcnpj")) {
          // se os dados n tiverem validos, eu paro o evento

          form.querySelectorAll("input").forEach((el) => {
            if (!el.checkValidity()) {
              el.classList.remove("is-valid");
              el.classList.add("is-invalid");

              // LISTAGEM DOS DADOS INVÁLIDOS CASO QUEIRA USAR O FOCUS
              //console.warn(`${el.getAttribute('name')} está inválido`)
              //el.focus();
            }
          });

          event.preventDefault();
          event.stopPropagation();
        } else {
          // DADOS VALIDOS
          //form.classList.add("was-validated");
          let datas = [];
          form.querySelectorAll("input").forEach((el) => {
            let data = {
              name: el.getAttribute("name"),
              name2: el.getAttribute("id"), // caso queira usar o id
              value: el.value,
            };
            datas.push(data);
          });

          // OBJETOS COM OS CAMPOS
          console.table(datas);

          alert("DADOS VÁLIDOS, verifique o console");

          // evito que a tela de reload para mostrar os dados no console
          event.preventDefault();
          event.stopPropagation();
        }
      });
    };

    validationForm("formularioPadrao"); // Id do formulario
    maskCNPJCPF("cpfcnpj");
  });
})(jQuery);
