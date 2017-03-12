import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	//make usersPage the root or first page
	rootPage: any = UsersPage;
	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public menu: MenuController){
		this.initializeApp();

		//set our app's pages
		this.pages = [
			{ title: 'Users', component: UsersPage },
			{ title: 'Repos', component: ReposPage },
			{ title: 'Organisations', component: OrganisationsPage }
		];
	}

	initializeApp(){
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}
	openPage(page){
		this.menu.close();
		this.nav.setRoot(page.component);

	}


}