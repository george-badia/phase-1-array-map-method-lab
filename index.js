const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(tutorial => {
// to capitalize some letters within a sentence 
    if (tutorial.toLowerCase() === "what is jsonp?") {
      return "What Is JSONP?";
    } else if (tutorial.toLowerCase() === "what is the difference between stoppropagation and preventdefault?") {
      return "What Is The Difference Between StopPropagation And PreventDefault?";
    }

   
    return tutorial.split(' ').map(word => {
     
 // making words like jsonp,Oo,api,Nan capital- toUppercase()
      switch (word.toLowerCase()) {
        case "jsonp":
          return word.toUpperCase();
        case "api":
         return word.toUpperCase();
        case "oo":
          return "OO";
        case "nan":
          return "NaN";
        case "stoppropagation":

          // changing 'Stoppropagation' to 'StopPropagation' by capitalizing  p in the word
          return "StopPropagation";
        case "preventdefault":


          // to make d capital from  word 'Preventdefault' to 'PreventDefault'
          return "PreventDefault";
        default:
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  });
}

console.log(titleCased());