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
    y: 10,
    // ease: Bounce.easeOut
    // scale: 10
    // y: 100,
});


TweenMax.fromTo('.box_03', 1, {
    x: 0
}, {
    x: 100 
});

TweenMax.fromTo('.box_04', 1, {
    x: 0
}, {
    x: 100,
    delay: 1,
    repeat : -1,
    yoyo: true
    // repeatDelay : 1
});

