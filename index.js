function scuberGreetingForFeet(ride){
  if(ride<=400){
    return'This one is on me!'
  }
  else if(ride>=2001){
    return'I will gladly take your thirty bucks.'
  }
  else if(ride>=2501){
    return 'No can do.'
  }
  
  }



function ternaryCheckCity(area){
 return area ==='NYC'?"Ok, sounds good." :'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
  case 'generous':
    return "Thank you so much."
  case 'not as generous':
    return"Thank you."
  case 'thanks for everything':
    return "Bye."
}
}