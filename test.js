function accum(letters) {
  return letters.split('').map((letter, idx) => {
    return letter.toUpperCase() + letter.toLowerCase().repeat(idx);
  }).join('-');
}


console.log(accum('ZpglnRxqenU'));
