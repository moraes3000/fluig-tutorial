$("#cep").blur(function () {
  $.getJSON(
    "//viacep.com.br/ws/" + $("#cep").val() + "/json/",
    function (dados) {
      $("#logradouro").val(dados.logradouro);
      $("#estado").val(dados.uf);
      $("#bairro").val(dados.bairro);
      $("#cidade").val(dados.localidade);
      console.log(dados.logradouro);
    }
  );
});
