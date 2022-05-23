const url = require ('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//serialized URL

console.log(myUrl.href)

//root domain
console.log(myUrl.host)

//hostname

console.log(myUrl.hostname)