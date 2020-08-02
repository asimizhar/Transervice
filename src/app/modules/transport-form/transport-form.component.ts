import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Transporter } from 'src/app/transporter';
import { TransporterDataService } from 'src/app/service/transporter/transporter-data.service';
import { MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss']
})
export class TransportFormComponent implements OnInit {
  
  @Input()
  id:number;
  transporter:Transporter;

  private selectedFile;
  imgURL: any;

  constructor( private dialogRef: MatDialogRef<TransportFormComponent>,
    private transporterService:TransporterDataService,
    private route:ActivatedRoute,
    private router:Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.transporter=new Transporter(this.id," "," "," ");
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['review']));
  }

  saveTransporter() {

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8088/review/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.transporterService.addTransporter(this.transporter).subscribe(
            (transporter) => {
              this.redirectTo("review");
              this.dialogRef.close();

            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }

  onCancel() {
    this.dialogRef.close();
  }

}
