import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

interface Duration {
  time: string,
  timeInMs: number
}

/*interface Gene {
  slotNum: Array<object>
}

interface Slots {
  teacherId: number,
  subject: string
}*/

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css'
})
export class TimeTableComponent implements OnInit {

  responseData: any;
  endpointUrl = 'https://localhost:8003/timetable/details/get';
  responseIds: any;
  durations: Duration[] = [];
  breakStartTime: any;
  breakEndTime: any;
  count = 0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get(this.endpointUrl+'/all-response-ids')
    .subscribe(responseData => {
      console.log("--response--")
      console.log(responseData);
      this.responseIds = responseData
    })
  }

  initializeCount = () => {
    this.count = 0;
  }

  incrementCount = () => {
    this.count++;
  }

  decrementCount = () => {
    this.count--;
  }

  fetchDetails = (event: Event) => {
    const responseId = event.target as HTMLInputElement;
    if(responseId.value != 'Select timetables') {
        this.httpClient.get(this.endpointUrl+'/'+responseId.value)
        .subscribe(responseData => this.extractData(responseData))
    }
  }

  extractData = (responseData: any) => {
    console.log("came here")
    this.responseData = responseData;
    this.getMilliSeconds(this.responseData.schoolStartTime);
    this.generateDuration(this.getMilliSeconds(this.responseData.schoolStartTime), 
                this.getMilliSeconds(this.responseData.classDuration), 
                this.responseData.slotNums.gene[0].hours);
    this.breakStartTime = this.getMilliSeconds(this.responseData.breakDuration.split('-')[0]);
    this.breakEndTime = this.getMilliSeconds(this.responseData.breakDuration.split('-')[1]);
  }

  generateDuration = (currentMs: number, hourInMs: number, classCount: number) => {
    for(let i = 0; i < classCount + 1; i++) {
      this.durations.push({
        time: this.getTime(currentMs) + '-' + this.getTime(currentMs + hourInMs),
        timeInMs: currentMs
      });
      currentMs += hourInMs;
    }
  }

  getMilliSeconds = (time: string): number => {
    const hours: number = Number(time.split(":")[0]);
    const minutes: number = Number(time.split(":")[1]);
    const hoursInMs = hours*60*60*1000;
    const secondsInMs = minutes*60*1000;
    return hoursInMs + secondsInMs;
  }

  getTime = (milliSeconds: number): string => {
    const totalMinutes: number = Math.floor(milliSeconds/(1000*60));
    const hours: number = Math.floor(totalMinutes/60);
    const minutes: number = totalMinutes%60;
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  }

}
