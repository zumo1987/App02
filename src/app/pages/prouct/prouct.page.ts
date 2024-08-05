import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton,IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prouct',
  templateUrl: './prouct.page.html',
  styleUrls: ['./prouct.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonBackButton,IonGrid,IonCol,IonRow]
})
export class ProuctPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
