
function fnejecutar(operacion){
    var resultado;
    var operaciones = document.getElementById('operacion').value;   
    

switch(operaciones){
    case "sumar":
    function fsuma(numero1, numero2){       
        resultSuma = parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value);
        return document.getElementById('resultado').value = resultado;
    }break;

    case "restar":
    function frestar(numero1, numero2){        
        resultResta = parseInt(document.getElementById('num1').value) - parseInt(document.getElementById('num2').value);
        return document.getElementById('resultado').value = resultado;
    }break;

    case "multiplicar":
    function fmultiplicar(numero1, numero2){       
        resultado = parseInt(document.getElementById('num1').value) * parseInt(document.getElementById('num2').value);
        return document.getElementById('resultado').value = resultado;
    }break;

    case "dividir":
    function fdividir(numero1, numero2){       
        resultado = parseInt(document.getElementById('num1').value) / parseInt(document.getElementById('num2').value);
        return document.getElementById('resultado').value = resultado;
    }break;
    
}
}
