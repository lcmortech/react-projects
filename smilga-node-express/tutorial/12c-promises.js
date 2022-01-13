const {readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise  = util.promisify(readFile)
// const writeFilePromise = until.promisify(writeFile)

//async arrow function
const start = async () => {
    try {
        const first = await readFile('.content/first.txt', 'utf8')
        const first = await readFile('.content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade-2.txt', `THIS IS AWESOME: ${first} ${second},{flag: 'a'}`)
        } catch {
            console.log(err)
        }
    }
    
    start()

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8',(err, data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


//Only once the promise is resolved can the code be used
//In async, we can wait and use a try catch block
//Async is much cleaner than promises
// getText('.content/first.txt')
//     .then(result =>console.log(result))
//     .catch((err)=> console.log(err))
    