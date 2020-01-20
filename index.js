// Code your solution here
function findMatching(drivers,string) {
let query = string.upcase()
let answer = drivers.filter( n => {
  return n == query
} )
return answer
}
