// Code your solution here
function findMatching(drivers,string) {

let answer = drivers.filter( n => {
  return n.upcase() === string.upcase()
} )
return answer
}
 function fuzzyMatch(drviers ,string){
   let answer = drivers.filter( n => {
     return n[0] === string
   } )
   return answer
 }
