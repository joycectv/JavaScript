var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

function addTodo() {
    var todoText = inputElement.value;
    
    axios.get(`https://api.github.com/users/${todoText}/repos`)
    .then(function(response) {
        for (repository of response.data) {
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(repository.name);

            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
            console.log(repository);
        }
    })
    .catch(function(error) {
        alert ('Usuário Inexistente.');
    });

}
