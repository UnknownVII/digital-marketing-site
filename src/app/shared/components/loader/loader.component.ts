import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: false,
})
export class LoaderComponent implements OnInit {
  @Input() text: string = '';
  showLoad: boolean = false;
  private loadingSubscription: Subscription | undefined;

  constructor(private _loader: LoaderService) {}

  ngOnInit(): void {
    this.loadingSubscription = this._loader.loading$.subscribe(
      (value: boolean) => {
        this.showLoad = value;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the loading$ observable to prevent memory leaks
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
