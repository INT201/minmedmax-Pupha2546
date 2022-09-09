const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let array = [n1,n2,n3]
  array.sort(function(a, b){return a-b});
  return {
    min: array[0], mid: array[1], max: array[2]
  }
  // if(n1==85 && n2==30 && n3==1){
  //   return { min: 1, mid: 30, max: 85 }
  // }
  // else if(n1==10 && n2==0 && n3==20){
  //   return { min: 0, mid: 10, max: 20 }
  // }
  // else if(n1==-5 && n2==0 && n3==10){
  //   return { min: -5, mid: 0, max: 10 }
  // }
  // else if(n1==5 && n2==1 && n3==1){
  //   return { min: 1, mid: 5, max: 5 }
  // }
  // else if(n1==-1 && n2==-8 && n3==0){
  //   return { min: -8, mid: -1, max: 0 }
  // }


}
module.exports = minMedMax
