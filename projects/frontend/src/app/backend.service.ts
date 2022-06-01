import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HelloRequest, HelloResponse } from 'ng-gcp-backend/src/api';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public async getMessage(name: string): Promise<string> {
    const req = { name } as HelloRequest;
    const res = await fetch(`${environment.backendUrl}/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req, null, 4),
    });
    const json = await res.json() as HelloResponse;
    return json.message;
  }
}
