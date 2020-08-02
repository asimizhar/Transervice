import { Component, OnInit } from '@angular/core';
import { Transporter } from 'src/app/transporter';
import { TransporterDataService } from 'src/app/service/transporter/transporter-data.service';
import { MatDialog } from '@angular/material';
import { TransportFormComponent } from '../transport-form/transport-form.component';


const transporters: Transporter[]=[
//   {id: 1, name: 'Ahmad Asim',detail: 'Student of KOE', picByte:''},
//   {id: 2, name: 'Muhammad Hasyir',detail: 'Student of KICT', picByte:''},
];

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  
  selectedTransporter: Transporter;
  action: string;


  tableColumns: string[] = ['picture','name','detail'];
  tableSource = transporters;

  constructor(private transporterService:TransporterDataService, private dialog:MatDialog) { }

  ngOnInit() {

    this.transporterService.getTransporters().subscribe(
      response =>{
        console.log(response);
        this.tableSource=response;
      }
    );
}


addTransporter() {
  this.dialog.open(TransportFormComponent,{
    height: '330px',
    width: '500px',
    disableClose:true,
    autoFocus:true,
  });
}
}
