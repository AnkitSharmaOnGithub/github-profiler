import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
    providedIn : 'root'
})

export class DataService{
    constructor(private http: HttpClient){}

    fetchUserDetails(username : string){
        return this.http.get('https://api.github.com/users/'+username)
        .pipe(
            map(response => {
            // console.log(response);
            let userDataArray = response;
            return userDataArray;
        }),
        catchError(errorRes => {
            return throwError(errorRes);
          })
        )
    }


    fetchUserRepos(username : string){
        return this.http.get(`https://api.github.com/users/${username}/repos`)
        // .pipe(
        //     map(response => {
        //         const reposData = [];
        //         for(let key in response){
        //             reposData.push({id : key, ...response[key]});
        //         }

        //         return reposData;
        //     })
        // )
    }

}