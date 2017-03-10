import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {
  constructor(public navCtrl: NavController, private _wokoutservice: WorkoutService) {
  }

  // getWorkouts(){
  //   this._wokoutserive
  // }
}
