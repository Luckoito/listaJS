function calculateIMC () {

    if (document.getElementById("pessoaNome").style.backgroundColor = "rgb(141, 0, 0)") {
        document.getElementById("pessoaNome").style.backgroundColor = "transparent";
    }

    if (document.getElementById("peso").style.backgroundColor = "rgb(141, 0, 0)") {
        document.getElementById("peso").style.backgroundColor = "transparent";
    }

    if (document.getElementById("altura").style.backgroundColor = "rgb(141, 0, 0)") {
        document.getElementById("altura").style.backgroundColor = "transparent";
    }

    if (document.getElementById("errorMessage").innerHTML = "Digite uma altura válida!") {
        document.getElementById("errorMessage").innerHTML = "";
    }

    if (document.getElementById("pessoaNome").value.trim().length === 0) {

        document.getElementById("pessoaNome").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite um nome!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else if (document.getElementById("peso").value.trim().length === 0 || isNaN(document.getElementById("peso").value)){

        if (document.getElementById("pessoaNome").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("pessoaNome").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite um nome!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

        document.getElementById("peso").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite um peso válido!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else if (document.getElementById("altura").value.trim().length === 0 || isNaN(document.getElementById("altura").value)){

        if (document.getElementById("pessoaNome").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("pessoaNome").style.backgroundColor = "transparent";
        }

        if (document.getElementById("peso").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("peso").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite um peso válido!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

        document.getElementById("altura").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "Digite uma altura válida!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else {

        if (document.getElementById("pessoaNome").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("pessoaNome").style.backgroundColor = "transparent";
        }

        if (document.getElementById("peso").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("peso").style.backgroundColor = "transparent";
        }

        if (document.getElementById("altura").style.backgroundColor = "rgb(141, 0, 0)") {
            document.getElementById("altura").style.backgroundColor = "transparent";
        }

        if (document.getElementById("errorMessage").innerHTML = "Digite uma altura válida!") {
            document.getElementById("errorMessage").innerHTML = "";
        }

    let nome = document.getElementById("pessoaNome").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    document.getElementById("IMCTitle").innerHTML = nome;
    document.getElementById("IMCSubTitle").style.display = "block";
    document.getElementById("IMCResult").innerHTML =  imc.toFixed(2);
    document.getElementById("IMCInput").style.display = "none";
    document.getElementById("Resultado").style.display = "block";
    

    if (imc <= 16.99){

        document.getElementById("sentenceStart").innerHTML = "Cuidado!";
        document.getElementById("sentenceSituacao").innerHTML = "muito abaixo do peso!";
        document.getElementById("IMCResult").style.color = "Red";
        document.getElementById("sentenceSituacao").style.color = "Red";

    } else if (17 <= imc && imc <= 18.49){

        document.getElementById("sentenceStart").innerHTML = "Atenção!";
        document.getElementById("sentenceSituacao").innerHTML = "abaixo do peso!";
        document.getElementById("IMCResult").style.color = "Yellow";
        document.getElementById("sentenceSituacao").style.color = "Yellow";

    } else if (18.50 <= imc && imc <= 24.99){

        document.getElementById("sentenceStart").innerHTML = "Muito bem!";
        document.getElementById("sentenceSituacao").innerHTML = "com o peso ideal!";
        document.getElementById("IMCResult").style.color = "Green";
        document.getElementById("sentenceSituacao").style.color = "Green";

    } else if (25 <= imc && imc <= 29.99) {

        document.getElementById("sentenceStart").innerHTML = "Atenção!";
        document.getElementById("sentenceSituacao").innerHTML = "acima do peso!";
        document.getElementById("IMCResult").style.color = "Yellow";
        document.getElementById("sentenceSituacao").style.color = "Yellow";

    } else if (30 <= imc && imc <= 34.99) {

        document.getElementById("sentenceStart").innerHTML = "Cuidado!";
        document.getElementById("sentenceSituacao").innerHTML = "muito acima do peso! - Obesidade I";
        document.getElementById("IMCResult").style.color = "Red";
        document.getElementById("sentenceSituacao").style.color = "Red";
        

    } else if (35 <= imc && imc <= 39.99) {

        document.getElementById("sentenceStart").innerHTML = "Cuidado!";
        document.getElementById("sentenceSituacao").innerHTML = "muito acima do peso! - Obesidade Severa";
        document.getElementById("IMCResult").style.color = "Red";
        document.getElementById("sentenceSituacao").style.color = "Red";

    } else if (40 <= imc) {

        document.getElementById("sentenceStart").innerHTML = "Cuidado!";
        document.getElementById("sentenceSituacao").innerHTML = "muito acima do peso! - Obesidade Mórbida";
        document.getElementById("IMCResult").style.color = "Red";
        document.getElementById("sentenceSituacao").style.color = "Red";

    }

    }

}

function resetIMC () {

    document.getElementById("IMCInput").style.display = "flex";
    document.getElementById("Resultado").style.display = "none";
    document.getElementById("IMCTitle").innerHTML = "Calcular";
    document.getElementById("IMCSubTitle").style.display = "none";

}