import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ExamDetailsPage } from '../exam-details/exam-details.page';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  @Input() examList: any[];
  @Input() showEditBtn: boolean;
  @Input() showDeleteBtn: boolean;
  @Input() showAcceptBtn: boolean;
  @Input() showSeekerDetails: boolean;

  constructor(public alertController: AlertController, public modalController: ModalController) { }

  ngOnInit() {}

  onShowMoreBtnClick(examID){
    //filter exam details based on examID
    this.modalController.create({
      component: ExamDetailsPage,
      //componentProps: {exam: }<--- pass filtered exam here as parameter
    }).then(modalEl => {
      modalEl.present();
    });
  }

  onShowConfirm(examID) {
    this.alertController.create({
      header: 'Delete Exam',
      message: 'Are you sure that you want to delete this exam?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: (examID) => {
            //Service call to delete exam
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
