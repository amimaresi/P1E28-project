// 1. Create a function that takes a callback function as a parameter and calls that callback function with a message as an argument.

let Rqt=new XMLHttpRequest();
Rqt.open('GET','https://jsonplaceholder.typicode.com/todoss',true);
Rqt.send();
function getTpdos(callback){
Rqt.onreadystatechange=function(){
    if(Rqt.readyState==4 && Rqt.status==200){
        console.log(Rqt.responseText);
        callback(undefined,Rqt.responseText);
    }else{
        callback('Error',undefined);
    }
}   
};
callback=(error,response)=>{
    if(error){
        console.log('Error:',error);
    }else{
        console.log('Response:',response);
    }
}
getTpdos(callback);