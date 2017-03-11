import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts'

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html',
  providers: [WorkoutService]
})
export class WorkoutDetailsPage{
    nav: NavController;
    _navParams : NavParams;
    workout : any;
    result: any;

    constructor(public navCtrl: NavController, public navParams : NavParams, private _workoutService:WorkoutService){
        this.nav = navCtrl;
        this._navParams = navParams;
        this.workout = this._navParams.get('workout');

    }
    deleteWorkout(id){
        console.log(id);
        this._workoutService.deleteWorkout(id).subscribe(data => {
            this.result = data;
        },
        err => console.log(err),
        () => console.log('Workout deleted'));

        this.navCtrl.setRoot(WorkoutsPage);
    }
}