console.log(window)
console.log(window.document)
console.log(document) //no need to write window.document always, we get html
console.dir(document) //also get remaining information, if required

// https://en.wikipedia.org/wiki/Brendan_Eich
console.log(document.baseURI);//base url of webpage

console.log(document.links);//html collection of links not array!!

console.log(document.links[2]);//2nd link

document.getElementById('firstHeading')
document.getElementById('firstHeading').innerHTML = "<h1>Chai aur Code</h1>" //to change DOM