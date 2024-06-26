function saturdayFun (activity ='roller-skate'){
  return `This Saturday, I want to ${activity}!`
  }
//console.log(saturdayFun("bathe my dog!"))

function mondayWork (to_do='go to the office'){
  return `This Monday, I will ${to_do}.`
}
//console.log(mondayWork())

function wrapAdjective (flair = '*'){
  return function (adjective ='special'){
    return `You are ${flair}${adjective}${flair}!`
  }
}
//wrapAdjective()('*')
//console.log(wrapAdjective())