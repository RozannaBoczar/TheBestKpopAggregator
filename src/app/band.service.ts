import { Injectable } from '@angular/core';
import { Band } from './band';
import { BANDS } from './band-mock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  constructor( private http: HttpClient) { }

  private bandsURL = 'api/bands';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getBands(): Observable<Band[]>{

    return this.http.get<Band[]>(this.bandsURL)
    .pipe(
      // tap(_ => this.log('fetched bands')),
      catchError(this.handleError<Band[]>('getBands', []))
    );
  }


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/* GET heroes whose name contains search term */
searchBands(term: string): Observable<Band[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Band[]>(`${this.bandsURL}/?name=${term}`).pipe(
    // tap(x => x.length ?
    //  //  this.log(`found heroes matching "${term}"`) :
    //   // this.log(`no heroes matching "${term}"`)),
    // catchError(this.handleError<Band[]>('searchBands', []))
  );
}


}