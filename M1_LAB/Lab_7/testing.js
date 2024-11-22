//addition of a and b

function add(a,b){
    return a+b
   }
   

   //subtract b from a
   function subtract(a,b){
       return a-b
   }
   

   //multiply a and b
   function multiply (a,b){
       return a*b
   }

   //divide a by b  return a message "Division by zero" if b==0
   
   function divide(a,b){
       if(b==0){
           return "Division by zero"
       }
       return a/b 
   
   }

   //Testing each functions
   
   const sum=add(2.7,(-4.8))
   console.log("Addition: "+sum)
   
   const sub=subtract(28,1)
   console.log("subtraction: "+sub)
   
   const mult=multiply(89,150)
   console.log("multiplication: "+mult)
   
   const div=divide(40,8)
   console.log("division: "+div)



    //Unit testing for addition

    if (add(2, 4) != 6) {
        throw new Error('Test failed in sum of 2 and 4');
        }
    
        console.log('give expected value in sum of 2 and 4') //6
    
        if (add(-2, 4) != 2) {
            throw new Error('Test failed in sum of -2 and 4');
            }
        
            console.log('give expected value in sum of -2 and 4') //2
    
        if (add(2.7, -4.8) != -2.1) {
             throw new Error('Test failed in sum of 2.7 and -4.8');
            }
            
            console.log('give expected value in sum of 2.7 and -4.8') //-2.1
    
    
    
 // Unit Testing for subtraction
 if (subtract(12, 4) != 8) {
    throw new Error('Test failed in subtraction of 12 and 4');
    }

    console.log('give expected value in subtraction of 12 and 4') //8

    if (subtract(-2, 4) != -6) {
        throw new Error('Test failed in subtraction of -2 and 4');
        }
    
        console.log('give expected value in subtraction of -2 and 4') //-6

    if (subtract(2.7, (-4.8)) != 7.5) {
         throw new Error('Test failed in subtraction of 2.7 and -4.8');
        }
        
        console.log('give expected value in subtraction of 2.7 and -4.8') //7.5

// Unit Testing for multiplication

if (multiply(12, 4) != 48) {
    throw new Error('Test failed in multiplication of 12 and 4');
    }

    console.log('give expected value in multiplication of 12 and 4') //48

    if (multiply(-9, 4) != -36) {
        throw new Error('Test failed in multiplication of -9 and 4');
        }
    
        console.log('give expected value in multiplication of -9 and 4') //-36
    
        if (multiply(1.5, 4) != 6) {
            throw new Error('Test failed in multiplication of 1.5 and 4');
            }
        
            console.log('give expected value in multiplication of 1.5 and 4') //6
        
   


        // Unit Testing for division

        if (divide(12, 4) != 3) {
            throw new Error('Test failed in division of 12 and 4');
            }
        
            console.log('give expected value in division of 12 and 4') //3
        
            if (divide(-8, 4) != -2) {
                throw new Error('Test failed in division of -8 and 4'); 
                }
            
                console.log('give expected value in division of -8 and 4') //-2

            
                if (divide(0.8, 0.4) != 2) {
                    throw new Error('Test failed in division of 0.8 and 0.4'); 
                    }
                
                    console.log('give expected value in division of 0.8 and 0.4') //2     
               