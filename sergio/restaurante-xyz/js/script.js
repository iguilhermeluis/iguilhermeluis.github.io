onload = () => {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formulario.nome.value == "") {
      formulario.nome.focus();
      alert("O prenchimento do nome é obrigatório");
    }

    if (formulario.email.value == "") {
      formulario.email.focus();
      alert("O prenchimento do e-mail é obrigatório");
    }

    if (formulario.dicas.value == "") {
      formulario.email.focus();
      alert("O prenchimento de dicas é obrigatório");
    }
  });
};
