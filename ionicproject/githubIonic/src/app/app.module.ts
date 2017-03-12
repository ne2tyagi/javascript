import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details'

import { GithubUsers } from '../providers/github-users';

@NgModule({
	declarations: [
		MyApp,
		UsersPage,
		UserDetailsPage,
		ReposPage,
		OrganisationsPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents:[
		MyApp,
		UsersPage,
		UserDetailsPage,
		ReposPage,
		OrganisationsPage
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [ GithubUsers ] //added GithubUsers provider
})
export class AppModule {}
