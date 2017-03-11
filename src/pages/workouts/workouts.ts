import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';

import { NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details'
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {
  workouts: any[];
  nav: NavController;

  constructor(public navCtrl: NavController, public navParams : NavParams, private _workoutservice: WorkoutService) {
    this.nav = navCtrl;
    
  }

  ngOnInit(){
    console.log('Init Ran..')
    this._workoutservice.getWorkouts().subscribe(workouts =>{
      this.workouts = workouts;
      console.log(this.workouts);
    })
  }

  workoutSelected(event, workout){
    this.nav.push(WorkoutDetailsPage,{
      workout: workout
    })
    console.log(workout);
  }
}