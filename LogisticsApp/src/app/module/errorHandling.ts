import {  throwError } from 'rxjs';
import {  HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler extends HttpErrorResponse{

    errorHandler(error: HttpErrorResponse){
        //assigning error properties to local variables
        let status = error.status, 
        statusTxt = error.statusText, 
        err = error.error,
        message = `Status Code: ${status}\r\n
        Status Text: ${statusTxt}\r\n
        Error: ${err}`
        //////////////^^^^^///////////////////

        //handling error response
        if(status >= 400 && status < 500){
          return throwError(message)
        }else if(status >= 500 && status < 600){
          return throwError(message)
        }
        //////////////^^^^^///////////////////
    }
}
