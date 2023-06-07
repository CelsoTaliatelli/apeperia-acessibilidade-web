// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var conteudoForadialog = document.querySelector('#conteudoForaDialog');

btnAbreDialog.style.display = "block";


// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForadialog.inert = true;
  document.querySelector('video').removeAttribute('controls'); 
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');   
  conteudoForadialog.inert = false;
  btnAbreDialog.focus();
  document.querySelector('video').setAttribute('controls', 'true');  
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);

document.addEventListener('keyup', function(evento){
  if(evento.keyCode === 27){
    fechandoDialog();
  }
})

dialogOverlay.addEventListener('click', function(){
  fechandoDialog();
})