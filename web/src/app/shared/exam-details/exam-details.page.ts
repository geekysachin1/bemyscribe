import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.page.html',
  styleUrls: ['./exam-details.page.scss'],
})
export class ExamDetailsPage implements OnInit {
  @Input() exam;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onCloseBtnClick() {
    this.modalController.dismiss();
  }

}
