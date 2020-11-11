function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

//Número Primo
$("#btnPrimo").click(function() {
    let valor = parseInt($("#inputPrimo").val());
    let contador=0;
    let x;
    for (x=1;x<=valor;x++) {   
        if (valor%x==0) {
            contador++;
        }
    }
    if (contador==2)
        $("#resultPrimo").val("O número "+valor+" É primo") 
    else 
        $("#resultPrimo").val("O número "+valor+" Não é primo");

});

//Somatório
$("#btnSoma").click(function() {
    let valor = parseInt($("#inputSoma").val());
    let somarotio=0;

    for (let x=1;x<=valor;x++) {   
        somarotio += parseInt(prompt("Digite o "+x+"° valor"));
    }
    $("#resultSoma").val(somarotio);

});

//Fibonacci
$("#btnFib").click(function() {
    let termo = parseInt($("#inputFib").val());
    let penultimo, ultimo = 1;
    let numero = 1;
    let string = 0;

    if (termo>0) {
        while(numero<=termo){
        
            string += ","+numero 
            penultimo = ultimo;
            ultimo += numero;
            numero = penultimo
            
        }
    
        $("#resultFib").val(string);
    } else {
        alert("Digite um valor maior que 0");
    }
    

});

//Máximo Divisor Comum
$("#btnMdc").click(function() {
    let a = parseInt($("#input1Mdc").val());
    let b = parseInt($("#input2Mdc").val());

    while (b !== 0) {
        var r = a % b;
        a = b;
        b = r;
    }
    $("#resultMdc").val(a);

});

//Ordenação de Array
$("#btnArr").click(function() {
    let qtd = parseInt($("#inputArr").val());
    let array = [];
    for (let i = 0; i < qtd; i++) {
        array.push(prompt("Digite o "+(i+1)+"° valor"));
    }
    $("#resultArr").val(array.sort(sortfunction));   
});
 
//Contagem
$("#btnCont").click(function() {
    let valor = parseInt($("#inputCont").val());
    let element = 0; 
    for (let i = 1; i <= valor; i++) {
        element = i;
    }

    $("#resultCont").val("Existe "+element+" número(s) entre 1 e "+valor+", incluindo o(s) mesmo(s)"); 
    element = 0; 
});