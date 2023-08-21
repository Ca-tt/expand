<script setup lang="ts">
import { onMounted } from 'vue';
// import { useMessage } from 'naive-ui';

// const message = useMessage()

onMounted(() => {
    /* html element collections */
    let labels = document.querySelectorAll('label');

    /* single elements */
    let password = document.querySelector('.password-text');
    let button = document.querySelector('.button');
    let range = document.querySelector('.slider');
    let lengthText = document.querySelector('.length-text');

    /* characters data */
    let uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    let lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let symbols = ["!", "@", "#", "$", "%", ":", ";", "^", "&", "?", "*", "(", ")", "{", "}", "[", "]", "-", "_", "=", "+", "~"];

    /* classNames */
    let activeClassName = 'active';

    /* label active statuses */
    let upperCaseEnabled = true;
    let lowerCaseEnabled = true;
    let numbersEnabled = true;
    let symbolsEnabled = false;

    let enables = [
        upperCaseEnabled,
        lowerCaseEnabled,
        numbersEnabled,
        symbolsEnabled
    ]
    /* label statuses (end) */
    
    for (let i = 0; i < labels.length; i++) {
        let label = labels[i];
        
        label.onclick = function () {
            label.classList.toggle("active");
            
            
            if (label.classList.contains("active")) {
                enables[i] = true;
            }

            else {
                enables[i] = false;
            }
            console.log(enables[i]);
            console.log(enables);
            arrayPush()
            console.log(enabledArrays)
        }
    }
    
    // default values
    let enabledArrays = []
    
    function arrayPush() {
        enabledArrays = []
        if (enables[0]) {
            enabledArrays.push(uppercase)
        }
        if (enables[1]) {
            enabledArrays.push(lowercase)
        }
        if (enables[2]) {
            enabledArrays.push(numbers)
        }
        if (enables[3]) {
            enabledArrays.push(symbols)
        }
    }

    // дефолтное наполнение массива с включенными массивчиками
    arrayPush()
    
    
    
    
    function randomNumber(array) {
        let randomArray = Math.floor(Math.random() * array.length)
    }
    
    let rangeLength = 16
    
    
    range.oninput = function () {
        rangeLength = range.value;
        lengthText.innerText = rangeLength;
        
    }
    function showMessage() {
        // let messageText = 'Пароль скопирован. Теперь используй его';

        /* если пароль уже хоть раз сгенерировали, показываем сообщение */
        if (password.classList.contains(activeClassName) && enabledArrays.length != 0) {
            // message.success(messageText)
            navigator.clipboard.writeText(generatedPassword);
        }
    }

    
    
    let generatedPassword = "";
    function generatePass() {
        generatedPassword = "";

        for (let i = 0; i < rangeLength; i++) {
            // рандомный индекс для рандомного массива
            let randomArray = Math.floor(Math.random() * enabledArrays.length)
            
            // получаем рандомный массив
            let enabledArray = enabledArrays[randomArray];

            let randomSymbolIndex = Math.floor(Math.random() * enabledArray.length);
            
            // получаем рандомный знак
            let randomSign = enabledArray[randomSymbolIndex];
            
            generatedPassword += randomSign;
        }
        console.log('randomPass: ', generatedPassword);
        
        password.innerHTML = generatedPassword;
    }
    

    password.onclick = () => {
        showMessage();
    }

    function makeActive(element) {
        element.classList.add(activeClassName);
    }

    /* generate password, show message */
    button.onclick = () => {
        console.log('enabledArrays: ', enabledArrays);
        

        if (enabledArrays.length == 0) {
            password.innerHTML = "Выбери хоть один массив, даунич";
        }
        else {generatePass();}
        makeActive(password);
    }


});
</script>

<template>
    <div class="background">
        <section class="generator">
            <h1 class="title">Password Generator</h1>

            <div class="password">
                <p class="password-text">CLICK GENERATE </p>
            </div>

            <div class="length">LENGTH: <span class="length-text">16</span></div>

            <div class="range">
                <div class="min">4</div>

                <input id="slider" type="range" class="slider" min="4" max="32" value="16">
                <div class="max">32</div>
            </div>


            <section class="setting">
                <p class="settings">SETTINGS</p>
                <div class="include">
                    <div class="right">
                        <h4>Include Uppercase</h4>
                    </div>
                    <div class="left">
                        <label class="label active" for="uppercase">
                            <div class="circle"></div>
                        </label>
                        <input class="input" type="checkbox" id="uppercase">
                    </div>
                </div>
                <div class="include">
                    <div class="right">
                        <h4>Include Lowercase</h4>
                    </div>
                    <div class="left">
                        <label class="label active" for="lowercase">
                            <div class="circle"></div>
                        </label>
                        <input class="input" type="checkbox" id="lowercase">
                    </div>
                </div>
                <div class="include">
                    <div class="right">
                        <h4>Include Numbers</h4>
                    </div>
                    <div class="left">
                        <label class="label active" for="numbers">
                            <div class="circle"></div>
                        </label>
                        <input class="input" type="checkbox" id="numbers">
                    </div>
                </div>
                <div class="include">
                    <div class="right">
                        <h4>Include Symbols</h4>
                    </div>
                    <div class="left">
                        <label class="label" for="symbols">
                            <div class="circle"></div>
                        </label>
                        <input class="input" type="checkbox" id="symbols">
                    </div>
                </div>
            </section>
            <div class="generatorButton">
                <button class="button">Generate Password</button>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

/* helpers */
.pointer {
    cursor: pointer;
}

.password-text {
    width: 200px;
    word-wrap: break-word;
}

.background {
    background: linear-gradient(to top, #209cff 100%, #68e0cf 200%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.generator {
    background: #0a0e31;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    color: white;
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    margin: 0 0 20px 0;
    font-size: 1.20rem;
}


.password {
    background: rgba(255, 255, 255, 0.08);
    max-width: 300px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    @extend .pointer;

    &::selection {
        color: none;
    }
}

.settings,
.length {
    text-align: left;
    font-family: 'Montserrat';
    font-weight: 800;
    margin: 8px 0 3px 8px;
    font-size: 0.60rem;
    color: rgba(255, 255, 255, 0.5);
}

.include {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    margin-bottom: 8px;
    max-width: 300px;
    height: 50px;
    padding: 0 8px 0 20px;
}

h4 {
    font-family: 'Montserrat';
    font-weight: 200;
    font-size: 15px;
    margin: 0;
}

.input {
    display: none;
}

.label {
    display: flex;
    align-items: center;
    background: #7e7e87;
    width: 45px;
    height: 25px;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s;
}

.circle {
    margin-left: 3px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: .3s;
}

.label.active {
    background: #5d68e2;
}

.active .circle {
    margin-left: 22px;
}


.button {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-family: 'Montserrat';
    font-weight: bold;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    transition: 0.1s;
}

.button:active {
    transform: translateY(-5%);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.08);
    transition: 0.1s;

}

.slider {
    width: 100%;
    height: 2px;
    cursor: pointer;
}

.slider::-moz-slider-thumb {
    appearance: none;
    color: white;
}

.range {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 0 8px 0 8px;
    height: 50px;
    justify-content: space-between;
}
</style>