{
    ////////////////////////////////////
    //problem-6
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface profileKeyTy {
        name: string;
        age: number;
        email: string
    }

    const myProfile: profileKeyTy = {
        name: "Sujait Ullah",
        age: 25,
        email: "sujait@gmail.com"
    }

    function updateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
        return { ...obj, [key]: value };
    }

    const updateObj = updateObject(myProfile, "age", 26)

    console.log(updateObj);








    ////////////////////////////////////
}