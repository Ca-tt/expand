/* class for working with errors */
export class ErrorInfo {
    constructor(isExists = false, count = 0) {
        this.isExists = ref(isExists);
        this.count = ref(count);
    }
}
let ConsoleErrorsData = new ErrorInfo();