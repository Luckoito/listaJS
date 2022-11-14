let arrayAlunos = [];
let counterAlunos = 0;

function insertAluno () {

    if (document.getElementById("alunoIn").value.trim().length === 0) {

        alert ("O nome não pode estar em branco. Digite um nome para o aluno!");

    } else {

      let nome = document.getElementById("alunoIn").value;

        counterAlunos++;
        arrayAlunos [counterAlunos] = {nome: nome, id: counterAlunos, media: 0, situacao: "N/A"};

        if (document.getElementById("alunosInseridos").innerHTML == '<span class="placeholderText">Insira alunos abaixo!</span>') {

        document.getElementById("alunosInseridos").innerHTML =
        '<div class="cabecalhoAlunos">' +
            '<p class="cabecalhoID">ID</p>' +
            '<p class="cabecalhoNome">Nome</p>' +
            '<p class="cabecalhoMedia">Média</p>' +
            '<p class="cabecalhoSitu">Situação</p>' +
        '</div>' +
        '<div class="alunoLine" id="alunoLine' + counterAlunos +'">' +
        '<p class="alunoID" id="IDaluno' + counterAlunos + '">' + arrayAlunos [counterAlunos].id + '</p>' + 
        '<p class="alunoNome" id="NomeAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].nome + '</p>' + 
        '<p class="alunoMedia" id="MediaAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].media + '</p>' + 
        '<p class="alunoSitu" id="SituAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].situacao + '</p>' + 
        '</div>' ;

        } else {

        document.getElementById("alunosInseridos").innerHTML +=
        '<div class="alunoLine" id="alunoLine' + counterAlunos +'">' +
        '<p class="alunoID" id="IDaluno' + counterAlunos + '">' + arrayAlunos [counterAlunos].id + '</p>' + 
        '<p class="alunoNome" id="NomeAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].nome + '</p>' + 
        '<p class="alunoMedia" id="MediaAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].media + '</p>' + 
        '<p class="alunoSitu" id="SituAluno' + counterAlunos + '">' +  arrayAlunos [counterAlunos].situacao + '</p>' +
        '</div>' ;

        }
    }

    document.getElementById("alunoIn").value = "";
    
    return arrayAlunos, counterAlunos;
}

function removeAluno () {

    let id = document.getElementById("alunoOut").value;

    if (!document.getElementById("alunoLine"+id)) {

        alert ("Nenhum aluno com este ID foi encontrado!");

    } else {

    document.getElementById("alunoLine"+id).remove();

    arrayAlunos [id] = "";

    if (document.getElementById("alunosInseridos").innerHTML == "") {

        document.getElementById("alunosInseridos").innerHTML = '<span class="placeholderText">Insira alunos abaixo!</span>';

    }

    document.getElementById("alunoOut").value = "";

    return arrayAlunos;

    }

}

function calculateMedia() {

    let id = document.getElementById("alunoMedia").value;

    if (!document.getElementById("alunoLine"+id)) {

        document.getElementById("alunoMedia").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite um ID válido!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else if (document.getElementById("nota1").value.trim().length === 0 || isNaN(document.getElementById("nota1").value)){

        if (document.getElementById("alunoMedia").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("alunoMedia").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite um ID válido!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

        document.getElementById("nota1").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite uma nota válida!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else if (document.getElementById("nota2").value.trim().length === 0 || isNaN(document.getElementById("nota2").value)){

        if (document.getElementById("alunoMedia").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("alunoMedia").style.backgroundColor = "transparent";
        }

        if (document.getElementById("nota1").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("nota1").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite um ID válido!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

        document.getElementById("nota2").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite uma nota válida!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else {

        if (document.getElementById("alunoMedia").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("alunoMedia").style.backgroundColor = "transparent";
        }

        if (document.getElementById("nota1").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("nota1").style.backgroundColor = "transparent";
        }

        if (document.getElementById("nota2").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("nota2").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite um ID válido!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);

        let media = (nota1  + nota2) / 2;
    
        arrayAlunos[id].media = media;

        document.getElementById("MediaAluno"+id).innerHTML = arrayAlunos[id].media;
        document.getElementById("alunoMedia").style.backgroundColor = "transparent";
        document.getElementById("nota1").style.backgroundColor = "transparent";
        document.getElementById("nota2").style.backgroundColor = "transparent";

        if (arrayAlunos[id].media >= 6) {

            let cor = "green";
            document.getElementById("SituAluno"+id).innerHTML = "AP";
            document.getElementById("SituAluno"+id).style.color = cor;
            document.getElementById("MediaAluno"+id).style.color = cor;

        } else if (arrayAlunos[id].media >= 2) {

            let cor = "orange";
            document.getElementById("SituAluno"+id).innerHTML = "EF";
            document.getElementById("SituAluno"+id).style.color = cor;
            document.getElementById("MediaAluno"+id).style.color = cor;

        } else {
            
            let cor = "red";
            document.getElementById("SituAluno"+id).innerHTML = "RP";
            document.getElementById("SituAluno"+id).style.color = cor;
            document.getElementById("MediaAluno"+id).style.color = cor;

        }

        document.getElementById("alunoMedia").value = "";
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";

    return arrayAlunos;

    }

}