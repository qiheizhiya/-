/**
 * var arr = [['A','B'],['a','b'],[1,2]]
 * 求二维数组的全排列组合 
 * 结果Aa1, Aa2, Ab1, Ab2, Ba1, Ba2, Bb1, Bb2
 */

 const arr = [['A','B','C'],['a','b'],[1,2]]
 const result = arr.reduce((prev, next) => {
    let c = []
    for (let i in prev) {
        for(let j in next) {
            c = [...c, `${prev[i]}${next[j]}`]
        }
    }
    return c
 })
 console.log(result);