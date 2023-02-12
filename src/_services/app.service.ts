import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { map } from "rxjs/operators"

@Injectable()
export class ApiService {
    basePath: String;

    constructor(private http: HttpClient) {
        this.basePath = environment.apiURL;
    }

    getHeader() {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/json');

        return headers;
    }
    getCore(){
        let headers = this.getHeader();
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `raw`), {
            observe: 'response',
            headers,
        })
        .pipe(map(response => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        }));
    }
    getApplications(){
        let headers = this.getHeader();
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `applications`), {
            observe: 'response',
            headers,
        })
        .pipe(map(response => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        }));
    }
    getApplication(name: any){
        let headers = this.getHeader();
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `applications/${name}`), {
            observe: 'response',
            headers,
        })
        .pipe(map(response => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        }));
    }
    getResources(){
        let headers = this.getHeader();
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `resources`), {
            observe: 'response',
            headers,
        })
        .pipe(map(response => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        }));
    }
    getResource(name: any){
        let headers = this.getHeader();
        return this.http.request('get', Location.joinWithSlash(`${this.basePath}`, `resources/${name}`), {
            observe: 'response',
            headers,
        })
        .pipe(map(response => {
            switch (response.status) {
                case 200: {
                    return response.body;
                }
            }
        }));
    }

}