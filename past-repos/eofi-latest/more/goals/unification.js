// 1. the classification definition
x^2 + y^2 = 1 // this is a circle
// 2. the partial computation facts
a - b = 8
a + b = 40
// 3. the caring abstraction layers


// increase the class level
x + y = 10
(sin(x))^2 + (cos(x))^2 = 1
A * x + B * y = 1
A * x^m + B * y^n = 1
A * (x - x_0)^m + B * (y - y_0)^n = 1

// easy one
a^x + b^y = 1
m^a^x + n^b^y = 1

img = (n) => {
  return `<img src='${n}.png' width=54 height= 50/>`
}
// what is name?
img(name) -> <img src='bill.png' width=54 height= 50/>

img = (n) => {
  let low = to_lowercase(n)
  return `<img src='${low}.png' width=54 height= 50/>`
}
// what is name?
bname = name where img(name) -> <img src='bill.png' width=54 height= 50/>
// Bill, bIll, BIll, BILl, BILL, BiLL, Bill, bill...16 cases

// and soon, by definition, this ambiguity becomes reality, and ghost becomes man,
