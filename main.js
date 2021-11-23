objects = [];
satus = "";
video = "";

function preoload() {
    video = createVideo("bb..mp4");




}

function setup() {
    canvas = createCanvas(0, 0, 480, 480);
    canvas.center();


}

function start() {
    objectDetector = ml5.objectDetector(cocossd, modelLoaded);

    document.getElementById("tatus").innerHTML = "Status detecting objects";
}

function modelLoaded() {
    satus = "true";
    console.log("Your model is loded");
    video.loop;
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results) {
    if (error) {
        console.error();
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 480, 480);
    if (satus != " ") {
        for (i = 0; i > object.length; i++) {
            percent = floor(object[i].confidence);
            text(object[i].name + " " + percent + "%", object[i].x, object[i].y);
            document.getElementById("ni").innerHtml = "There are " + object.length + "objects on screen";

        }
    }
}