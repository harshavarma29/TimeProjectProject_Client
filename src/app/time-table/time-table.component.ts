import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent implements OnInit {

  subjectDetailsData: any;//this.subjectService.getSubjectDetails();
  endpointUrl = 'https://localhost:8003/timetable/details';

  constructor(private subjectService: SubjectService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get(this.endpointUrl+'/get')
    .pipe(
        map(responseData => {
            const subjectDetails = []
            for(const key in responseData) {
                if(responseData.hasOwnProperty(key)) {
                    subjectDetails.push({ ...(responseData as any)[key] })
                }
            }
            console.log('response init --> ');
            console.log(subjectDetails);
            return subjectDetails;
        })
    )
    .subscribe(responseData => this.subjectDetailsData = responseData)
      }

}
