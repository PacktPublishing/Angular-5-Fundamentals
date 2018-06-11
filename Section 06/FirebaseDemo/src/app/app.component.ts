import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';


@Component({
	template : `to be defined`
})
export class AppComponent {
	constructor(private angularFireDatabase: AngularFireDatabase) {
		this.angularFireDatabase
			.object('/book')
			.valueChanges()
			.subscribe(data => {
				console.log('our book', data);
			});
	}
}