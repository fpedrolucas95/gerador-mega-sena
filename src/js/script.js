function gerarChave() {
    var dezenas = [53, 10, 05, 33, 37, 23, 42, 30, 04, 41, 44, 38, 34, 28, 17, 54, 32, 27, 35, 56, 43, 29, 51, 16, 11, 49, 36, 08, 02, 24, 13, 52, 46, 06, 45, 20, 58, 25, 18, 01, 12, 50, 19, 57, 59, 39, 47, 40, 14, 60, 09, 03, 07, 31, 48, 22, 15, 55, 21, 26];
    var chave = [];
    var linhasSelecionadas = { 1: [], 2: [], 3: [], 4: [] };
    var quadrantes = { 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 3: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], 4: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60] };
    var quadranteSelecionado;
    var dezenasDisponiveis;
    var index;
    var dezena;
    var grau;

    while (chave.length < 6) {
        // Seleciona um quadrante aleatoriamente
        quadranteSelecionado = Math.floor(Math.random() * 4) + 1;
        // Seleciona as dezenas disponíveis no quadrante
        dezenasDisponiveis = quadrantes[quadranteSelecionado].filter(d => !chave.includes(d) && !linhasSelecionadas[Math.ceil(d / 15)].includes(d));
        // Se não houver dezenas disponíveis no quadrante, seleciona dezenas disponíveis em qualquer lugar
        if (dezenasDisponiveis.length == 0) {
            dezenasDisponiveis = dezenas.filter(d => !chave.includes(d) && !linhasSelecionadas[Math.ceil(d / 15)].includes(d));
        }
        // Seleciona uma dezena aleatoriamente entre as disponíveis
        index = Math.floor(Math.random() * dezenasDisponiveis.length);
        dezena = dezenasDisponiveis[index];
        // Adiciona a dezena à chave
        chave.push(dezena);
        // Remove a dezena das disponíveis do quadrante
        quadrantes[quadranteSelecionado] = quadrantes[quadranteSelecionado].filter(d => d != dezena);
        // Adiciona a dezena à lista de dezenas selecionadas da linha
        linhasSelecionadas[Math.ceil(dezena / 15)].push(dezena);
    }
    // Ordena a chave em ordem crescente
    chave.sort(function (a, b) { return a - b });
    // Calcula o grau da chave
    grau = calcularGrau(chave);
    // Exibe a chave gerada na tela
    document.getElementById("chaveGerada").innerHTML = chave.join(" - ");
}

function calcularGrau(chave) {
    // Cria um objeto com as frequências de cada dezena na chave
    var frequencias = {};
    for (var i = 0; i < chave.length; i++) {
        if (frequencias[chave[i]]) {
            frequencias[chave[i]] += 1;
        } else {
            frequencias[chave[i]] = 1;
        }
    }
}
