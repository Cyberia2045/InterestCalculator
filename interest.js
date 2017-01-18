//How Rich will you be in (x#) years?

//User inputs the initial principle (p)
//User inputs the interest rate (i)
//User inputs the period of compounding (d)
//The output will be the future value of that initial principle (fv)

var p = document.getElementById("principle");
var i = document.getElementById("interest");
var d = document.getElementById("duration");
var calculate = document.getElementById("calculate");
var answer = document.getElementById("answer");

function compound() {

	p = p.value;
	i = i.value;
	d = d.value;
	var fv = p*((1+(i/100))**d)
	return fv.toFixed(2);	//calculated result rounded to the hundredth place.
}

calculate.addEventListener("click", function(event) {
	event.preventDefault(); //prevents the default refresh from the button element
	answer.innerHTML = "You're value is $ " + compound(); //This tells the user their 
})






