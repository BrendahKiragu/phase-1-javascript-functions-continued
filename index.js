function saturdayFun (activity ='roller-skate'){
  return `This Saturday, I want to ${activity}!`
  }
//console.log(saturdayFun())
//console.log(saturdayFun("bathe my dog!"))

function mondayWork (to_do='go to the office'){
  return `This Monday, I will ${to_do}.`
}
//console.log(mondayWork('go swimming'))

function wrapAdjective (flair = '*'){
  return function (adjective ='special'){
    return `You are ${flair}${adjective}${flair}!`
  }
}
// you can change the flair argument as well as the adjective
//wrapAdjective('#')('a dedicated programmer')
//console.log(wrapAdjective('#')('a dedicated programmer'))