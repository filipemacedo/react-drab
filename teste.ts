function* logGenerator(teste) {
 // console.log(0);
 console.log(1, teste, yield);
 console.log(2, yield);
 console.log(3, yield);
}

var gen = logGenerator("oi");

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise