import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message?: string;

  public constructor(private readonly backendService: BackendService) {}

  public async ngOnInit(): Promise<void> {
    this.message = await this.backendService.getMessage('Angular');
  }
}
