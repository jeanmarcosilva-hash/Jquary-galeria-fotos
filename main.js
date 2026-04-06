
$('header button').click(function(){
   $('form').slideDown();
});

$('#btn-cancelar').click(function(){
   $('form').slideUp();
})

$('form').on('submit', function(e){
   e.preventDefault();
   const endereçoDaNovaImagen = $('endereço-imagen-nova').val();
   const novoItem = $('<li style ="display: none"></li>');
   $(`<img src ="${endereçoDaNovaImagen}"/>`).appendTo(novoItem);
   $(`<div class ="overlay-imagen-link">
      <a href="${endereçoDaNovaImagen}" title="Ver imagen em Tamanho Real" target="_blank">Ver imagen em tamanho Real</a>
      </a>
   </div>
   `).appendTo(novoItem);
   $(novoItem).appendTo('ul');
   $(novoItem).fadeIn(1000);
   $('#endereço-imagen-nova').val('');
})
