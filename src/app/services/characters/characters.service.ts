import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Item } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl: string = environment.marvelApi.url;
  constructor(public http: HttpClient) { }

  getAllCharacter(search: string): Observable<Item[]> {
    let path: string = '/v1/public/characters'
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
            items.push({ title: result.name, text: result.description, image: result.thumbnail.path, extension: `.${result.thumbnail.extension}`,id: result.id })
          })
          return items;
        }),
        catchError(() => [])
      )
  }

  getCharacterById(id: string): Observable<Item> {
    let path: string = `/v1/public/characters/${id}`
    let fullUrl: string = `${this.baseUrl}${path}`
    let params = new HttpParams();
    params = params.append('apikey', environment.marvelApi.apikey);
    params = params.append('limit', 100);
    const options = { params: params }
    return this.http.get<Item>(fullUrl, options)
      .pipe(
        map((res: any) => {
          let items: Item[] = []
          const result: any = res.data.results[0]
          items.push({ title: result.name, text: result.description, image: result.thumbnail.path, extension: `.${result.thumbnail.extension}`,id: result.id });
          return items[0]
        }),
        catchError(() => [])
      )
  }
}
