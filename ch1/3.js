const URL = 'mongodb://localhost:27017/kundolapp'
const createConnection = url => ({ "url": url })
class DB {
    constructor(url) {
        if (!DB.instance) {
            DB.instance = createConnection(url)
        }
        return DB.instance
    }
    connect() {
        return this.instance
    }
}

// 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴이다.
const a = new DB(URL)
const b = new DB(URL)
console.log(a === b) // true
