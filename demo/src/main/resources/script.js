const images = document.querySelectorAll('.slider-img');
const controls = document.querySelectorAll('.controls');
let imageIndex = 0;




function show(index) {
    if (images[imageIndex]) {
        images[imageIndex].classList.remove('active');
    }

    images[index].classList.add('active');
    imageIndex = index;
document.getElementById("myn").href=images[index].alt
    // Добавить классы next и prev для сдвига
    if (images[index + 1]) {
        images[index + 1].classList.add('next');
    }

    if (images[index - 1]) {
        images[index - 1].classList.add('prev');
    }
}
show(imageIndex);
controls.forEach((e) => {
    e.addEventListener('click', (event) => {
        // Удалить классы next и prev перед переключением
        images.forEach(img => img.classList.remove('next', 'prev'));

        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})


document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');
    const images = document.querySelectorAll('.slider-img');

    // Подсчет загруженных изображений
    let imagesLoaded = 0;

    images.forEach((image) => {
        image.addEventListener('load', function () {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                // Все изображения загружены, скрываем блок загрузки
                setTimeout(function () {
                    loader.style.display = 'none';
                    document.body.classList.remove('hidden');
                }, 500); // Добавили небольшую задержку перед скрытием блока загрузки
            }
        });
    });

    // Имитация задержки в 2 секунды (или установите нужное вам значение)
    setTimeout(function () {
        loader.style.display = 'none';
        document.body.classList.remove('hidden');
    }, 2000);
});


document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const logoImage = document.querySelector('.logo img');

    themeToggleBtn.addEventListener('click', function () {
        // Переключение темы
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Переключение иконок луны и солнца
        const moonIcon = document.querySelector('.moon-icon');
        const sunIcon = document.querySelector('.sun-icon');

        if (body.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
            logoImage.src = 'images/dark-logo.png';

        } else {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
            logoImage.src = 'images/light-logo.png';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var sliderImages = document.querySelectorAll('.slider-img');

    sliderImages.forEach(function (image) {
        image.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });
    });
});






