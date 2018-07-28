console.log("index ok");

TweenMax.fromTo(['.box_01' ,'.box_02'], 3, {
    x: 0
    // y: 0
}, {
    x: 200,
    // ease: Bounce.easeOut
    // scale: 10
    // y: 100,
});


TweenMax.fromTo('.box_02', 3, {
    // x: 0
    y: 0
}, {
    y: 200,
    // ease: Bounce.easeOut
    // scale: 10
    // y: 100,
});