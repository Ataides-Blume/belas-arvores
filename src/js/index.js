const listaSelecaoArvore = document.querySelectorAll(".arvore");
listaSelecaoArvore.forEach((arvore) => {
  arvore.addEventListener("click", () => {
    const cartaoArvoreAberto = document.querySelector(".aberto");
    cartaoArvoreAberto.classList.remove("aberto");

    const idArvoreSelecionado = arvore.attributes.id.value;
    const idDoCartaoArvoreParaAbrir = "cartao-" + idArvoreSelecionado;
    const cartaoArvoreParaAbrir = document.getElementById(
      idDoCartaoArvoreParaAbrir
    );

    cartaoArvoreParaAbrir.classList.add("aberto");
    const arvoreAtivoNaListagem = document.querySelector(".ativo");
    arvoreAtivoNaListagem.classList.remove("ativo");
    const arvoreSelecionadoNaListagem =
      document.getElementById(idArvoreSelecionado);
    arvoreSelecionadoNaListagem.classList.add("ativo");
  });
});
