// function for when button is pressed
function calculate() {
	var weight = $('#inputWeight').val();
	var selected = $('#planet option:selected').val();
	var result = weight * selected;
	var planet = $('#planet option:selected').text();
	var html = "If you were on " + planet + ", you would weigh " + result.toFixed(2) + " lbs!";

    $('#result').empty().append(html);

    console.log(weight, selected, result);
    
return false;
}

var button = document.getElementById('button');
button.onclick = calculate;
