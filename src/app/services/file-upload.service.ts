import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MEDIA_UPLOAD_URL } from '../utils/url-constants'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor(private httpClient: HttpClient) { }

  public upload(data, userId) {

    return this.httpClient.post<any>(MEDIA_UPLOAD_URL, data, {
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
