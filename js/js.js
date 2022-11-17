let botao = document.querySelector('.adiciona-dados__submit');
let lista = document.querySelector('tbody');
let form = document.querySelector('form');

botao.addEventListener('click', function (event) {
    event.preventDefault()

    nome = form[0].value
    data = form[1].value
    prio = form[2].value

    let novaTarefa = document.createElement('tr');

    let nomeTd = document.createElement('td');
    let dataTd = document.createElement('td');
    let prioTd = document.createElement('td');

    novaTarefa.appendChild(nomeTd);
    novaTarefa.appendChild(dataTd);
    novaTarefa.appendChild(prioTd);

    lista.appendChild(novaTarefa);

    nomeTd.textContent=nome
    dataTd.textContent=data
    prioTd.textContent=prio

}
)