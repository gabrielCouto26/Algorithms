function kangaroo(x1, v1, x2, v2) {

    let posicao1 = x1;
    let posicao2 = x2;
    let velocidade1 = v1;
    let velocidade2 = v2;
    let mesmaPosicao = false;

    for (let pulo = 0; pulo < 10000; pulo++){

        posicao1 += velocidade1;
        posicao2 += velocidade2;

        if (posicao1 == posicao2) mesmaPosicao = true;     

    }
    return (mesmaPosicao)?"YES":"NO";
}