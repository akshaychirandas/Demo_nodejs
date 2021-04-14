const os = require('os')


// info about current user
const user = os.userInfo()
const user2 = os.uptime()


console.log(user)
console.log(os.uptime())


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)