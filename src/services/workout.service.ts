import {Injectable} from '@angular/core';
// import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';
// import {Http, Headers, RequestOptions} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    apiKey: string;
    workoutsUrl: string;
    constructor(private _http:Http){
        console.log('Service Connected');
        this.apiKey = 'YOUR_API_KEY';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/<MY_DB>/collections/<WORKOUTS>?apiKey=YOUR_API_KEY';
    }

    getWorkouts(){
        return this._http.get(`${this.workoutsUrl}?apiKey=${this.apiKey}`)
            .map(res => res.json());
    }

    addWorkout(workout){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`${this.workoutsUrl}?apiKey=${this.apiKey}`, 
            JSON.stringify(workout), {headers: headers})
                .map(res => res.json());
    }

    deleteWorkout(workoutId){
        return this._http.delete(`${this.workoutsUrl}/${workoutId}?apiKey=${this.apiKey}`)
            .map(res => res.json());
    }
    
}