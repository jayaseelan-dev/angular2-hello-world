import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Corporate Management System';
	user = {};

	onLogin() {
		console.log(this.user);
	}
}
