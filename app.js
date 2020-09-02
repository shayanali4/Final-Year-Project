
var prox1=0;
var prox2=0;
var prox3=0;
var temp1=0;
var temp2=0;
var temp3=0;

    
    firebase.database().ref('sbc/data').once('value',function(data){
// console.log(data.val())
var newdata=data.val();
// console.log(newdata) 
    prox1=newdata.slice(0,1)
    prox2=newdata.slice(2,3)
    prox3=newdata.slice(4,5)
    temp1=newdata.slice(6,8)
    temp2=newdata.slice(9,11)
    temp3=newdata.slice(12,14)
console.log(temp2) 





    })

     
  


