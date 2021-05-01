import { CustomService } from './custom.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openmodal';
  initialCount: string = '#myModal';
  constructor(
    private custom:CustomService
  ){}

  mySelect(){
      this.custom.resp1.next(this.initialCount)
  }
}
