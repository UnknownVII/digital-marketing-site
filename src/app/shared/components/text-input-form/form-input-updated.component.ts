import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationConstants } from '../../../common/validation-constants';

const INPUT_TYPE_DATE = 'date';

@Component({
  selector: 'app-form-input-updated',
  templateUrl: './form-input-updated.component.html',
  styleUrls: ['./form-input-updated.component.scss'],
  standalone: false,
})
export class FormInputUpdatedComponent implements OnInit {
  @Input() inputLabel: string = '';
  @Input() restrictInputType: string = 'none';
  @Input() inputId: string = '';
  @Input() inputIcon?: string;
  @Input() inputType: string = 'text';
  @Input() inputTips?: string;
  @Input() maxLength: number | string | null;
  @Input() tabIndex: number = 0;
  @Input() optionData: any = [];
  @Input() isFlex: boolean = true;
  @Input() isReadOnly: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() inputPlaceholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() control2: FormControl = new FormControl();
  @Input() customErrorValidation?: string = '';
  @Output() hasSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() hasRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Output() isValid: EventEmitter<any> = new EventEmitter<any>();

  @Input() typeFigure: string = 'default';
  hidePassword() {
    // Logic to hide password
    this.showPassword = false; // Assuming showPassword is a boolean property
  }
  formErrors: string = '';
  validationMessage: any = '';
  showClearButton: boolean = false;
  showClearButtonMain: boolean = false;
  showHint: boolean = false;
  showPassword: boolean = false;
  holdPrevious: any = -1;
  choiceActive: boolean = false;
  choiceSelect: any[] = [];
  selectActive: boolean = false;
  isSearch: boolean = false;
  isLabelFocused: boolean = false;
  isAutoComplete: boolean = false;

  inputElement: any;
  inputElementOption: any;
  startDate: string = '';
  endDate: string = '';
  isRequired: boolean = false;
  minDate = new Date(1300, 0, 1);
  constructor(
    private _elementRef: ElementRef,
    private _cd: ChangeDetectorRef,
    private _renderer: Renderer2
  ) {
    this.maxLength = null;
  }

  ngOnInit(): void {
    if (this.isFlex) {
      this._renderer.setStyle(this._elementRef.nativeElement, 'flex-grow', '1');
      this._renderer.setStyle(this._elementRef.nativeElement, 'width', '100%');
    }

    if (this.inputType === INPUT_TYPE_DATE) {
      this.isRequired = true;
    }
  }

  public validateFormControl() {
    if (
      this.control &&
      !this.control.valid &&
      (this.control.touched || this.control.dirty || this.control.value !== '')
    ) {
      let message: any = '';
      if (this.validationMessage) {
        message = this.validationMessage;
      } else {
        message = {
          min: ValidationConstants.min(this.inputLabel, this.control),
          max: ValidationConstants.max(this.inputLabel, this.control),
          required: ValidationConstants.required(this.inputLabel),
          requiredTrue: ValidationConstants.requiredTrue(this.inputLabel),
          email: ValidationConstants.email(this.inputLabel),
          minlength: ValidationConstants.minlength(
            this.inputLabel,
            this.control
          ),
          maxlength: ValidationConstants.maxlength(
            this.inputLabel,
            this.control
          ),
          pattern: ValidationConstants.pattern(this.inputLabel),
          nullValidator: ValidationConstants.nullValidator(this.inputLabel),
          uppercase: ValidationConstants.uppercase(this.inputLabel),
          lowercase: ValidationConstants.lowercase(this.inputLabel),
          number: ValidationConstants.number(this.inputLabel),
          mismatch: ValidationConstants.mismatch(),
          taken: ValidationConstants.taken(this.control.value),
          emoji: ValidationConstants.emoji(),
        };
      }

      for (const errKey in this.control.errors) {
        if (errKey) {
          try {
            this.formErrors = message[errKey];
          } catch (error) {
            /* empty */
          }
        }
      }
    } else {
      if (this.customErrorValidation != '') {
        this.formErrors = this.customErrorValidation ?? '';
      } else {
        this.formErrors = '';
      }
    }
  }

  ngAfterViewInit() {
    this.inputElement = this._elementRef.nativeElement.querySelector(
      `#${this.inputId}`
    ) as HTMLInputElement;
    this._cd.detectChanges();
  }

  get value() {
    return this.control.value;
  }

  set value(value: string) {
    this.control.setValue(value);
  }

  removeValue() {
    this.hasRemoved.emit();
    this.control.setValue('');
    setTimeout(() => {
      this.showClearButton = false;
    }, 250);
    this.showClearButtonMain = false;
    this.validateFormControl();
  }

  handleInputOption() {
    this.inputElementOption = this._elementRef.nativeElement.querySelector(
      `#${this.inputId}-option`
    ) as HTMLInputElement;

    if (this.choiceSelect[this.holdPrevious] == false) {
      return;
    }

    if (this.choiceActive) {
      // setTimeout(() => {
      //   this.choiceActive = false;
      //   setTimeout(() => {
      //     this.selectActive = false;
      //   }, 250);
      // }, 100);
      setTimeout(() => {
        this.selectActive = false;
        setTimeout(() => {
          this.choiceActive = false;
        }, 20);
      }, 250);
    } else if (!this.choiceActive) {
      this.choiceActive = true;
      this.control.markAsUntouched(); // to remove validation error
      this.selectActive = true;
    }
  }

