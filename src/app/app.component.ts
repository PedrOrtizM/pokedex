import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from './pokedex/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public isLoading = false;
  constructor(private cdr: ChangeDetectorRef, private loadingService: LoadingService) { }
  
  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(isLoading => {
      this.isLoading = isLoading;
      this.cdr.detectChanges();
    });
  }

}
