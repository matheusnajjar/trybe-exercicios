const peca = 'PEÃO';
const minus = peca.toLowerCase();

if (minus == 'rei') {
    console.log('O rei pode mover-se em todas as direções somente uma casa de cada vez.');
} else if (minus == 'rainha' || minus == 'dama') {
    console.log('A rainha, ou dama, move-se ao longo da horizontal, vertical e diagonais.');
} else if (minus == 'bispo') {
    console.log('O bispo move-se ao longo da diagonal.');
} else if (minus == 'cavalo') {
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
} else if (minus == 'torre') {
    console.log('A torre movimenta-se pela vertical ou horizontal.');
} else if (minus == 'peão') {
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
} else {
    console.log('Erro! Peça inválida')
}