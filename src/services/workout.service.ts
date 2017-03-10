import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    apiKey: string;
    workoutsUrl: string;
    constructor(private _http:Http){
        console.log('Service Connected');
        // this.apiKey = 'YOUR_API_KEY';
        // this.workoutsUrl = 'https://api.mlab.com/api/1/databases/<MY_DB>/collections/<WORKOUTS>?apiKey=YOUR_API_KEY';
        
    }

    getWorkouts(){
        return this._http.get(`${this.workoutsUrl}?apiKey=${this.apiKey}`)
            .map(res => res.json());
    }
    
}