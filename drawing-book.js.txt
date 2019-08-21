function pageCount(n, p) {

    if (n % 2 != 0)
        n -= 1;

    if (p % 2 != 0)
        p -= 1;

    var qtdPags = n;
    var pag = p;
    var metadeDoLivro = Math.round(qtdPags / 2);
    var resposta = 0;

    if (metadeDoLivro % 2 != 0)
        metadeDoLivro -= 1;

    if (pag == 1 || pag == qtdPags)
        return 0;

    if (pag > metadeDoLivro) {
        resposta = (qtdPags - pag) / 2;
    }
    else
        resposta = pag / 2;

    return Math.round(resposta);

}