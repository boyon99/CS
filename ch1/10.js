// 프록시 객체를 통해 옵저버 패턴을 구현할 수 있다.
// 프록시 객체는 어떠한 대상의 기본적인 동작의 작업을 가로챌 수 있는 객체를 의미하며 두 개의 매개변수를 가진다. `target`은 프록시할 대상이며 `handler`는 target의 동작을 가로채고 어떠한 동작을 할 것인지가 설정되어 있는 함수이다.

function createReactiveObject(target) {
    // 프록시 객체 선언
    const proxy = new Proxy(target, {
        // 프록시 객체의 set()함수는 속성에 대한 접근을 가로챈다.
        set(obj, prop, value) {
            if (value !== obj[prop]) {
                const prev = obj[prop]
                obj[prop] = value
                console.log(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다`)
            }
            return true
        }
    })
    return proxy
}
const a = {
    "형규": "솔로"
}
const b = createReactiveObject(a)
b.형규 = "솔로"
b.형규 = "커플"
// 형규가 [솔로] >> [커플] 로 변경되었습니다
b.형규 = "솔로"
// 형규가 [커플] >> [솔로] 로 변경되었습니다