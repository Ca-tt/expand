import { reactive } from 'vue';
/* save original console log for reusage */
export let originalLog = window.console.log;

export let logsCount = 0;
export let logArrays: any[] = reactive([]);

export function customLog(...messages: any[]) {
    /* подсчитываем к-во логов */
    logsCount += 1;

    logArrays.push(messages);
    originalLog(messages)
}

export function getTypeOf(data: any) {
    /* get basic type */
    let type: any = typeof (data);

    if (type == 'object') {
        type = Object.prototype.toString.call(data);
    }

    return type;
}

export function arrayFrom(object: any) {
    let array = []

    for (const [key, value] of Object.entries(object)) {
        array.push(key + ': ');
        array.push(value + ', ');
    }

    return array;
}

































// usage example
/* window.onerror = function(errorMsg){
    customErrorLogs(errorMsg);
    originalLog(event);
    return true;
} */

// let originalConsole = console;
// let originalError = console.error;
// let originalWarn = console.warn;
// let originalLog = console.log;
// let originalAssert = console.assert;

// console.errors = 0;
// console.logs = [];

// console.error = customErrorLogs;
// // console.errorLine = '';

// function customErrorLogs(text: any) {
//     console.errors += 1;
//     // console.errorLine = line;
//     originalLog('errorCount: ', console.errors);
//     // originalLog('errorLine: ', console.errorLine);
//     // originalLog('error message: ', text);
//     originalError(text);
//     return true;
// }

// function customConsoleLogs(text: any) {
//     console.logs.push({ type: 'log', text: text });
//     originalLog(console.logs);
//     originalLog(text);
// }