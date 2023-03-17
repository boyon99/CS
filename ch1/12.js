const pukuba = (() => {
    // private
    const a = 1
    const b = () => 2
    // public
    const public = {
        c: 2,
        d: () => 3
    }
    return public
})()
console.log(pukuba) // // { c: 2, d: [Function: d] }
console.log(pukuba.a) // undefined

