// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching=(drivers,name)=>{
    return drivers.filter(function (word) { return word === name||word.toLowerCase()===name.toLowerCase(); })
  }

  const fuzzyMatch = (drivers,name)=>{
    return drivers.filter(function(word){return word.slice(0,2)===name;})
  }

  const matchName = (drivers, name) => {
    return drivers.filter (function(word) {return word.name === name;})
  }