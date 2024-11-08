{
    //////////////////////////////////
    //Problem-8
    // Create a Function ValidateKey(Obj:Text,Key:(Keyof T)[]) that takes an object obj and an array of keys MediaKeySession.The Function should return true if all of the specified keys exist in the objects , otherwise, it should return false.
    
    const Obj = { name: "Sujait",age:23};
    
    
    function validateKey<T extends object>(Obj: T, Keys: (keyof T)[]): boolean {
        for (const key of Keys) {
          if (!(key in Obj)) {
            return false; 
          }
        }
        return true; 
      }
      
    
      console.log(validateKey(Obj, ["name","age"]));
      console.log(validateKey(Obj, ["age"])); 
    //   console.log(validateKey(Obj, ["ID"])); 
    
    ///////////////////////////////////
    }