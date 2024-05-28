import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";





@Component({
   selector : 'app-product',
   templateUrl : './product.component.html',
   styleUrls : ['./product.component.scss'] 
})

export class ProductComponent implements OnInit, OnDestroy{
   Name1 : string = 'Welcome'
   ProductName : string = "OPPO";
   ProductId : number = 1597455;
   ProductStatus : string = "Dispatched";
   bgColor : string = 'blue';
   infoHTML : string = '<p class="alert alert-primary">Today is Friday and this is a dummy text element to make you feel better</p>'
   
   getColor() {
      return 'gold'
   }

   isDisabled : boolean = true;

   constructor(){

   }

   ngOnInit(): void {
     setTimeout(() => {
      this.isDisabled = false;
     }, 5000);
   }

   ngOnDestroy(): void {
      
   }

   onKeyUp(eve : Event){
      console.log((eve.target as HTMLInputElement).value)
   }

   onAdd(name : HTMLInputElement){
      console.log(name.value)
   }

   info !: string;
   count: number = 0;
   @ViewChild('clickBtn') clickBtnRef !: ElementRef;

   onAddInfo(){
      let val = this.clickBtnRef.nativeElement.value
      this.info = val;
      if (this.count < 5) {
         this.count = this.count + 1;
      }
   }

   onRemoveInfo(){
      if (this.count > 0) {
         this.count = this.count - 1;
      }
   }

   @ViewChild('inputcontrol') inputcontrolRef !: ElementRef

   twoway : string = 'angular';

   // twoway !: string 
   
   ontwowaybinding(){
      // console.log(this.inputcontrolRef.nativeElement.value)

      let val1 = this.inputcontrolRef.nativeElement.value;
      this.twoway = val1
   }

}