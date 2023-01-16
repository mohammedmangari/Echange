let usd = document.getElementById('usd');
let mad =document.getElementById('mad');

function Echange(coff ="10.66"){

document.body.style.textAlign="center";

let dv = document.getElementsByTagName('div')[0];

// this.document.body.style.backgroundImage="url(DtoD.jpg)";
// this.document.body.style.background = "linear-gradient(35deg, red, #FFCCCC);"
// this.document.body.style.backgroundRepeat="no-repeat";
// this.document.body.style.backgroundSize="100%";

usd.style.height="30px"

mad.style.height="30px"


dv.style.setProperty('margin','200px');

usd.onkeyup= function(){
         mad.value = usd.value * coff;
         usd.style.backgroundColor="#eee";
        }

 mad.onkeyup= function(){
         usd.value= mad.value/coff;
        mad.style.backgroundColor="#eee"
        }        
    }

  Echange();