import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.css'
})
export class SubjectDetailsComponent {

  subjectDetails = this.sujectService.getInitialState();

  constructor(private sujectService: SubjectService) {}

  addSubjectDetails = () => {
    this.sujectService.addSubjectDetails(this.subjectDetails);
    this.subjectDetails = this.sujectService.getInitialState();
  }

}
