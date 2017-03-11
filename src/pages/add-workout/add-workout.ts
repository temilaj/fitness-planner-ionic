import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';

@Component({
    selector: 'page-add-workout',
    templateUrl: 'add-workout.html',
    providers: [WorkoutService]
})
export class AddWorkoutPage{
    title: string;
    note: string;
    type: string;
    result: any;
    

    constructor(public navCtrl: NavController, private _workoutService: WorkoutService){
    }

    onSubmit(){
        let workout ={
            title: this.title,
            note: this.note,
            type: this.type,
        }
        console.log(workout);
        this._workoutService.addWorkout(workout).subscribe(data => {
            this.result = data;
        },
        err => console.log(err),
        () => console.log('Workout Added'));
    }
}