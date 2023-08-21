/* track and count errors for <ErrorCount>  */
export function errorHandler(error: any, component: any, errorSource: any) {

    // let errorsCount = 0
    let errorMessage = error;
    let componentName = component.$.type.__name;
    let componentPath = component.$.vnode.type.__file;

    console.log(errorMessage);

    // ConsoleErrorsData.count.value += 1;
    // console.log('errorsCount: ', ConsoleErrorsData.count.value);

    return true;
}
