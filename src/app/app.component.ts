import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature='recipe';
  ngOnInit(){
     firebase.initializeApp({
      apiKey: "AIzaSyDF8flm_XMxJANc8MWpj-uoG8F7y9QagcQ",
      authDomain: "ng-recipe-book-5261f.firebaseapp.com"
     });
  }
 onNavigate(feature:string){
  this.loadedFeature=feature;
 }
 
}
