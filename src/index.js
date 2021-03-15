module.exports = function toReadable (number) {
	let numberXX = ["zero", "one", "two", "three", "four", "five",
							"six", "seven", "eight", "nine", "ten",
							"eleven", "twelve", "thirteen", "fourteen", "fifteen",
							"sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
	let numberXXX = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	if(number == 0){
		return numberXX[0];
	}
	let result = "";
	if(Math.floor(number/100)){
		result += numberXX[Math.floor(number/100)] + " hundred";
		number -= Math.floor(number/100)*100;
	}
	if(Math.floor(number/10)>1 && number != 20){
		if(result.length != 0){
			result += " ";
		}
		result += numberXXX[Math.floor(number/10)-2];
		number -= Math.floor(number/10)*10;
	}
	if(number == 0){
			return result;
	}
	if(result.length != 0){
		result += " ";
	}
	return result += numberXX[number]
}
