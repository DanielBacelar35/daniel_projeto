const botaoAdicionar = document.getElementById("adicionar");
const tabelaBody = document.getElementById("tabela-body");
const selectTema = document.getElementById("tema");

botaoAdicionar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const outro = document.getElementById("outro").value.trim();

    // Validação simples
    if (!nome || !categoria || !outro) {
        alert("Preencha todos os campos!");
        return;
    }

    // Criar linha
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${categoria}</td>
        <td>${outro}</td>
        <td>
            <button class="btn-concluir">Concluir</button>
            <button class="btn-excluir">Excluir</button>
        </td>
    `;

    // Evento concluir
    tr.querySelector(".btn-concluir").addEventListener("click", () => {
        tr.style.background = "#d4ffd4";
    });

    // Evento excluir
    tr.querySelector(".btn-excluir").addEventListener("click", () => {
        tr.remove();
    });

    tabelaBody.appendChild(tr);

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("outro").value = "";
});

// Troca de tema
selectTema.addEventListener("change", () => {
    document.body.className = "";
    const temaSelecionado = selectTema.value;

    if (temaSelecionado === "dark") {
        document.body.classList.add("dark");
    } else if (temaSelecionado === "colorido") {
        document.body.classList.add("colorido");
    }
});
