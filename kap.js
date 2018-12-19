require('es6-promise').polyfill();
require('isomorphic-fetch');
var _ = require('lodash');

fetch('https://www.kap.org.tr/tr/api/disclosures?ts=')
.then((response)=>response.json())
.then((response)=>{

//_.find(response,   'Pay Alım Satım Bildirimi' )

//return
for (var i =0;i<response.length;i++){
if(response[i].basic.title=='Pay Alım Satım Bildirimi'){

console.log(response[i].basic.publishDate +' > pay alım satım bildirimi  --  '+response[i].basic.relatedStocks)}
}

})

