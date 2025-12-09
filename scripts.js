
const botaoAdicionar = document.getElementById("adicionar");
const tabelaBody = document.getElementById("tabela-body");
const selectTema = document.getElementById("tema");

botaoAdicionar.addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const outro = document.getElementById("outro").value.trim();

    if (!nome || !categoria || !outro) {
        alert("Preencha todos os campos!");
        return;
    }

    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    const tdCategoria = document.createElement("td");
    tdCategoria.textContent = categoria;
    tr.appendChild(tdCategoria);

    const tdOutro = document.createElement("td");
    tdOutro.textContent = outro;
    tr.appendChild(tdOutro);

    const tdAcoes = document.createElement("td");

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.className = "btn-concluir";

    btnConcluir.addEventListener("click", () => {
        tr.style.background = "#d4ffd4";
    });

    tdAcoes.appendChild(btnConcluir);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-excluir";

    btnExcluir.addEventListener("click", () => {
        tr.remove();
    });

    tdAcoes.appendChild(btnExcluir);

    
    tr.appendChild(tdAcoes);

    
    tabelaBody.appendChild(tr);

    
    alert("Item adicionado com sucesso!");
    
    document.getElementById("nome").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("outro").value = "";
});


selectTema.addEventListener("change", () => {
    document.body.className = "";
    const temaSelecionado = selectTema.value;

    if (temaSelecionado === "dark") {
        document.body.classList.add("dark");
    } else if (temaSelecionado === "colorido") {
        document.body.classList.add("colorido");
    }
});
