class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
    getInstance() {
        return this
    }
}
const a = new Singleton("a")
const b = new Singleton("b")
console.log(a === b) // true 
console.log(a.getInstance() === b.getInstance()) // true 
console.log(a.getInstance(), b.getInstance()) // true 