  handleInput(): void {
    if (this.inputType === 'number') {
      return;
    } else if (
      (this.inputId.includes('password') || this.inputId.includes('socMed')) &&
      this.control.valid
    ) {
      this.hasSelected.emit();
    }

    // if (this.inputElement.value === '') {
    //   this.removeValue();
    // } else {
    //   this.showClearButton = true;
    //   this.showClearButtonMain = true;
    // }
  }

  handleOptionClick(indexChoice: any, item: any, event: any) {
    event.stopPropagation;
    let controlFormData = '';
    this.choiceSelect = [];

    if (item.label == 'none') {
      this.holdPrevious = indexChoice;
      this.choiceSelect[indexChoice] = true;
      this.choiceSelect = [];
      return;
    } else if (typeof item === 'object' || typeof item === 'string') {
      if (item.value && item.label) {
        controlFormData = item.label;
      } else if (item.label) {
        controlFormData = item.label;
      } else if (item.value) {
        controlFormData = item.value;
      } else if (item.name) {
        controlFormData = item.name;
      } else if (item) {
        controlFormData = item;
      }
    }
    if (controlFormData) {
      this.holdPrevious = indexChoice;
      this.control.setValue(controlFormData);
      this.hasSelected.emit();
      if (this.control.value !== '' && this.control.value !== null) {
        this.choiceSelect[indexChoice] = true;
      }
    }

    this.validateFormControl();
  }
  check(item: any) {
    this.control.setValue(item);
  }
  getCharCount(): number {
    const inputValue = this.control.value || '';
    return inputValue.length;
  }
  restrictInput(event: KeyboardEvent, inputType?: string) {
    const inputChar = event.key;

    if (inputType === 'alpha') {
      const pattern = /^[a-zA-Z\s]*$/;
      if (
        !pattern.test(inputChar) &&
        event.key !== 'Backspace' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
      ) {
        event.preventDefault();
      }
    } else if (inputType === 'number') {
      const pattern = /^[0-9]*$/;
      if (
        !pattern.test(inputChar) &&
        event.key !== 'Backspace' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight' &&
        event.key !== 'Tab'
      ) {
        event.preventDefault();
      }
    } else if (inputType === 'both') {
      // Allow both alphabetic and numeric characters
      const pattern = /^[a-zA-Z0-9\s]*$/;
      if (
        !pattern.test(inputChar) &&
        event.key !== 'Backspace' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
      ) {
        event.preventDefault();
      }
    } else if (inputType === 'none') {
      /* empty */
    } else if (inputType === 'backspace') {
      /* empty */
    }
  }

  formatPhoneNumber(event: any) {
    this.inputElement = this._elementRef.nativeElement.querySelector(
      `#${this.inputId}`
    ) as HTMLInputElement;
    if (event && event.key === 'Backspace') {
      return; // Do nothing if backspace key was pressed
    }

    let phoneNumber = this.control.value.replace(/\D/g, ''); // Remove all non-digit characters
    if (phoneNumber.startsWith('0')) {
      phoneNumber = phoneNumber.slice(1);
    }
    if (phoneNumber.length > 9) {
      phoneNumber = phoneNumber.slice(0, 10); // Truncate to 10 digits
      const formattedFormControlValue = `0${phoneNumber}`;

      if (this.control.value !== formattedFormControlValue) {
        this.control.setValue(formattedFormControlValue); // Update the FormControl value
      }
      // Format input element value as (000) 000-0000
      const formattedInputElementValue = `(${phoneNumber.slice(
        0,
        3
      )}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;

      this.inputElement.value = formattedInputElementValue;
    } else {
      // Remove parentheses, spaces, and dash from input element value
      const cleanInputElementValue = phoneNumber;
      this.inputElement.value = cleanInputElementValue;
    }
  }

  addNumber() {
    const currentVal = this.control.value;
    if (currentVal && !currentVal.startsWith('0') && currentVal.length === 10) {
      this.control.setValue(`0${this.control.value}`);
    }
  }

  addProtocol() {
    const currentVal = this.control.value;
    if (
      currentVal &&
      !currentVal.startsWith('http://') &&
      !currentVal.startsWith('https://')
    ) {
      this.control.setValue(`https://${currentVal}`);
    }
  }

  removeProtocol() {
    this.inputElement = this._elementRef.nativeElement.querySelector(
      `#${this.inputId}`
    ) as HTMLInputElement;
    const inputValue = this.inputElement.value;
    if (inputValue.startsWith('https://')) {
      const newValue = inputValue.slice('https://'.length);
      this.inputElement.value = newValue;
    }
  }
  formatToIsoDate(event: any) {
    const selectedDate = event;
    this.control.patchValue(selectedDate);
  }
}
