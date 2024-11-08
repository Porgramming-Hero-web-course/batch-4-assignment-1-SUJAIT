{
    ////////////////////////////
//Problem-5
//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


    
    function getProperty<T,K extends keyof T>(Obj:T,Key:K):T[K]{
        return Obj[Key];
    }
    
    const person = {name:"Sujait",age:23};
    
    const name = getProperty(person,"name")
    const age = getProperty(person,'age')
    
    console.log(age)
    console.log(name)
    
    
    ////////////////////////////
    }