/*Array vazia onde serão quardados os nomes
amigos que seram sorteados*/
let dados = [];

//função para adicionar os nomes
function add() {
    let amigo = document.createElement('p');
    let tela = document.getElementById("tela");
    
    let nome = document.getElementById('nome').value;
    for (let i = 0; i <= dados.length; i++) {
        if (dados.includes(nome)) {
            window.alert('O nome ja foi adicionado. Digite outro nome.');
            break;            
        }else {
            dados.push(nome);
            amigo.id = nome;
            amigo.append(nome);
            tela.append(amigo);
            document.getElementById('nome').value = "";
            break;
        }
    }
}

function sortear() {
    let numero = 0;
    for (let i = 0; i <= dados.length; i++) {
        numero++;
    }
    
    let amigoSorteado = dados[Math.floor(Math.random() * numero)];
    window.alert("O amigo sorteado foi: " + amigoSorteado);
    window.location.reload();
    
}


