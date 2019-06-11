window.onload = function(e){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var controls = document.getElementById("controls");
    var animateButton = document.getElementById("animateButton");

    var sky = new Image();
    var nearTree = new Image();
    var grass = new Image();
    var grass2 = new Image();
    var tree = new Image();

    var paused = true;
    var lastTime = 0;
    var lastFpsUpdate = {time: 0, value: 0};
    var fps = 60;

    var skyOffset = 0;
    var grassOffset = 0;
    var treeOffset = 0;
    var nearTreeOffset = 0;

    var TREE_VELOCITY = 20;
    var FAST_TREE_VELOCITY = 40;
    var SKY_VELOCITY = 8;
    var GRASS_VELOCITY = 75;

    function erase(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    function draw(){

        skyOffset = skyOffset < canvas.width ? skyOffset + SKY_VELOCITY/fps : 0;
        grassOffset = grassOffset < canvas.width ? grassOffset + GRASS_VELOCITY/fps : 0;
        treeOffset = treeOffset < canvas.width ? treeOffset + TREE_VELOCITY/fps : 0;
        nearTreeOffset = nearTreeOffset < canvas.width ? nearTreeOffset + FAST_TREE_VELOCITY/fps : 0;

        context.save();
        context.translate(-skyOffset, 0);
        context.drawImage(sky, 0, 0);
        context.drawImage(sky, sky.width-2, 0);
        context.restore();

        context.save();
        context.translate(-treeOffset, 0);
        context.drawImage(tree, 100, 240);
        context.drawImage(tree, 1100, 240);
        context.drawImage(tree, 400, 240);
        context.drawImage(tree, 1400, 240);
        context.drawImage(tree, 700, 240);
        context.drawImage(tree, 1700, 240);
        context.restore();

        context.save();
        context.translate(-nearTreeOffset, 0);
        context.drawImage(nearTree, 250, 220);
        context.drawImage(nearTree, 1250, 220);
        context.drawImage(nearTree, 800, 220);
        context.drawImage(nearTree, 1800, 220);
        context.restore();

        context.save();
        context.translate(-grassOffset, 0);
        context.drawImage(grass, 0, canvas.height-grass.height);
        context.drawImage(grass, grass.width -5, canvas.height);
        context.drawImage(grass2, 0, canvas.height - grass2.height);
        context.drawImage(grass2, grass2.width, canvas.height-grass2.height);
        context.restore();


    }

    function calculateFps(now){
        var fps = 1000 / (now - lastTime);
        lastTime = now;
        return fps;
    }

    function animate(now){
        if(now === undefined){
            now = +new Date;
        }

        fps = calculateFps(now);

        if(!paused){
            erase();
            draw();
        }

        requestNextAnimationFrame(animate);
    }

    animateButton.onclick = function(e){
        paused = !paused;
        if(paused){
            animateButton.value = "点我开始";
        }else{
            animateButton.value = "点我暂停";
        }
    };


    tree.src = "../images/smalltree.png";
    nearTree.src = "../images/tree-twotrunks.png";
    grass.src = "../images/grass.png";
    grass2.src = "../images/grass2.png";
    sky.src="../images/sky.png";
    sky.onload = function(e){
        draw();
    };

    requestNextAnimationFrame(animate);
};
