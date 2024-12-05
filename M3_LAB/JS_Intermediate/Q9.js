let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

    //calculate total salary

    function sumSalaries(salaries){
        const totalSalary=Object.values(salaries).reduce((sum,salary)=>sum=sum+salary,0);
        return totalSalary;
    }
    console.log(sumSalaries(salaries));

    //find the name of the person earns highest salary

   function  topEarner(salaries){
   let highestSalary=0;
   let earner='';
  for(let [ename,salary] of Object.entries(salaries)){
    if(salary>highestSalary){
        highestSalary=salary;
        earner=ename;
    }
   
  }
  return earner+' '+highestSalary;


   }
   console.log(topEarner(salaries));