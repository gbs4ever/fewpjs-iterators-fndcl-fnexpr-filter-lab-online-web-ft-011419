// Code your solution here
function findMatching(drivers,string) {

return drivers.filter( n => {
  return n.toUpperCase() === string.toUpperCase()
} )

}
 function fuzzyMatch(drivers ,string){
   return drivers.filter( n => {
     return n[0].toUpperCase()  === string.toUpperCase()
   } )

 }
