import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  sendMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private _teachermessageSource = new Subject<string>();
  teacherMessage$ = this._teachermessageSource.asObservable();


  constructor(message:string) {
    this._teachermessageSource.next(message);
   }
}
