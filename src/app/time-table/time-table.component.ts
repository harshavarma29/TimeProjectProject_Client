import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent implements OnInit {

  subjectDetailsData: any;
  endpointUrl = 'https://localhost:8003/timetable/details';

  constructor(private httpClient: HttpClient) {}

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
            return subjectDetails;
        })
    ).subscribe(responseData => this.subjectDetailsData = responseData)
  }

}
