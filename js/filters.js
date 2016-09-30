angular.module('PortfolioFilters', [])
.filter('reverse', function() {
  var reverseWord = function(word) {
    return word.split('').reverse().join('');
  }

  return function(input, preserveWords) {
    if(!input) return input;

    if(preserveWords) {
      return input.split(' ').map(function(word) {
        return reverseWord(word);
      }).join(' ');
    } else {
      return reverseWord(input);
    }
  }
})
.filter('nth', function() {
  // var nth = function(array){
  //   return "Blah";
  // }

  return function(input){
    if(input == 1){
      return input + "st";
    } else if (input == 2){
      return input + "nd";
    } else if (input == 3){
      return input + "rd";
    } else {
      return input + "th";
    }

  }
});