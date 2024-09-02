import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading$ = new BehaviorSubject<boolean>(false);

  get isLoading(): Observable<boolean> {
    return this.loading$;
  }

  public show() {
    this.loading$.next(true);
  }

  public hide() {
    this.loading$.next(false);
  }
}