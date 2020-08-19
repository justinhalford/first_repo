function capsIfTen(string) {
  if (string.length > 10) {
    string = string.toUpperCase()
    return string
  }
};

capsIfTen('Supercalifragilisticexpialidocious');