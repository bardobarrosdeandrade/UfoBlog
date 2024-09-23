// // window.confirm(prompt("CADASTRE SEU EMAIL PRA RECEBER NOVIDADES, VOCÊ PODE CANCELAR QUANDO QUISER ;D"));
// // https://www.instagram.com/p/C3aPwf4gYu4/ css e htmL de nome e emaiL pra se inscrever, pode ser interessante botar no proprio bLog em vez de botar popUp
// https://www.instagram.com/p/C25SmG_tsI7/
// https://www.instagram.com/p/C3crAqnvSuu/
// https://www.instagram.com/p/C2fpXdyA2os/
// https://www.instagram.com/p/C2zl1qxNl9y/
// https://www.instagram.com/p/C3iIdVZIoBP/

// let visitCount = 0;

//     // Recuperar contagem do localStorage
//     if (localStorage.getItem('visitCount')) {
//       visitCount = parseInt(localStorage.getItem('visitCount'));
//     }

//     // Incrementar contagem
//     visitCount++;

//     // Atualizar HTML com nova contagem
//     document.getElementById('visit-count').textContent = visitCount;

//     // Salvar contagem atualizada no localStorage
//     localStorage.setItem('visitCount', visitCount);


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const postId = card.dataset.id;
        // Armazenar o ID do post em uma variável
        window.location.href = `post.html?id=${postId}`;
    });
});

// Função para atualizar o número de acessos (implementação depende do método de armazenamento)
function atualizarAcessos(postId) {
    // Recuperar o número de acessos do localStorage/banco de dados
    let acessos = 0; // Valor inicial

    // Incrementar o valor de acessos
    acessos++;

    // Armazenar o número de acessos atualizado (localStorage/banco de dados)
    // Atualizar o texto de acessos na página de visualização
}

// Na página de visualização do post:
