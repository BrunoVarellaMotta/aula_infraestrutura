let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function isLista(n, l){ //pega os valores digitados no método adicionar e verifica se o valor está na lista
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    } 
}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adiciones os valores primeiro.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = 'Respostas:'
        res.innerHTML += `<p>1- Ao todo, temos ${tot} número cadastrados.</p>`
        res.innerHTML += `<p>2- O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>3- O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>4- Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>5- A média dos valores digitados é ${media.toFixed(0)}.</p>`
    }
}