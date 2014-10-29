/*!
* Stachestrap v1.0.0
*/

if (typeof jQuery === 'undefined') { throw new Error('Stachestrap\'s JavaScript requires jQuery') }

/* ========================================================================
* Stachestrap: documentation snippets v1.0.0 HT Ben Frain
http://benfrain.com/use-jquery-to-convert-html-within-code-tags-to-character-entities/
* ======================================================================== */
$(document).ready(function() {
    $('code').each(function() {
        $(this).text($(this).html());
    });
});

/* ========================================================================
* Stachestrap: natural-language.js v1.0.0
* ======================================================================== */
var nlForm = $('#natural-language');

/* Style File Upload Buttons in NL Form */
var wrapper = $('<div/>').css({height:0,width:0,'overflow':'hidden'});
var fileInput = $('#natural-language :file').wrap(wrapper);

fileInput.change(function(){
    $this = $(this);
    $('#nl-fileUpload').text($this.val());
})

$('#nl-fileUpload').click(function(){
    fileInput.click();
}).show();

/* Convert Radio Buttons to Select Options, still needs major work*/
var $checkbox = $('#natural-language .radio label input[type=radio]');
var $select = $('<select></select>');    // create a select
$select.attr('name', $checkbox.attr('name'));    // set name and value

$checkbox.each(function(i, checkbox){
    var str = $checkbox.eq(i).val();
    $select.append($('<option>').val(str).text(str));
});
$checkbox.replaceWith($select);

/* Help Determine Width of Inputs based on Placeholder text */
var nlInputs = $('#natural-language input');

for(i=0; i<nlInputs.length; i++){
    nlInputs[i].setAttribute('size',nlInputs[i].getAttribute('placeholder').length-3);
}