
			var div = document.getElementById('log');
			var textos = ['I Want', 'Eu Quero', 'Yo Quiero', 'Je Veux', '我想要'];

			function escrever(str, done) {
				var char = str.split('').reverse();
				var typer = setInterval(function() {
					if (!char.length) {
						clearInterval(typer);
						return setTimeout(done, 500); // só para esperar um bocadinho
					}
					var next = char.pop();
					div.innerHTML += next;
				}, 100);
			}

			function limpar(done) {
				var char = div.innerHTML;
				var nr = char.length;
				var typer = setInterval(function() {
					if (nr-- == 0) {
						clearInterval(typer);
						return done();
					}
					div.innerHTML = char.slice(0, nr);
				}, 100);
			}

			function rodape(conteudos, el) {
				var atual = -1;
				function prox(cb){
					if (atual < conteudos.length - 1) atual++;
					else atual = 0;
					var str = conteudos[atual];
					escrever(str, function(){
						limpar(prox);
					});
				}
				prox(prox);
			}
			rodape(textos);
			
			
			function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
/*
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
*/
  function updateClock() {
    var t = getTimeRemaining(endtime);
	var faltam =  t.days + ":" + ('0' + t.hours).slice(-2)+ ":" + ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
    document.getElementById('contador').innerHTML = faltam;
	/*daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
*/
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 18 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
