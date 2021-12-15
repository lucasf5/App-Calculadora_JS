function calcular (tipo, valor){
    if (tipo == 'valor'){
        document.getElementById('resultado').value += valor
    } else if (tipo == 'açao'){
        if (valor == 'c'){
            document.getElementById('resultado').value = ''
        }

        if (valor == '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }

        if (valor == '+' ||valor == '-' ||valor == '*' ||valor == '/' ||valor == '.'){
            document.getElementById('resultado').value += valor
        }
    }
}