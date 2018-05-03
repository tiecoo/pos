let $ = require('jquery');
// Como faço para...
// Buscar meus dados na API do GitHub? (https://api.github.com/users/)
let username = "tiecoo"
// $.getJSON(`https://api.github.com/users/${username}`, function(resp){
//   console.log(resp);
// });

var promise = $.getJSON(`https://api.github.com/users/${username}`);
promise.then(resp => console.log(resp));
console.log(promise);
promise.catch(err => console.log(err)) //quando a promise é rejeitada
// vamos utilizar o $.getJSON()... http://api.jquery.com/jquery.getjson/