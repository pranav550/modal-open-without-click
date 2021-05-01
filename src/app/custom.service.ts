import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  resp1= new BehaviorSubject("");
    getCart=this.resp1.asObservable();
}
