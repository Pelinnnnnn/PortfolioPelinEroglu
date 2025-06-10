const imagePaths = [
  'img/bttc/signa-is-bankrupt.png',
  'img/bttc/rents-are-rising.png',
  'img/bttc/initiativises-jeoprised.png',
  'img/bttc/520+.png',
  'img/bttc/schnitte1.png',
  'img/bttc/legende.png',
  'img/bttc/240829_EG.png',
  'img/bttc/2408291.OG.png',
  'img/bttc/240829_2.3.OG.png',
  'img/bttc/schnitte2.png',
];
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });