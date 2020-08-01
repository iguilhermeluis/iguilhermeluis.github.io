var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

function toggleCheck(seriesChart, isGlobal, filter, valueSearch, checkId, uncheckId, colorSearch) {
  document.getElementById(checkId).addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
    
        if(isGlobal){
          value.show();

          simulateClick(document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext['CorFundoR']}"]`))

          /*
          document.querySelectorAll(`g[role="switch"]  g[fillBackup="${value.dataContext['CorFundoR']}"]`).forEach(el=> el.setAttribute('fill', el.getAttribute('fillBackup') ))
          document.querySelectorAll(`g[role="switch"]  g[fillBackup="${value.dataContext['CorFundoFM']}"]`).forEach(el=> el.setAttribute('fill', el.getAttribute('fillBackup') ))
        */
          }

        if(value.dataContext[filter] == valueSearch) {
          value.show();
         /* document.querySelectorAll(`g[role="switch"]  g[fillBackup="${value.dataContext['CorFundoR']}"]`).forEach(el=> el.setAttribute('fill', el.getAttribute('fillBackup') ))
          document.querySelectorAll(`g[role="switch"]  g[fillBackup="${value.dataContext['CorFundoFM']}"]`).forEach(el=> el.setAttribute('fill', el.getAttribute('fillBackup') ))
          */

        }
        
      });
    });
    document.getElementById(uncheckId).checked = false;
  });

  document.getElementById(uncheckId).addEventListener("click", (e) => {
    seriesChart.map((el) => {
      el.dataItems.values.map((value) => {
      
        if(isGlobal){
          value.hide();
          simulateClick(document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext['CorFundoR']}"]`))

          /*
          document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext['CorFundoR']}"]`).forEach(el=>
            {
              el.setAttribute('fillBackup', el.getAttribute('fill'));
              el.setAttribute('fill', '#999999');
            }
          )

          document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext['CorFundoFM']}"]`).forEach(el=>
            {
              el.setAttribute('fillBackup', el.getAttribute('fill'));
              el.setAttribute('fill', '#999999');
            }
          )

          */
        } 

        if(value.dataContext[filter] == valueSearch){
          value.hide();
          simulateClick(document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext['CorFundoR']}"]`));

          /*document.querySelectorAll(`g[role="switch"]  g[fill="${value.dataContext[colorSearch]}"]`).forEach(el=>
            {
              el.setAttribute('fillBackup', el.getAttribute('fill'));
              el.setAttribute('fill', '#999999');
            }
          )*/
        }
      });
    });
    document.getElementById(checkId).checked = false;
  });
}
