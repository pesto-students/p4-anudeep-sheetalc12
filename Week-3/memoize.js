//Memoization is an optimization technique 
//that can be used to reduce time-consuming calculations by saving previous input 
//to something called cache and returning the result from it.

let sum=0;
const calculation=(n)=>{
for(let iter=0;iter<=n;iter++){

    sum+=iter;
}
return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if (n in cache){
            return cache[n];

        }
        else{
            let result=fun(n);
            cache[n]=result;
            return cache[n];

        }
    }

}
const efficiency= memoize(calculation);

console.time();
console.log(efficiency(5));
console.timeEnd();
console.time();
console.log(efficiency(5));
console.timeEnd();


