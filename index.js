function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form)
    const formData = new FormData(form);
    console.log(formData)
    fetch("https://getform.io/f/bdrynpob", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Form submission failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('An error occurred. Please try again.');
        });
}
function removeModal() {
    const modal = document.getElementById('modal').classList
    modal.remove('flex');
    modal.add('hidden')
}
function openModal() {
    const modal = document.getElementById('modal').classList
    modal.remove('hidden');
    modal.add('flex')

}
window.onclick = function (event) {
    const modal = document.getElementById('modal')
    if (event.target == modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden')
    }
}
function changeImg(imgPath) {
    document.getElementById('main-img').src = imgPath;
}

let currentIndex = 0;
const contentArray = ['./image/image@2x.png', './image/christian-joudrey-9bdt03k4ujw-unsplash.jpg', './image/jezael-melgoza-7H77FWkK_x4-unsplash.jpg']
function changeImageAndContent() {
    const mainImage = document.getElementById('main-img');
    const photos = document.querySelectorAll('.photo');

    mainImage.src = contentArray[currentIndex];

    photos.forEach((el, index) => {
        if (index === currentIndex) {
            el.classList.add('bg-[#ff3147]');
            el.classList.add('text-white');
        } else {
            el.classList.remove('bg-[#ff3147]');
            el.classList.remove('text-white')
        }
    });

    currentIndex = (currentIndex + 1) % contentArray.length;
}

setInterval(changeImageAndContent, 2000);
var listItem;
var dots;
var idx = 0;
window.addEventListener('DOMContentLoaded', function(){
    listItem = document.getElementById('list-item');
    dots = document.querySelectorAll('.dots');
})
function slide(i) {
    listItem.style.transform = `translateX(-${i * 34.5}%)`;
    dots.forEach(ele => {
        ele.classList.add('bg-black');
    })
    dots[i].classList.remove('bg-black')
    dots[i].classList.add('bg-[#ff3147]');
}
var interval;
function startSlide() {
    interval = setInterval(() => {
        slide(idx);
        idx = (idx + 1) % 3;
    }, 2000)
}
function mouseover(ele) {
    clearInterval(interval)
    ele.children[1].classList.remove('z-10')
    ele.children[1].classList.add('z-30')
}
function mouseout(ele) {
    startSlide();
    ele.children[1].classList.remove('z-30');
    ele.children[1].classList.add('z-10')
}
startSlide();