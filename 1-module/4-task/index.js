function checkSpam(str) {
  // ваш код...
  str = str.toLowerCase();
    let newStr1;
    let newStr2;
    newStr1=str.indexOf("1xbet");
    newStr2=str.indexOf("xxx");
    if(newStr1 == -1 && newStr2 == -1)
    {
      return(false);
    }
    else{
      return(true);
    }
}
