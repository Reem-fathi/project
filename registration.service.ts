import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8081/auth/login",user)

  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8081/auth/register",user);

  }
  handleError(error:Response){
    
  }
}
