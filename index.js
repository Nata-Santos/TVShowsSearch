const handleSearch = async (event) => {
  event.preventDefault();


  const listaDeProgramas = document.querySelector('#shows');
  listaDeProgramas.innerHTML = '';


  const busca = document.querySelector('#query');
  const textoAserBuscado = busca.value;


  const url = `https://api.tvmaze.com/search/shows?q=${textoAserBuscado}`;


  const resposta = await fetch(url);
  const programas = await resposta.json();


  if (programas.length === 0) {
    message.innerHTML = 'nenhum resultado encontrado';
    return;
  }

  message.innerHTML = '';

  programas.forEach((programa) => {
    const titulo = programa?.show?.name || '';
    const imagem = programa?.show?.image?.medium || '';



    listaDeProgramas.insertAdjacentHTML(
      'beforeend',
      `
    <li>
    <img class="poster" src="${imagem}">
    <span class="show-name">${titulo}</span>
    </li>
    `
    );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});