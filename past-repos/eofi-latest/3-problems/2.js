// 2010 Beijing 19 - 1
// def = (string) => ( new Symbol(string) )
function main(){
  def('a_n', new Sequence({type: 'arithmetic'}));

  equal(get('a_n').get_element(3), 7);

  equal(add(get('a_n').get_element(3), get('a_n').get_element(7)), 26);

  def('S_n', new Sum(get('a_n')));

  solve(get('a_n').expression, new RegEx());

}

main();
