let values = ['true', false, 1.5, 2, undefined, {foo: 'bar'}];

for (value in values) {
  console.log(typeof values[value])
};