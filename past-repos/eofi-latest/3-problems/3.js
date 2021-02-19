// 2010 Beijing 19 - 1
// def = (string) => ( new Symbol(string) )
function main(){
  def('f', new Funcion());
  equal(get('f').call(1), frac(1, 4));
  equal_func((x, y,f) => (4*f(x)*f(y)), (x, y, f) => (f(x+y) + f(x-y)))
  


}

main();
