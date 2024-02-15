
let MainHeader = document.createElement('header');


node = document.createElement('img');
let nb=10;
node.setAttribute('src','logo.png');
node.style.cssText ='height:50px; ';
let div =document.createElement('div');
div.style.cssText ='flex:1;';
div.appendChild(node);
    MainHeader.append(div);
    div = document.createElement('div').cloneNode();
    node = document.createElement('div').cloneNode();
    let txtnode =document.createTextNode(`Home Menu ...`);
node.style.cssText='color:wheat; font-size:30px;';
nb=4;
    node.appendChild(txtnode);
    MainHeader.appendChild(node);

MainHeader.style.cssText='display:flex; object-fit:contain; flex-direction=column; allign-items:center; justify-content:space-between;';

MainHeader.style.backgroundColor='#229be6';
MainHeader.style.padding='10px';
MainHeader.style.alignItems='center';

document.body.style.margin='0px'; 

document.body.querySelector('script').before(MainHeader);

 
// footer

let MainFooter = document.createElement('footer');

txtnode =document.createTextNode(`copyright 2021`);
node = document.createElement('div').cloneNode();
node.appendChild(txtnode);
node.style.cssText='color:wheat; font-size:30px;';

MainFooter.appendChild(node);


MainFooter.style.cssText=' background-Color:#229b00; padding:10px; align-Items:center; position:absolute; bottom:0px; right:0px; left :0px; height:50px; allign-items:center; display:flex; justify-content: space-around;';
document.body.querySelector('script').before(MainFooter);



//main





let mainBody = document.createElement('div');
mainBody.style.display='grid';
mainBody.style.gridColumn='3';
mainBody.style.gridTemplateColumns= '1fr 1fr 1fr';
mainBody.style.backgroundColor='yellow';
mainBody.style.alignItems='stretch';



txtnode =document.createTextNode(`hello 1`);
node=document.createElement('div').cloneNode();

node.style.cssText='background-color:white; '




node.appendChild(txtnode);
mainBody.appendChild(node);

for(let i=1;i<10;i++)
{






}
MainFooter.before(mainBody);

document.body.style.backgroundColor='lightgrey';