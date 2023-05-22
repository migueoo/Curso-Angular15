import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit ,AfterContentChecked, AfterViewChecked{
  title = 'Bem vindo ao treinamento de Angular';

  constructor(){
    console.log("Component constructor")
   }

   ngAfterViewChecked(): void {
    console.log("View Checked")
   }
    ngAfterContentChecked(): void {
    console.log("Component Content Checked")
    }
  ngAfterViewInit(): void {
    console.log("Component AfterViewInit")
  }
  ngAfterContentInit(): void {
    console.log("Component AfterContentInit")
  }
  ngOnDestroy(): void {
    console.log("Component OnDestroy")
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log("Component onChanges")
}

  ngOnInit(): void {
    console.log("Component onInit")
    
  }

ngDoCheck(): void {
  console.log("Component doCheck")
}
mudarTexto(){
  this.title += 'a';
}

}
