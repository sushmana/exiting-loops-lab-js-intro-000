function breakOut(array,changevalue,stopValue){
  for(let i=0;i<array.length;i++){
    if(array[i]!==stopValue){
      array[i]=changeValue;
    break
  }
  return array;
  }
}

function keepGoing(array,changeValue,skipValue){
  for(let i=0;i<array.length;i++){
    if(array[i]!==skipValue){
      array[i]=changeValue;
      continue;
  }
  return array;
}