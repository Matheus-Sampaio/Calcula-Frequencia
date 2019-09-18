var botaoAdicionar = document.querySelector("#botao");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector(".formPessoa");
    var pessoa = obtemPacienteDoFormulario(form);
});

