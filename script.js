
botaoAdicionar = document.querySelector("#botao");


botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector("#formPessoa");
    var pessoa = queryForm(form);
    var idade = calculaIdade(pessoa);
    writeTable(pessoa, idade);
    
    
    

});

function queryForm(form){
    var pessoa = 
    {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        data: form.data.value,
    }
    return pessoa;
}

function writeTable(pessoa){

    var tableName = document.querySelector("#tNome");
    var tableIdade = document.querySelector("#tIdade");
    var tableIFCM = document.querySelector("#tIFCM");
    var tableFFCA = document.querySelector("#tFFCA");

    var fMax = 220-idade;
    var aMim = Math.round(fMax*0.5);
    var aMax = Math.round(fMax*0.85);

    tableName.textContent = pessoa.nome + " " + pessoa.sobrenome;
    tableIdade.textContent = idade;
    tableIFCM.textContent = fMax;
    tableFFCA.textContent = aMim + " " + "-" + " " + aMax 
    
}

function calculaIdade(pessoa){

    var currentDate = new Date();
    currentDay = currentDate.getDate();
    currentMonth = currentDate.getMonth() + 1;
    currentYear = currentDate.getFullYear();

    inputDay = pessoa.data.slice(-2)
    inputMonth = pessoa.data.slice(5, -3)
    inputYear = pessoa.data.slice(0, -6)

    
    var cDay = parseInt(currentDay);
    var cMonth =parseInt(currentMonth);
    var cYear = parseInt(currentYear);

    var iDay = parseInt(inputDay);
    var iMonth = parseInt(inputMonth);
    var iYear = parseInt(inputYear);

    var gambiarra1 = cDay + (cMonth*12) + (cYear*365) 
    var gambiarra2 = iDay + (iMonth*12) + (iYear*365) 

    idade = Math.floor((gambiarra1 - gambiarra2)/365)
    
    return idade;
}