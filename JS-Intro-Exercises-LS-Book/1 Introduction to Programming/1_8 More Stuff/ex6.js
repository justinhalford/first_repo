let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, substring){
  let matches = [];
  for (i=0; i < words.length; i++) {
    if (substring.test(words[i])) {
      matches.push(words[i]);
    }
  }
  console.log(matches);
}

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']