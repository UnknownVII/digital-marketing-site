import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';
import { Subscription } from 'rxjs';
import { PopUpService } from '../../../services/pop-up/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  standalone: false,
})
export class PopUpComponent implements OnInit {
  @Input() text: string = '';
  showPopUp: boolean = false;
  private popUpSubscription: Subscription | undefined;

  constructor(private _popUp: PopUpService) {}

  ngOnInit(): void {
    this.popUpSubscription = this._popUp.popUp$.subscribe((value: boolean) => {
      this.showPopUp = value;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the loading$ observable to prevent memory leaks
    if (this.popUpSubscription) {
      this.popUpSubscription.unsubscribe();
    }
  }

  closePopUp(): void {
    this._popUp.hidePopUp();
    this._popUp.popUpValueChange('close');
  }

  confirmActionAndClose(): void {
    this._popUp.hidePopUp();
    this._popUp.popUpValueChange('confirm');
  }
}
