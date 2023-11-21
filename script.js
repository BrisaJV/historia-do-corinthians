// Aqui você pode adicionar lógica para buscar e exibir notícias e jogos
// Por exemplo, você pode usar a API de notícias esportivas ou fornecer dados estáticos

// Vou adicionar um exemplo simples aqui

const newsContainer = document.getElementById('news');
const upcomingGamesContainer = document.getElementById('upcoming-games');

// Exemplo de notícias fictícias
const newsData = [
    { title: 'Nova contratação para o time', content: 'O time anunciou a contratação de um novo jogador para a próxima temporada.' },
    { title: 'Resultados do último jogo', content: 'O time venceu o último jogo com uma pontuação de 3-1.' },
];

// Exemplo de próximos jogos fictícios
const upcomingGamesData = [
    { teams: 'Time A vs. Time B', date: '15 de fevereiro de 2023' },
    { teams: 'Time C vs. Time D', date: '20 de fevereiro de 2023' },
];

// Função para exibir notícias
function displayNews() {
    newsData.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
}

// Função para exibir próximos jogos
function displayUpcomingGames() {
    upcomingGamesData.forEach(item => {
        const gameItem = document.createElement('div');
        gameItem.innerHTML = `<h3>${item.teams}</h3><p>Data: ${item.date}</p>`;
        upcomingGamesContainer.appendChild(gameItem);
    });
}

// Chamando as funções para exibir os dados
displayNews();
displayUpcomingGames();
