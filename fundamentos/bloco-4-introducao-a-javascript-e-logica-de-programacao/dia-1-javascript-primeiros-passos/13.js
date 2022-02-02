const valorCusto = 200;
const valorVenda = 400;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('Erro!');
} else {
    console.log(valorVenda - (valorCusto * 1.2));
}