function checkPrime(number){
let factor;
for(let i=number;i<=number;i++){
	if(number%i==0){
	     factor++
	}

	if(factor==5){
		return true
	}else{
		return false
	}
}

let ans=checkPrime(17)

if(ans==true){
console.log(ans," Is a Prime Number")
}else{
	console.log(ans,"Is not a prime Number")
}