const imagePaths = [
    'img/5050/5050-nolli.png',
    'img/5050/5050-lokal.png',
    'img/5050/5050-iso-flächen.png',
    'img/5050/cover-5050.png',
    'img/5050/5050-grundriss.png',
    'img/5050/5050-pik1.png',
    'img/5050/5050-pik2.png',
    'img/5050/5050-pik3.png',
    'img/5050/5050-schnittBB.png',
    'img/5050/5050-modellfoto.jpg'
  ];

  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
