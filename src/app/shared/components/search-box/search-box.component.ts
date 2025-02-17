import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Input()
  public placeHolder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }


}



