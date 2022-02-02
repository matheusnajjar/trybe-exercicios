const salarioBruto = 3000;
let inss = 0;
let aliquota = 0;
let parcela = 0;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto - salarioBruto * 0.11;
} else {
    inss = salarioBruto - 570;
}

if (inss <= 1903.98) {
    console.log(`Salário líquido: ${inss}R$`);
} else if (inss <= 2826.65) {
    aliquota = 0.075;
    parcela = 142.8;
    console.log(`Salário líquido: ${inss - (inss * aliquota - parcela)}R$`)
} else if (inss <= 3751.05) {
    aliquota = 0.15;
    parcela = 354.8;
    console.log(`Salário líquido: ${inss - (inss * aliquota - parcela)}R$`)
} else if (inss <= 4664.68) {
    aliquota = 0.225;
    parcela = 636.13;
    console.log(`Salário líquido: ${inss - (inss * aliquota - parcela)}R$`)
} else {
    aliquota = 0.275;
    parcela = 869.36;
    console.log(`Salário líquido: ${inss - (inss * aliquota - parcela)}R$`)
}