function checkPrime(number){
let factor;
for(let i=number;i<=number;i++){
	if(number%i==0){
	     factor++
	}

	if(factor==2){
		return true
	}else{
		return false
	}
}
}
let number =29
let ans=checkPrime(number)

if(ans==true){
console.log(number," Is a Prime Number")
}
else{
	console.log(number,"Is not a prime Number")
}