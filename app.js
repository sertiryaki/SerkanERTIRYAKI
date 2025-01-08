var mainimg = document.querySelector('img')
var images = [ 'image/slider/IMG-20241223-WA0011.jpg','image/slider/IMG-20241223-WA0004.jpg', 'image/slider/IMG-20241223-WA0005.jpg', 'image/slider/IMG-20241223-WA0006.jpg', 'image/slider/IMG-20241223-WA0008.jpg', 'image/slider/IMG-20241223-WA0009.jpg',  'image/slider/IMG-20241223-WA0015.jpg', 'image/slider/IMG-20241223-WA0017.jpg', 'image/slider/IMG-20241223-WA0021.jpg', 'image/slider/IMG-20241223-WA0024.jpg', 'image/slider/IMG-20241223-WA0030.jpg', 'image/slider/IMG-20241223-WA0032.jpg', 'image/slider/IMG-20241223-WA0035.jpg', 'image/slider/IMG-20241223-WA0036.jpg', 'image/slider/IMG-20241223-WA0037.jpg']
var num = 0;
const auto = true
const IntervalTime = 5000;
let slideInterval

function next() {
    num++
    if (num >= images.length) {
        num = 0;
        mainimg.src = images[num]
    } else {
        mainimg.src = images[num]
    }
}

function back() {
    num--
    if (num < 0) {
        num = images.length - 1
        mainimg.src = images[num]
    } else {
        mainimg.src = images[num]
    }
}
if (auto) {
    slideInterval = setInterval(next, IntervalTime)
}
