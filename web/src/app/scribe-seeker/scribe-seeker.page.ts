import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scribe-seeker',
  templateUrl: './scribe-seeker.page.html',
  styleUrls: ['./scribe-seeker.page.scss'],
})
export class ScribeSeekerPage implements OnInit {
  examList = []; //  integrate with service

  constructor() { }

  ngOnInit() {
  }

}
