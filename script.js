/*a) Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior.
Exemplo:
Número: 15
Vizinhos: 14 e 16*/
function Gerar() {
    let num1 = document.getElementById('txtnum1')
    let res = document.getElementById('res')

    if (num1.value <= 0) {
        window.alert('[ERRO] Número invalido, tente novamente.')
    } else {
        let num2 = 0
        let num3 = 0
        num2 = Number(num1.value)-1
        num3 = Number(num1.value)+1
        res.innerHTML = `O numero é: ${num1.value}, os números vizinhos são ${num2} e ${num3}<br>`
        res.innerHTML += `Números em orderm: ${num2}, ${num1.value}, ${num3}`
    }
}