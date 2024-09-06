function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log (section);
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (campoPesquisa == ""){
        
        section.innerHTML = "<p>Insira o nome do atleta </p>"
        return
    }

    campoPesquisa = campoPesquisa. toLowerCase ()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase () 

       //cria um novo elemento
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes (campoPesquisa)){
            
            resultados +=  `
            <div class="item-resultado">
                  <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                 <a href= ${dado.link} target="_blank">Mais informações</a>
            </div>
            ` ;
        }
        console.log (dado.titulo.includes("campoPesquisa"))
        
        
    }
    
    if (!resultados ) {
        resultados = "<p>Nada foi encontrado!</p>"
    }


    section.innerHTML = resultados


}
//console.log(dados);

