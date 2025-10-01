import { Component, computed, signal } from "@angular/core";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Header],
})
export class App {

  skaitlis: number = 42 + 23;
  skaitlis2: number = 333;
  teksts: string = 'Sveiki, pasaule!';
  bool: boolean = true;
  str: string[] = ['Sveiki', 'Pasaule', 'Angular', 'Ir', 'Lielisks'];
  tesla = {
    nosaukums: 'Model S', 
    izlaidums: 2020, 
    krāsa: 'sarkana'};

skaitlisSignals = signal<number>(0);
skaitlisSignals2 = signal<number>(0);
signalsNr3 = computed(() => this.skaitlisSignals() + this.skaitlisSignals2());
  sutamUzHeader = signal<string>("");

  constructor() {
    this.skaitlisSignals.set(this.skaitlis);
    this.skaitlisSignals2.set(this.skaitlis2);
    this.skaitlisSignals.update(v => 
      v + 12)
      this.sutamUzHeader.set(`Teksts: ${this.teksts}`);
  }
  noBerna(e: string) {
    console.log(e);
  
  }



  pogasKliks() {
    this.skaitlisSignals.update(value => value + 1);
}
}