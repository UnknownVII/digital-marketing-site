import { Component, OnInit } from '@angular/core';
import { ToastItem, ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  standalone: false,
})
export class ToasterComponent implements OnInit {
  toastItems: ToastItem[] = [];

  constructor(public _toast: ToastService) {}

  ngOnInit(): void {
    this._toast.toastItems$.subscribe((items: ToastItem[]) => {
      this.toastItems = items;
    });
  }

  dismiss(toastItem: ToastItem): void {
    toastItem.toastState = false;

    setTimeout(() => {
      this._toast.dismissToast(toastItem);
    }, 200);
  }
}
