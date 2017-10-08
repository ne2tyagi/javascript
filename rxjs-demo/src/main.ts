import { Observable } from "@reactivex/rxjs";

const startButton = jQuery('#start');
const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);
const startInterval$ = start$.switchMapTo(interval$);
startInterval$.subscribe((x) => console.log(x));

