import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Item } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl: string = environment.marvelApi.url;
  constructor(public http: HttpClient) { }

  getAllEvents(search: string): Observable<Item[]> {
    let path: string = '/v1/public/events'
    let fullUrl: string = `${this.baseUrl}${path}`
    let params = new HttpParams();
    params = params.append('apikey', environment.marvelApi.apikey);
    params = params.append('limit', 100);
    if(search !=''){
      params =  params.append('nameStartsWith', search);
    }
    const options = { params: params }
    return this.http.get<Item[]>(fullUrl, options)
      .pipe(
        map((res: any) => {
          const results: any[] = res.data.results
          let items: Item[] = []
          results.map(result => {
            items.push({ title: result.name, text: result.description, image: result.thumbnail.path, extension: `.${result.thumbnail.extension}`, })
          })
          return items;
        }),
        catchError(() => [])
      )
  }
}


