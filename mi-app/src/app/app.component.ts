import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ATRIBUTOS
  usuario: String = 'Yo mismo';
  observable! : Observable<number>; // ! es para que no se inicialice, solo se inicializara cuando lo necesitemos

  constructor()
  {

  }

  onIniciarObservable()
  {
    this.observable = new Observable ((observer) =>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(()=>{
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  onSubscribeToObservable()
  {
    this.observable.subscribe(
      (n: number) => console.log('recogo' + n),
      error => console.log('se produjo un error ' + error),
    )
  }

  title = 'mi-app';
}
