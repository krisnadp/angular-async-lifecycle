import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  // count = new BehaviorSubject<number>(0);
  // count$ = this.count.asOvervable();
  count$ = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    console.log('component created');
    this.count$.subscribe({
      next: (val: number) => {
        if (val % 10 === 0 && val > 0) {
          alert('kelipatan 10');
        }
      }
    })
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('on change', this.count);
  //   if (this.count === 0) {
  //     alert('kelipatan 10')
  //   }
  // }

  increment() {
    this.count$.next(this.count$.getValue() + 1);
  }

  decrement() {
    this.count$.next(this.count$.getValue() - 1);
  }

}
