/* Array que vai armazenar os objetos (base de daos local)*/
const data = [];

/* Adiciona um ouvinte de evento de submissão ao formulário*/
document.getElementById('developerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    /* Captura os valores dos campos do formulário*/
    const name = document.getElementById('name').value; /* Pega o valor do campo "nome"*/
    const developerType = document.getElementById('developer-type').value; /* Pega o valor do select "Tipo de Desenvolvedor"*/
    const details = document.getElementById('details').value; /*Pega o valor do campo "detalhes"*/

    /* Cria um novo objeto com os dados*/
    const developerData = {
        name: name,
        developerType: developerType,
        details: details
    };

    /* Adiciona o objeto ao array (base de dados)*/
    data.push(developerData);

    /* Cria um novo elemento div para exibir o resultado*/
    const resultsDiv = document.createElement('div'); /* Cria uma nova div*/
    resultsDiv.classList.add('result'); /* Adiciona a classe 'result' a div*/
    resultsDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>Nome: ${name}</p>
        <p>Tipo de Desenvolvedor: ${developerType}</p>
        <p>Detalhes: ${details}</p>
    `;/* Preenche uma nova div com os dados submetidos*/

    /* Adiciona o novo resultado ao container de resultados*/
    document.getElementById('resultsContainer').appendChild(resultsDiv); /* Adiciona a nova div ao container de resultados*/

    /* Limpa os campos do formulário após o envio*/
    document.getElementById('developerForm').reset(); /* Reseta o formulário (limpa os campos)*/

});
