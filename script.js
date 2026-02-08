// Exemplo simples para animar o scroll ou exibir uma mensagem de boas-vindas no console
document.addEventListener('DOMContentLoaded', () => {
    console.log("Currículo de Rodrigo Silva carregado com sucesso!");
});

fetch('projetos.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#projects .container');
        data.forEach(projeto => {
            const card = `
                <div class="project-card">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <div class="tags">
                        ${projeto.tecnologias.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    ${projeto.link !== "#" ? `<a href="${projeto.link}" target="_blank" class="btn-project">Ver no GitHub</a>` : ''}
                </div>
            `;
            container.innerHTML += card;
        });
    });