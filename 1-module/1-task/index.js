function factorial(n) {
  // ваш код...
  let result = 1;
  if(n == 0 || n == 1){
    return(result);
  }
  else{
    for(let i = 0; i< n; i++){
      result=result*(n-i);
    }
  }
  return(result);
}
