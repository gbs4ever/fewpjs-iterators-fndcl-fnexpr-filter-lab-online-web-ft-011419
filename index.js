// Code your solution here
function findMatching(drivers,string) {

let answer = drivers.filter( n => {
  return n == string
} )
return answer
}
 function fuzzyMatch(drviers ,string){
   let answer = drivers.filter( n => {
     return n[0] == string
   } )
   return answer
 }
