import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Bem vindo ao treinamento de Angular';

  imgUrl= "https://res.cloudinary.com/practicaldev/image/fetch/s--NfSR39p4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/tc7pnlyowg52jw2px5at.png";

  constructor(){
    console.log("Component constructor")
   }

   chamarFuncao(){
    console.log("esse é um click")
   }

  
  
}
