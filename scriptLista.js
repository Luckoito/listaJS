document.getElementById("appendButton").addEventListener("click",appendLine);
document.getElementById("createList").addEventListener("click",newList);
document.getElementById("resetList").addEventListener("click",restartList);
document.getElementById("listTypeSelect").addEventListener("change",selectedListType);

function appendLine() {

    if (document.getElementById("listLine").style.backgroundColor = "rgb(141, 0, 0)") {
        document.getElementById("listLine").style.backgroundColor = "transparent";
    }
    if (document.getElementById("errorMessage").innerHTML = "O item não pode estar em branco!") {
        document.getElementById("errorMessage").innerHTML = "";
    }

    if (document.getElementById("listLine").value.trim().length === 0) {

        document.getElementById("listLine").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("errorMessage").innerHTML = "O item não pode estar em branco!";
        document.getElementById("errorMessage").style.color = "rgb(141, 0, 0)";

    } else {

        let nodeLi = document.createElement("li");
        let nodeText = document.createTextNode(document.getElementById("listLine").value);
        let listNameSelected = document.getElementById("listName").innerHTML;


        if (listNameSelected == "Compras" || listNameSelected == "Tarefas") {

            let nodeInput = document.createElement("input");
            let nodeInputLabel = document.createElement("label");

            nodeInput.type = "checkbox";
            nodeInput.className = "listCheckbox"; 
            nodeInput.name = nodeText.textContent;

            nodeInputLabel.htmlFor = nodeText.textContent;
            nodeInputLabel.innerHTML = nodeText.textContent;

            nodeLi.id = nodeText.textContent;

            nodeLi.appendChild(nodeInput);
            nodeLi.appendChild(nodeInputLabel);

        } else {

            nodeLi.id = nodeText.textContent;
            nodeLi.appendChild(nodeText);

        }

        document.getElementById("list").appendChild(nodeLi); 

        let cor = document.querySelector('input[name="colorSelectRadio"]:checked').value;
        document.getElementById(nodeText.textContent).style.color = cor;

        document.getElementById("listLine").value = "";

    }

}

function newList () {

    if (document.getElementById("listTypeSelect").style.backgroundColor !== "transparent"){
        document.getElementById("listTypeSelect").style.backgroundColor = "transparent";
    }
    if (document.getElementById("inputListName").style.backgroundColor !== "transparent") {
        document.getElementById("inputListName").style.backgroundColor = "transparent";
    }
    if (document.getElementById("invalidList").innerHTML !== "") {
        document.getElementById("invalidList").innerHTML = "";
    }

    if (document.getElementById("inputListName").value.trim().length === 0 && document.getElementById("inputListName").style.display == "block") {

        document.getElementById("inputListName").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("invalidList").innerHTML = "Digite um nome para a lista!";
        document.getElementById("invalidList").style.color = "rgb(141, 0, 0)";

    } else if (document.getElementById("listTypeSelect").options[document.getElementById("listTypeSelect").selectedIndex].text == "Tipo de lista") {

        document.getElementById("listTypeSelect").style.backgroundColor = "rgb(141, 0, 0)";
        document.getElementById("invalidList").innerHTML = "Escolha o tipo de lista que deseja criar!";
        document.getElementById("invalidList").style.color = "rgb(141, 0, 0)";

    } else {

        document.getElementById("listCreateBlock").style.display = "none";
        document.getElementById("listBlock").style.display = "flex";

        let listType = document.getElementById("listTypeSelect");
    
        if (listType.options[listType.selectedIndex].text == "Compras") {
    
            document.getElementById("listName").innerHTML = "Compras";

           } else if (listType.options[listType.selectedIndex].text == "Tarefas") {
    
            document.getElementById("listName").innerHTML = "Tarefas";

           } else {

            document.getElementById("listName").innerHTML = document.getElementById("inputListName").value;
            document.getElementById("inputListName").value = "";

        }
    }

}

function selectedListType () {

    let listType = document.getElementById("listTypeSelect");

    if (listType.options[listType.selectedIndex].text == "Personalizada") {
    
        document.getElementById("inputListName").style.display = "block";
    
    } else if (listType.options[listType.selectedIndex].text == "Compras") {
    
        document.getElementById("inputListName").style.display = "none";
    
    } else if (listType.options[listType.selectedIndex].text == "Tarefas") {
        
        document.getElementById("inputListName").style.display = "none";
    
    }

}

function restartList () {

    document.getElementById("listName").innerHTML = "";
    document.getElementById("list").innerHTML = "";
    document.getElementById("listCreateBlock").style.display = "flex";
    document.getElementById("listBlock").style.display = "none";

}