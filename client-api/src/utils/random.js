const random=length=>{
  let pin="";
  for(i=0;i<length;i++){
    
    pin+=Math.floor(Math.random()*i)
  }
return pin;

}
module.exports={random};

