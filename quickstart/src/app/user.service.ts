import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Constants } from './constant';

@Injectable()
  export class UserService {
  userName = 'Sherlock Holmes';
  private heroesUrl = Constants.API_URL;  // URL to web API
  constructor (public http: Http) {}

  getHeroes(): Observable<any> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    private extractData(res: Response) {
      let body = res.json();
      return body;
    }

    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.log(error);
      return Observable.throw(errMsg);
    }

}
