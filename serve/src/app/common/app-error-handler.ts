import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error){
        alert('Unable to delete the post')
        console.log(error);
    }
}