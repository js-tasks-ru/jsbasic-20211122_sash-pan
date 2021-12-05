function sumSalary(salaries) {
  // ваш код...
  let sum2 = 0;
  for (let key in salaries) {
    if(typeof salaries[key] == 'number' && salaries[key] != Infinity && salaries[key] != -Infinity && !isNaN(salaries[key])){
      sum2 += salaries[key];
    };

  }
  return(sum2);
}
