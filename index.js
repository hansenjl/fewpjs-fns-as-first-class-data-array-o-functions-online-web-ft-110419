function wakeDog(dogName, dogBreed){
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
}

function leashDog(dogName, dogBreed){
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
}

function unleashDog(dogName, dogBreed){
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
}

function walkToPark(dogName, dogBreed){
  let string = `Walk ${dogName} the ${dogBreed} to the park`
  console.log(string)
}

function throwFrisbee(dogName, dogBreed){
  let string = `Throw the frisbee with ${dogName} the ${dogBreed}`
  console.log(string)
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]