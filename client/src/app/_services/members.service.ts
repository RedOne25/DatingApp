import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';


@Injectable({
  providedIn: 'root'
})

export class MembersService {
apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  getMembers(): Observable<Member[]>
  {
    return this.http.get<Member[]>(this.apiUrl + 'users');
  }

  getMember(username: string){
    return this.http.get<Member>(this.apiUrl + 'users/' + username);
  }
}