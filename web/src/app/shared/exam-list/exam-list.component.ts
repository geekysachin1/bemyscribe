import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  showConfirm(examID) {
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
