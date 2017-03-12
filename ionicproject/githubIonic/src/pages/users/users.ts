import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../../pages/user-details/user-details'

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
	users: User[];
  orignalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
  	githubUsers.load().subscribe(users => {
  		console.log(users);
      this.users = users;
      this.orignalUsers = users;
  	});

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }


  goToDetails(login: string){
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent){
    let term = searchEvent.target.value;
    if(term.trim() === '' || term.length <=3){
      this.users = this.orignalUsers;
    }else{
      this.githubUsers.searchUsers(term).subscribe(users => {
      console.log('users', users);
      this.users = users;
    })
    }
  }

}
