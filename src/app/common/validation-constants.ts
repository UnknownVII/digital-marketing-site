import { FormControl } from '@angular/forms';

export class ValidationConstants {
  public static min(inputLabel: string, control: FormControl): string {
    return `${inputLabel} must be at least ${control.errors?.['min']?.requiredLength} characters long.`;
  }

  public static max(inputLabel: string, control: FormControl): string {
    return `${inputLabel} must be at most ${control.errors?.['max']?.requiredLength} characters long.`;
  }

  public static required(inputLabel: string): string {
    return `${inputLabel} is required.`;
  }

  public static requiredTrue(inputLabel: string): string {
    return `${inputLabel} must be checked.`;
  }

  public static email(inputLabel: string): string {
    return `${inputLabel} must be a valid email address.`;
  }

  public static minlength(inputLabel: string, control: FormControl): string {
    return `${inputLabel} must be at least ${control.errors?.['minlength']?.requiredLength} characters long.`;
  }

  public static maxlength(inputLabel: string, control: FormControl): string {
    return `${inputLabel} must be at most ${control.errors?.['maxlength']?.requiredLength} characters long.`;
  }

  public static pattern(inputLabel: string): string {
    return `${inputLabel} must be valid`;
  }

  public static nullValidator(inputLabel: string): string {
    return `${inputLabel} must be valid.`;
  }

  public static uppercase(inputLabel: string): string {
    return `${inputLabel} must contain at least one uppercase letter (A-Z).`;
  }

  public static lowercase(inputLabel: string): string {
    return `${inputLabel} must contain at least one lowercase letter (a-z).`;
  }

  public static number(inputLabel: string): string {
    return `${inputLabel} must contain at least one number (0-9).`;
  }

  public static mismatch(): string {
    return 'Passwords do not match.';
  }

  public static taken(value: string): string {
    return `${value} is already taken`;
  }

  public static emoji(): string {
    return `Emojis are not allowed in this field.`;
  }
}
