let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function salvar() {
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function mostrarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");
    li.textContent = `${contato.nome} - ${contato.telefone}`;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => {
      const novoNome = prompt("Novo nome:", contato.nome);
      const novoTelefone = prompt("Novo telefone:", contato.telefone);
      if (novoNome && novoTelefone) {
        contatos[index] = { nome: novoNome, telefone: novoTelefone };
        salvar();
        mostrarContatos();
      }
    };

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => {
      contatos.splice(index, 1);
      salvar();
      mostrarContatos();
    };

    li.appendChild(btnEditar);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

function adicionarContato() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if (nome !== "" && telefone !== "") {
    contatos.push({ nome, telefone });
    salvar();
    mostrarContatos();
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
  }
}

mostrarContatos();
