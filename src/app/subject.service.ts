import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class SubjectService {

    subjectDetailsResponse: any;
    endpointUrl = 'https://localhost:8003/timetable/details';

    constructor(private httpClient: HttpClient) {}

    getInitialState() {
        return {
            trainerName: '',
            subjectName: '',
            subjectDurationFrom: '',
            subjectDurationTo: '',
            classStartTime: '',
            classEndTime: '',
            classMode: '',
            classRoom: '',
            term: 0,
            batch: '',
            attendanceType: ''
        }
    }

    addSubjectDetails = (subjectDetails: any) => {
        this.httpClient.post(this.endpointUrl+'/add', subjectDetails)
        .subscribe(responseData => {
            console.log(responseData)
            alert("Subject details added successfully")
        })
    }
    
}