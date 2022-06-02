function validateForm(form) {
  var msg = "";
  if (form.getValue("nome") == "") {
    msg += "Campo nome não foi preenchido ";
  }
  if (form.getValue("telefone") == "") {
    msg += "Campo telefone não foi preenchido ";
  }
  if (form.getValue("cep") == "") {
    msg += "Campo cep não foi preenchido  ";
  }

  if (msg != "") {
    throw msg;
  }
}
