function saudacao(name){

    return ` oi  ${name}`
}
//se a funcao nao tiver o retorno nao retorna na variavel
const variavel = saudacao('Ed');
console.log(variavel)

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(10,5))

const raiz = (n) => {
    return n + 10;
}

console.log(raiz(3))