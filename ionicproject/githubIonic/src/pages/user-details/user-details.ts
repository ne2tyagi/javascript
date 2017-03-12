import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { User } from '../../models/user';
import {GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
	login: string;
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
  	this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
