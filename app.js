const app = angular.module('CalcApp', []);

app.controller('MainController') {
	
}

let a, b, operator;

const selector(){
	
}

const submitEquation() {
	if(operator == '+'){
		addition();
	}
	if(operator == '-'){
		subtraction();
	}
	if(operator == '*'){
		multiplication();
	}
	if(operator == '/'){
		division();
	}
	if(operator == '**'){
		exponent();
	}
	else {
		console.log("Error: Did not enter a valid equation!");
	}
}

const addition() {
	let adddedSum = a + b;
	return addedSum;
}

const subtraction() {
	let subtractedDifference = a - b;
	return subtractedDifference;
}

const multiplication() {
	let multiplicatedProduct = a * b;
	return multiplicatedProduct;
}

const division() {
	if(a == 0 || b == 0){
		console.log("Error: Cannot divide zero or a number by zero!");
	}
	
	let dividedNumber = a / b;
	return dividedNumber;
}

const exponent() {
	let exponentNumber = a ** b;
	return exponentNumber;
}