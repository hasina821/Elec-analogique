
var element = document.getElementById("menu");
//calcul

function calcul(){
	var tens = Number(document.getElementById("U").value);
	var res1 = Number(document.getElementById("R1").value);
	var res2 = Number(document.getElementById("R2").value);
	var res3 = Number(document.getElementById("R3").value);
	

	var res =(res2 * res3) / (res2 + res3);
	var in_1 = (tens/(res1 + res));
	var in_2 = (res3*in_1)/(res2+res3);
	var in_3 = (res2*in_1)/(res2+res3);
	

	if(isNaN(in_3) || isNaN(in_2) || isNaN(in_1))
		document.getElementById("resu").innerHTML ="veuillez entrer des nombres";
	else
		document.getElementById("resu").innerHTML = 
		"I1 = " + in_1.toFixed(3) +"      I2 = " + in_2.toFixed(3) + "     I3 = " + in_3.toFixed(3);
}

function liberer(){
	document.getElementById("U").value =0;
	document.getElementById("R1").value =0;
	document.getElementById("R2").value =0;
	document.getElementById("R3").value =0;
	document.getElementById("resu").innerHTML="";
}