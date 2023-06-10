var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];
var inputEmail = document.querySelector('#email'); 
var sugestao = document.querySelector('#sugestao');

inputEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: inputEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains,
        suggested: function(suggestion) {
          sugestao.style.display = 'inline-block';
          sugestao.textContent = `Você quis dizer: ${suggestion.full} ?`;
          sugestao.parentNode.classList.add('contatoCampo--erro');
          inputEmail.classList.add('contatoCampo--validouErro');
          sugestao.setAttribute('tabindex','0');
          sugestao.setAttribute('role','alert');
        }
      });
});