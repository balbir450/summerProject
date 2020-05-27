import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { MydialogComponent} from './mydialog/mydialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SummerProject';
constructor(public dialog: MatDialog){}

openDialog(): void {
  let dialogRef = this.dialog.open(MydialogComponent, {
   
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  
  });
}


}
