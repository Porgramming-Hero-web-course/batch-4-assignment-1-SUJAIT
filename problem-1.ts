

{
    //Problem-1
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    
    
    
        function sumArray(arr : number[]) {
            let sumNum:number = 0;
            arr.forEach(ArrNum => sumNum += ArrNum)
            return sumNum;
        }
        
        const array:number[] = [1,2,3,4,5]
        
        console.log(sumArray(array))

        
        
        
        
        
        
        }
        