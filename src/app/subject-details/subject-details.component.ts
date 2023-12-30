import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.css'
})
export class SubjectDetailsComponent {

  scheduleDetails = this.sujectService.getInitialState();
  startTime: any;
  endTime: any;

  constructor(private sujectService: SubjectService) {}

  addTeacher = () => {
    this.scheduleDetails.teachers.push({
      "name": "",
      "subject": ""
    });
  }

  addClass = () => {
    this.scheduleDetails.batches.push({
      "className": "",
      "subjects": [
        {
          "name": "",
          "hours": 0
        }
      ]
    });
  }

  addSubject = (i: any) => {
    this.scheduleDetails.batches[i].subjects.push({
      "name": "",
      "hours": 0
    });
  }
  
  addDetails = () => {
    console.log("teacher details here")
    console.log(this.scheduleDetails)
    this.sujectService.addDetails(this.scheduleDetails);
  }

  onChangeBreakStartTime = (event: Event) => {
    const startTime = event.target as HTMLInputElement;
    this.startTime = startTime.value;
    this.scheduleDetails.breakDuration = `${this.startTime}-${this.endTime}`;
  }

  onChangeBreakEndTime = (event: Event) => {
    const endTime = event.target as HTMLInputElement;
    this.endTime = endTime.value;
    this.scheduleDetails.breakDuration = `${this.startTime}-${this.endTime}`;
  }

}
