const coverImages = [
    '../img/cover/cover-bttc.png',
    '../img/cover/cover-mhyp.png',
    '../img/cover/cover-hda.png',
    '../img/cover/cover-5050.png',
    '../img/cover/cover-jfs.png',
    '../img/cover/cover-hdm.png'
];

coverImages.forEach(path => {
    const img = new Image();
    img.src = path;
});
