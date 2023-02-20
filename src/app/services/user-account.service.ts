import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService { 

  constructor(private http: HttpClient) { }

  getAllUserAccounts():Observable<any> {
    return this.http.get('http://localhost:8080/mts/user-accounts');
  }
}
