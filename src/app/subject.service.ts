import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class SubjectService {

    subjectDetailsResponse: any;
    breakStartTime: any;
    breakEndTime: any;
    endpointUrl = 'https://localhost:8003/timetable/details';

    constructor(private httpClient: HttpClient) {}

    getInitialState() {
        return {
            "schoolStartTime": "",
            "classesPerDay": 0,
            "classDuration": "",
            "breakDuration": "",
            "days": [
                {
                    "day": "Monday",
                    "selected": false
                },
                {
                    "day": "Tuesday",
                    "selected": false
                },
                {
                    "day": "Wednesday",
                    "selected": false
                },
                {
                    "day": "Thursday",
                    "selected": false
                },
                {
                    "day": "Friday",
                    "selected": false
                },
                {
                    "day": "Saturday",
                    "selected": false
                },
                {
                    "day": "Sunday",
                    "selected": false
                }
            ],
            "teachers": [
                {
                    "name": "",
                    "subject": ""
                }
            ],
            "batches": [
                {
                    "className": "",
                    "subjects": [
                        {
                            "name": "",
                            "hours": 0
                        }
                    ]
                }
            ]
        }
    }

    addDetails = (scheduleDetails: any) => {
        console.log("post request here");
        console.log(JSON.stringify(scheduleDetails));
        this.httpClient.post(this.endpointUrl+'/add', scheduleDetails)
        .subscribe(responseData => {
            console.log(responseData)
            alert("Subject details added successfully")
        })
    }
    
}