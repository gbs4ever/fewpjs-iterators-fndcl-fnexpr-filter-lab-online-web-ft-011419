// Code your solution here
function findMatching(drivers,string) {

return drivers.filter( n => {
  return n.toUpperCase() === string.toUpperCase()
} )

}
 function fuzzyMatch(drivers ,string){
   return drivers.filter( n => {
let answer = n[0]
     return answer.toUpperCase()  === string.toUpperCase()
   } )

 }
function matchName (drivers, string){
  return drivers.filter ( n=> n.name=== string )
}