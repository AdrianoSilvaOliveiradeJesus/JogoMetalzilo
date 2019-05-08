$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

  

  imagemOculos = document.getElementById('oculos')
  listaImagens = ["fotos/imagem.png","fotos/imagem2.png","fotos/imagem3.png","fotos/imagem4.png"]
  item = 0
  imagemOculos.src = listaImagens[item]
  
  function trocar(){
    if(item > listaImagens.length -2){
      item = 0
    }else{
      item += 1
    }
    imagemOculos.src = listaImagens[item]
  }
