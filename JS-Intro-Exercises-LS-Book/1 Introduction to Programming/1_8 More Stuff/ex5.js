function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/* this function using a method chain is taking an argument string, splitting it into separate items delimited by spaces, reversing the order of items in the array, and transforming the items into their lengths
*/

