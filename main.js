nose_x = 0;
nose_y = 0;


function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function preload() {
    clown_img = loadImage("https://i.postimg.cc/VkBrXqrJ/mustache-transparent-background-24-1.jpg")
}

function draw() {
    image(video, 0, 0, 400, 350);

    fill(217, 178, 63);
    stroke(74, 98, 233);
    circle(nose_x + 30, nose_y + 30, 30)

    image(clown_img, nose_x, nose_y, 60, 60)
}

function take_snapshot() {
    save("clown.png");
}

function modelLoaded() {
    console.log("poseNet_is_lodad");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        nose_x = results[0].pose.nose.x - 175;
        nose_y = results[0].pose.nose.y - 110;

        console.log("nose x," + results[0].pose.nose.x);
        console.log("nose y," + results[0].pose.nose.y)
    }
}