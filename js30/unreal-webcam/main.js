const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) 
        .then(localMediaStream => {
            console.log(localMediaStream);
            // video.src = window.URL.createObjectURL(localMediaStream);
            video.srcObject=localMediaStream;
            video.play();
        })
            .catch(err => {
                console.error(`OH no !!`, err);
            });
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        const pixels = ctx.getImageData(0,0,width,height);
        console.log(pixels);
    },16);
    

}

function takePhoto() {
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome man" />`;
    strip.insertBefore(link, strip.firstChild);
}



getVideo();

video.addEventListener('canplay', paintToCanvas);