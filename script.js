// // window.confirm(prompt("CADASTRE SEU EMAIL PRA RECEBER NOVIDADES, VOCÊ PODE CANCELAR QUANDO QUISER ;D"));
// // https://www.instagram.com/p/C3aPwf4gYu4/ css e htmL de nome e emaiL pra se inscrever, pode ser interessante botar no proprio bLog em vez de botar popUp
// https://www.instagram.com/p/C25SmG_tsI7/
// https://www.instagram.com/p/C3crAqnvSuu/
// https://www.instagram.com/p/C2fpXdyA2os/
// https://www.instagram.com/p/C2zl1qxNl9y/
// https://www.instagram.com/p/C3iIdVZIoBP/



// Obtém os elementos HTML
        const contadorElemento = document.getElementById('contador');
        const ultimaVisitaElemento = document.getElementById('ultimaVisita');

        // Obtém o valor do contador e da data do localStorage ou inicializa
        let contador = localStorage.getItem('contador') || 0;
        let ultimaVisita = localStorage.getItem('ultimaVisita');

        // Incrementa o contador e atualiza a data
        contador++;
        ultimaVisita = new Date().toLocaleDateString();

        // Atualiza os elementos na página e no localStorage
        contadorElemento.textContent = contador;
        ultimaVisitaElemento.textContent = ultimaVisita;
        localStorage.setItem('contador', contador);
        localStorage.setItem('ultimaVisita', ultimaVisita);


        

        // funções da radio do site
        const audio = document.getElementById('myAudio');

        function playPause() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }

        /* pegar a bi|ioteca nesses site que vai ser essa framework q vai servir pra fazer a radio https://github.com/goldfire/howler.js 
        https://howlerjs.com/
        https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
        */