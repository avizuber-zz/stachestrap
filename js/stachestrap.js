/*!
* Stachestrap v1.0.0
*/

if (typeof jQuery === 'undefined') { throw new Error('Stachestrap\'s JavaScript requires jQuery') }

/* ========================================================================
* Stachestrap: natural-language.js v1.0.0
* ======================================================================== */
var nlForm = $('#natural-language');
var nlInputs = $('#natural-language input');

for(i=0; i<nlInputs.length; i++){
    nlInputs[i].setAttribute('size',nlInputs[i].getAttribute('placeholder').length);
}