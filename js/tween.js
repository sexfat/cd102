console.log("index ok");

function section01() {
    TweenMax.fromTo(['.box_01', '.box_02'], 3, {
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
        repeat: 1,
        yoyo: true,
        rotationZ: 180, //旋轉
        transformOrigin: 'center top' //定位點
        // repeatDelay : 1
    });


    TweenMax.fromTo('.box_05', 4, {
        x: 0
    }, {
        bezier: {
            // curviness: 1.25,
            values: [{
                x: 100,
                y: 200
            }, {
                x: 250,
                y: 400
            }, {
                x: 500,
                y: 800
            }, {
                x: 0,
                y: 0
            }],
            // autoRotate: true
        },
    });


    TweenMax.to('.box_06', 1, {
        x: 300,
        repeat: 2
    });
    TweenMax.from('.box_07', 1, {
        x: 300,
        repeat: 2
    });

    //set

    TweenMax.set('.box_set', {
        x: 200,

    });

    TweenMax.set('.box_class01', {
        backgroundColor: '#333',
        fontSize: 30,
        borderRadius: "10% 10%",
    });

    TweenMax.set('.box_class02', {
        className: "+=box10"
    });

}

// section01();
console.log("section_01 ok");



var _btn = $(".section02 .btn");

_btn.on('click', function () {
    TweenMax.staggerFromTo('.section02 .box', 1, {
        scale: 1.4,
        alpha: 0
    }, {
        scale: 1,
        alpha: 1,
        ease: Elastic.easeOut
    }, 0.2);
});

var tl = new TimelineMax({
    repeat: 2,
    repeatDelay: 1,
    yoyo: true,
    onComplete: action 
});

tl.to('.box_13', 1, {
    x: 100
}).to('.box_14', 1, {
    y: 40
}).to('.box_15', 1, {
    x: 20,
    y: 150
});

function action(){
    var tl_01 = new TimelineMax({
        repeat: 2,
        yoyo: true
    });

    var tween01 = TweenMax.to('.box_16', 1, {
        x: 100
    });
    var tween02 = TweenMax.to('.box_17', 1, {
        x: 200
    });
    tl_01.add(tween01);
    tl_01.add(tween02);
}