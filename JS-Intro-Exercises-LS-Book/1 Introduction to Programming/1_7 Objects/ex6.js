let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj =  Object.create(myProtoObj);

myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

/*The code above logs only qux since it was the only key defined outside of the prototype copy.
*/

for (let key in myObj) {
  console.log(key);
}

/*The code above logs foo, bar, and qux since it iterates over properties both from the prototype and defined outside of the context of the prototype.
*/