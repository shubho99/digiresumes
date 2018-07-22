import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AlertService {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, duration = 3500) {
    this.snackBar.open(message, '', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      extraClasses: ['alert', 'alert-success']
    });
  }

  message(message: string, duration = 3500) {
    this.snackBar.open(message, '', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      extraClasses: ['alert']
    });
  }

  error(message: string, duration = 3500) {
    this.snackBar.open(message, '', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      extraClasses: ['alert', 'alert-error']
    });
  }
}
