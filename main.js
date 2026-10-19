const desafios = [
    "Resolver um problema lógico",
    "Criar diferentes soluções",
    "Aprender novas funções",
    "Descobrir padrões",
    "Pensar em uma nova invenção"
];

function iniciarDesafio() {

    // Pega o nome digitado no HTML
    const nome = document.getElementById("name").value;

    // Verifica se o aluno digitou o nome
    if (nome === "") {
        alert("Digite seu nome para começar!");
        return;
    }

    const numeros = Math.floor(Math.random() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resultado").innerHTML=`
        <h2> Olá ${nome}</h2>
        <h2> Seu Desafio é: </h2>
        <h3> ${desafio} </h3>

        <label for="resposta"> 
        Qual o seu projeto para desenvolver este desafio? 
        </label>

         <br><br>

         <textarea
        id= "resposta"
        rows = "5"
        cols = "40"
         placeholder = "Digite aqui sua resposta ..."
        ></textarea>

        <br><br>

        <button onclick="avaliarResposta()">
        Enviar a resposta.
        </button>
        `;
   
}

function avaliarResposta(){

    //Criar as constantes que preciso
    const nome = document.getElementById("name").value;
    const resposta = document.getElementById("resposta").value;
    const textoDesafio = document.querySelector("#resultado h3").innerText;


    if (resposta.trim() === "") {
        alert("Digite sua resposta para a avaliação!");
        return;
    }

    let pontos = 0;

// critérios avaliação
//Contagem de letras

    if (resposta.length >= 30){
        pontos += 30;
    }

//Incluir palavras chaves

    const texto = resposta.toLowerCase();

    if( texto.includes("criar")||
        texto.includes("desenvolver")||
        texto.includes("elaborar") ){
        pontos +=30;
    }

    if( texto.includes("pesquisa")||
        texto.includes("estudo")||
        texto.includes("projeto") ){
        pontos +=30;
    }

   const tempo = Math.floor(Math.random() * 10)+1;  

   let nivel;

   if(pontos >=90){
    nivel = "Inventor de idéias";
   }

   else if(pontos >=60){
    nivel = "Desenvolvedor de idéias";
   }

   else if(pontos >=30){
    nivel = "Explorador de idéias";
   }

  else{ 
    nivel = "Pesquisador iniciante";
   }

   //Relatóri final 

   document.getElementById("resultado").innerHTML =
   `<h2> Caminho das Habilidades - Relatório</h2>
   <p><strong> Participante: </strong> ${nome}</p>
   <p><strong> Desafio: </strong> ${textoDesafio}</p>
   <p><strong> Resposta: </strong> ${resposta}</p>
   <p><strong> Pontuação: </strong> ${pontos}</p>
   <p><strong> Nível: </strong> ${nivel}</p>
   <p> O tempo de espera para o retorno da avaliação é ${tempo} dia(s)</p>

${pontos >= 70
? "Parabéns, você conseguiu uma ótima pontuação, continue assim!"
: "Contiunue pesquisando e desenvolvendo novos projetos, você conseguirá na próxima!"

}

    <button onclick="location.reload()">
        Novo desafio!
    </button>
   `
}
