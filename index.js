// Code your solution here
function findMatching(drivers,string) {

let answer = drivers.filter( n => {
  return n == string
} )
return answer
}
