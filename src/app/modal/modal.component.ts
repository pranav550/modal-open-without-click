import { CustomService } from './../custom.service';
import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,AfterViewInit  {
  abc:string;
  @Input() count:string;
  @ViewChild('myModal', { static: true }) myModal:ElementRef;
  
  constructor(private custom:CustomService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit () {
   // setTimeout(() =>{
    //  this.myModal.nativeElement.click();;
    //}, 15000)
  }

  ngOnChanges(changes: SimpleChanges) {
   // this.abc=changes.count.currentValue
    console.log(changes.count.currentValue);
console.log(changes.count.previousValue);
this.custom.getCart.subscribe(resp=>{
  console.log(resp,"vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
  this.abc=resp
  if(resp){
    this.myModal.nativeElement.click()
  }
  
})
}

}
