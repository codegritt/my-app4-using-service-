import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  

  private _teachermessageSource = new Subject<string>();
  teacherMessage$ = this._teachermessageSource.asObservable();

  constructor(){}

  sendMessage(message:string) {
    this._teachermessageSource.next(message);
   }
}
