import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  SERVER_URL: string = "https://mediauploaduat.oyespace.com";

  constructor(private httpClient: HttpClient) { }


  public upload(data, userId) {
    let uploadURL = `${this.SERVER_URL}/oyeliving/api/V1/association/upload`;

    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({
        'X-Champ-APIKey': '1FDF86AF-94D7-4EA9-8800-5FBCCFF8E5C1'
      })
    }).pipe(map((event) => {

      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        case HttpEventType.Response:
          return { status: event.statusText, message: event.status, filePath: event.body };
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}
