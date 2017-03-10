import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    apiKey: string;
    constructor(private _http:Http){
        console.log('Service Connected');
    }
    
}