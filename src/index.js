module.exports = function check(str, bracketsConfig) {
  let array = str.split('')
  function cleaner(arr){
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<bracketsConfig.length; j++){
        if((arr[i] === bracketsConfig[j][0]) && (arr[i+1] === bracketsConfig[j][1])){
          let start = []
          if(i>0){start = arr.slice(0, i)}
          let end = arr.slice(i+2)
          let res = []
          res.push(...start)
          res.push(...end)
          array = res
        }
      }
    }
  }
  for(let x=array.length/2; x>0; x--){
    cleaner(array)
  }
  //console.log(array)
  if(array.length === 0){return true}
  else{return false}
}
