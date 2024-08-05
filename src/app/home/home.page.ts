import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonBackButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import{ eyeOutline } from 'ionicons/icons' ;
import{ RouterLink } from '@angular/router' ;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonBackButton, IonGrid, IonRow, IonCol],
})
export class HomePage {
  constructor() {
    addIcons ({eyeOutline}) ;
  }
}