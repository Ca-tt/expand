<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    window.onload = function () {
        /*** CONFIGURATION ***/
        let slides = {
            all: document.querySelectorAll(".slide"),
            active: document.querySelector(".slide.active"),
            count: document.querySelectorAll(".slide").length,
            activeWidth: document.querySelector(".slide.active").offsetWidth + "px",
            currentIndex: 0,
            nextIndex: 0,
        };

        let dots = {
            section: document.querySelector(".dots"),
            first: document.querySelector(".dot"),
            duplicates: "",
        };

        let arrows = {
            next: document.querySelector(".arrow.next"),
            prev: document.querySelector(".arrow.prev"),
        };

        let slideNumbers = {
            current: document.querySelector(".current-slide-number"),
            count: document.querySelector(".slides-count-number"),
        };
        /*** CONFIGURATION END ***/

        /*** SLIDER INITIALIZATION 
            1) Generate dots
            2) disable all slides and dots for the God's sake
            3) Set the first slide and dot active
            4) Enable arrows
        ***/
        function generateDots(fromDot, slidesCount) {
            for (let i = 0; i < slidesCount - 1; i++) {
                dots.duplicates = fromDot.cloneNode();
                dots.section.append(dots.duplicates);
            }
            // save dots and count after generation
            dots.count = document.querySelectorAll(".dot").length;
            dots.all = document.querySelectorAll(".dot");

            return dots.count, dots.all;
        }
        generateDots(dots.first, slides.count);

        function enableDots(dots, count) {
            for (let i = 0; i < count; i++) {
                dots[i].onclick = function () {
                    goToSlide(i);
                };
            }
        }
        enableDots(dots.all, dots.count);

        function disableSlides() {
            for (let i = 0; i < slides.count; i++) {
                slides.all[i].classList.remove("active");
                slides.all[i].classList.add("inactive");
            }
        }

        function disableDots() {
            for (let i = 0; i < dots.count; i++) {
                dots.all[i].classList.remove("active");
            }
        }

        // disable dots and slider
        // enable first slide and dot
        function sliderReset() {
            disableSlides();
            disableDots();

            slides.all[0].classList = "slide active";
            dots.first.classList.add("active");
        }
        sliderReset();

        // set number to current index + 1
        function setNumbers(currentSlideIndex) {
            slideNumbers.current.innerHTML = currentSlideIndex + 1;
            slideNumbers.count.innerHTML = slides.count;
        }
        setNumbers(slides.currentIndex);

        function enableArrows() {
            arrows.next.onclick = function () {
                changeSlide(1);
            };

            arrows.prev.onclick = function () {
                changeSlide(-1);
            };
        }
        enableArrows();
        /*** SLIDER INITIALIZATION END ***/

        /*** SLIDES CHANGE 
            1) Change slides based on next index arrows passed 
            OR based on current dot's index
            2) Check for slider's end while changing slides
            3) Update current slides text 
        ***/
        function swapSlides(currentActive, nextActive) {
            currentActive.classList = "slide inactive";
            nextActive.classList = "slide active";
        }

        function swapDots(currentActiveDot, nextActiveDot) {
            currentActiveDot.classList.remove("active");
            nextActiveDot.classList.add("active");
        }

        function updateCurrentNumber(nextSlideIndex) {
            slideNumbers.current.innerHTML = nextSlideIndex + 1;
        }

        function checkForSliderEnd(nextSlide) {
            if (nextSlide > slides.count - 1) {
                nextSlide = 0;
            } else if (nextSlide < 0) {
                nextSlide = slides.count - 1;
            }
            return nextSlide;
        }

        /*** 
            1) Set current slide to next slide,
            2) Update nextSlide index,
            3) Check if next slide is not out of slide range
            4) Update dots and numbers
        ***/

        function switchSlideIndexes(nextSlide) {
            slides.currentIndex = slides.nextIndex;
            slides.nextIndex += nextSlide;
        }

        function changeSlide(nextSlide) {
            // переключение
            switchSlideIndexes(nextSlide);

            // проверка, можно ли продолжать
            slides.nextIndex = checkForSliderEnd(slides.nextIndex);

            swapSlides(slides.all[slides.currentIndex], slides.all[slides.nextIndex]);
            swapDots(dots.all[slides.currentIndex], dots.all[slides.nextIndex]);
            updateCurrentNumber(slides.nextIndex);
        }

        function goToSlide(slideNumber) {
            disableDots();
            disableSlides();

            // на какой кружок нажали, тот и становится активным
            dots.all[slideNumber].classList = "dot active m-x-small";

            swapSlides(slides.all[slides.currentIndex], slides.all[slideNumber]);

            // приравниваю их значения, как при запуске слайдера
            // чтобы некст при нажатии на стрелочку посчитался правильно
            // текущий = следующий. А при нажатии следующий меняется
            slides.currentIndex = slideNumber;
            slides.nextIndex = slides.currentIndex;

            updateCurrentNumber(slides.nextIndex);
        }
    };
});
</script>

<template>
    <div class="container">

        <div class="slider row columns-center">

            <div class="viewport row nowrap slides is-relative">
                <div class="slide active">
                    <img class="rounded" src="https://via.placeholder.com/500x200/3afabb?text=1" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/ffbac3?text=2" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/defefa?text=3" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/abcdef?text=4" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/fedbca?text=5" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/faafcc?text=6" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/0a5a66?text=7" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/3944aa?text=8" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/482627?text=9" alt="">
                </div>
                <div class="slide">
                    <img class="rounded" src="https://via.placeholder.com/500x200/a3b9cf?text=10" alt="">
                </div>

                <!-- arrows -->
                <div class="arrows row columns-between full-width absolute-center big-font p-x">
                    <figure class="arrow prev pointer black-to-white-color-animation">&lt;</figure>
                    <figure class="arrow next pointer black-to-white-color-animation">&gt;</figure>
                </div>
            </div>

        </div>

        <!-- DOTS -->
        <div class="dots row columns-center">
            <div class="dot m-x-small"></div>
        </div>


        <!-- NUMBERS -->
        <div class="numbers row columns-center">
            <span class="current-slide-number pointer m-x-small">2</span>
            <span class="divider">/</span>
            <span class="slides-count-number pointer m-x-small">5</span>
        </div>
    </div>

    <!-- container end -->
</template>

<style src="./css/core/core.css"></style>
<style src="./css/additional/additional.css"></style>

<style lang="scss">
:root {
    --dot-size: 20px;
}

/* SLIDES */
.slide {
    display: inline-block;
}

.inactive {
    display: none;
}

/* SLIDES END */


/* DOTS */
.dot {
    width: var(--dot-size);
    height: var(--dot-size);
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
}

.dot.active {
    background-color: aqua;
}

/* DOTS END*/
</style>