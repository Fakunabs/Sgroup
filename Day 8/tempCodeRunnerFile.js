const TaylorSwift = {
    _gender: 'female',
    _age: 0, 

    set age(age) {
        if (age < 30) {
            console.log('Error');
            return;
        }

        this._age = age;
    }
}
TaylorSwift.age = 31;

console.log(`Taylor Swift is ${TaylorSwift._age} years old.`);