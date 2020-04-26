let params = new URLSearchParams(document.location.search);
let q =params.get("code");
elem = document.createElement('input')
elem.type = 'hidden'
elem.name = 'code'
elem.innerText = q
document.getElementsByTagName('main')[0].appendChild(elem)
