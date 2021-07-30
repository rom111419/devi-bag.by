import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { catchError, take } from 'rxjs/operators';

@Component({
  selector: 'pu-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  form = this.fb.group({
    file: [''],
  });
  isSent: boolean | string = 'not sent yet';

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  sendFile() {
    this.isSent = false;
    let formData = new FormData();
    formData.append('file', this.form.value.file);

    return this.http.post(
      `${environment.apiLink}/devi-bag-tags/upload`,
      formData,
      {params: new HttpParams()},
    ).pipe(take(1), catchError(err => {
      throw err = 'not sent for server';
    })).subscribe(value => {
      this.isSent = true;
    });
  }
}
