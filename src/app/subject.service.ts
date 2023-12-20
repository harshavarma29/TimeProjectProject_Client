import { Injectable, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'

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

    /*getSubjectDetails = () => {
        this.httpClient.get(this.endpointUrl+'/get')
        .pipe(
            map(responseData => {
                const subjectDetails = []
                for(const key in responseData) {
                    if(responseData.hasOwnProperty(key)) {
                        subjectDetails.push({ ...(responseData as any)[key] })
                    }
                }
                console.log('response --> ');
                console.log(subjectDetails);
                return subjectDetails;
            })
        )
        .subscribe(responseData => this.subjectDetailsResponse = responseData)
        console.log("service response --> ");
        console.log(this.subjectDetailsResponse)
        return this.subjectDetailsResponse;
    }*/
    
}