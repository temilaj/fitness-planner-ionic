import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage{
    nav: NavController;
    _navParams : NavParams;
    workout : any;
    constructor(public navCtrl: NavController, public navParams : NavParams){
        this.nav = navCtrl;
        this._navParams = navParams;
        this.workout = this._navParams.get('workout');

    }
}