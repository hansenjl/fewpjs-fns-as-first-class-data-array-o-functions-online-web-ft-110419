function wakeDog(dogName, dogBreed){
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
}

function leashDog(dogName, dogBreed){
  let string = `Leash ${dogName} to ${dogBreed}`
  console.log(string)
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]