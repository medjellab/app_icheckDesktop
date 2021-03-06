import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { api } from 'src/shared';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    getUser(user: User) {
        return this.http.post(`${api}users`, user)
            .pipe(
                tap(_ => this.log('login')),
                catchError(this.handleError('login', []))
            );
    }

    /*login(data) {
        return this.http.post<any>(`${API}`, data)
          .pipe(
            tap(_ => this.log('login')),
            catchError(this.handleError('login', []))
          );
      }*/

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
    }

}