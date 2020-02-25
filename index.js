function wakeDog(dogName, dogBreed){
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
   return string
}

function leashDog(dogName, dogBreed){
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
   return string
}

function unleashDog(dogName, dogBreed){
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function walkToPark(dogName, dogBreed){
  let string = `Walk ${dogName} the ${dogBreed} to the park`
  console.log(string)
   return string
}

function throwFrisbee(dogName, dogBreed){
  let string = `Throw the frisbee with ${dogName} the ${dogBreed}`
  console.log(string)
   return string
}

function walkHome(dogName, dogBreed){
  let string = `Walk ${dogName} the ${dogBreed} home`
  console.log(string)
   return string
}

function exerciseDog(dogName, dogBreed){
  return routine.map(fn =>
   fn() 
  )
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]