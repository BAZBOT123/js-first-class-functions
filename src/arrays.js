const { ConsoleReporter } = require("jasmine")

//Example:
function findFirstNumberGreaterThan10() {
  const nums = [5, 2, 1, 76, 12]

  return nums.find(function (num) {
    return num > 10
  })
}

function findFirstNumberLessThan10() {
  const nums = [12, 34, 5, 12, 99]


  //TODO: Use items.find to return the first item in the array with a quantity of 1
  return nums.find(function (num) {
    return num < 10
  })
}


function findFirstItemWithQuantityOne() {
  const items = [
    { item: 'apple', quantity: 2 },
    { item: 'orange', quantity: 10 },
    { item: 'banana', quantity: 1 },
    { item: 'lemon', quantity: 2 }
  ]

  //TODO: Use items.find to return the first item in the array with a quantity of 1
  return items.find(function (item) {
    if (item.quantity === 1) {
      return true
    } else {
      return false
    }
  })
}

function findIndexTom() {
  const names = ['bob', 'jane', 'tom', 'fred']

  //TODO: Use names.findIndex to return the index of 'tom' in the array
  return names.findIndex(function (name) {
    return name === "tom"
  })
}

function findIndexLemon() {
  const items = [
    { item: 'apple', quantity: 2 },
    { item: 'orange', quantity: 10 },
    { item: 'banana', quantity: 1 },
    { item: 'lemon', quantity: 2 }
  ]

  //TODO: Use items.findIndex to return the index of the item 'lemon' in the array
  return items.findIndex(function (name) {
    if (name.item === "lemon") {
      return true
    } else {
      return false
    }
  })
}

function allOver100() {
  const nums = [13, 16, 99, 101, 2001, 198, 10]

  //TODO: Use nums.filter to return an array containing every item nums that is over 100
  return nums.filter(function (num) {
    return num > 100
  })
}

function startsWithM() {
  const names = ['Matt', 'Bob', 'Marie', 'Fred', 'Mike', 'Charles']

  //TODO: Use names.filter to return an array containing every name starting with an 'M'
  return names.filter(function (letter) {
    return letter[0].includes("M")
  })
}

function horrorFilms() {
  const films = [
    {
      name: 'The Manor',
      genre: 'Horror'
    },
    {
      name: 'Dune',
      genre: 'SciFi'
    },
    {
      name: 'Dont Look Up',
      genre: 'Comedy'
    },
    {
      name: 'In Ehe Earth',
      genre: 'Horror'
    },
  ]

  //TODO: Use films.filter to return an array containing all horror films
  return films.filter(function(film){
    return film.genre === "Horror"
  })
}

function doubleEachNumber() {
  const nums = [1, 10, 100, 1000]

  //TODO: Use nums.map to return an array containing each number doubled
  return nums.map(num => num * 2)
}

function sumNumbers() {
  const nums = [1, 10, 100, 1000]

  //TODO: Use nums.reduce to return the sum of all items in the array

return nums.reduce(function(a, b){
  return a + b 
})
}

function findLargest() {
  const nums = [341, 120, 9121, 862]

  //TODO: Use nums.reduce to return the largest number in the array
  return nums.reduce(function(a, b){
    if (a > b) {
      return a
    } else {
      return b
    }
  })
}

module.exports = {
  findFirstNumberGreaterThan10: findFirstNumberGreaterThan10,
  findFirstNumberLessThan10: findFirstNumberLessThan10,
  findFirstItemWithQuantityOne: findFirstItemWithQuantityOne,
  findIndexTom: findIndexTom,
  findIndexLemon: findIndexLemon,
  allOver100: allOver100,
  startsWithM: startsWithM,
  horrorFilms: horrorFilms,
  doubleEachNumber: doubleEachNumber,
  sumNumbers: sumNumbers,
  findLargest: findLargest
}