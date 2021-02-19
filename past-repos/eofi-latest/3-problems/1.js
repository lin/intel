// 2010 Beijing 19 - 1
// def = (string) => ( new Symbol(string) )
function main(){
  def('A', new Point(-1, 1));
  def('B', reflection_point(get('A')); // b (1, -1)

  def('P', new Point());

  def('k_AP', get_slope_from_points(get('A'), get('P')));
  def('k_BP', get_slope_from_points(get('B'), get('P')));

  equal(multi(get('k_AP'), get('k_BP')), -1/3); // x_p^2 + 3 y_p^2 == 4

  purpose()

  get_curve_from_point(get('P'))

  solve();
}

main();
