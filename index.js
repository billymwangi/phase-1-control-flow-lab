function scuberGreetingForFeet(){
  // Write your code here!
  if(ride <= 400) {
    return `free sample`
  }else if (ride > 2000){
    return `30 dollars`
  }else if (ride > 2500){
    return `don\`t allow`
  }

}

function ternaryCheckCity(){
  city === NYC?"Ok, sounds good":"No go";
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch(Tip) {
    case 'Tip is generous':
      return 'Thank you so much'
      break;
    case 'Tip is not generous':
      return 'Thank you' 
      break;
    default: 
      return 'Bye'
  }
}

