import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
//import { Observable }   from 'rxjs';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BasicService{
    basicUrl = "https://carotest1-4f7cf.firebaseio.com/";

    constructor(private http: Http){}

    getData(){
        return this.http.get(this.basicUrl + 'title.json')
            .map((response: Response) => response.json());
    }

    sendData(user: any){
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.basicUrl + 'data.json', body, {
            headers: headers
        })
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    getOwnData(){
        return this.http.get(this.basicUrl + 'data.json')
            .map((response: Response) => response.json());
    }

    private handleError(error: any){
        console.log(error);
        return Observable.throw(error);
    }
}