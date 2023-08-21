import { reloadPage } from "../global/helpers/reloadPage";

export function windowErrorHandler(message: any, url: any, line: any, col: any, error: any) {
    const reloadDelay = 5000;
    let timerStart = 1000;
    const messageText = 'У тебя ошибки, бро. Перезагружаю страницу через';

    console.log(messageText);
    console.log('message', message);

    // прогонять циклом
    // let intervalID = setInterval(() => {
    //     let timeDifference = (reloadDelay - timerStart) / 1000;

    //     console.log(`${messageText} ${timeDifference} ...`);
    //     timerStart += 1000;

    //     if (timeDifference <= 1) {
    //         clearInterval(intervalID);
    //     }
    // }, 1000)

    // setTimeout(() => {
    //     reloadPage()
    // }, reloadDelay)

}
