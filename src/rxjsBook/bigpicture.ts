import {Observable,  from, fromEvent } from "rxjs";
import {filter, map, pluck, timeInterval} from "rxjs/operators"

let bookArray = [
    {"bookID": 1, "title": "Goodnight Moon"},
    {"bookID": 2, "title": "Winnie-the-Pooh"},
    {"bookID": 3, "title": "Where the Wild Things Are"}
];

let booksObservable$ = from(bookArray);
booksObservable$.subscribe()


let num$ = from([-2, -1, 0, 1, 2]);

let observer = {
    next: (value:number) => console.log(value),
    error: (err:any) => console.log(`Error: ${err}`),
    complete: () => console.log(`All one`)

    
};

num$.subscribe(observer)

// using operator
num$.pipe(
    filter(num => num > 0)
)
.subscribe(observer)

// chaining of operators
num$.pipe(
    filter(num => num > 0),
    map(positiveNum => positiveNum * 3)
)
.subscribe(observer)


// using custom observable method
// let customObservable = Observable.create(subscriber => {

//     if(newValue:any){
//         subscriber.next(newValue);
//     } 

//     if(newError){
//         subscriber.next(newError);
//     }

//     if(done:any){
//         subscriber.complete()
//     }
// })

let numbers = [1, 5, 10];
let source = Observable.create((observer:any) => {
    
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
​
        if(index < numbers.length) {
            setTimeout(produceValue, 250)
        } else {
            observer.complete()
        }
    }
    produceValue();
}).pipe
(map((n:number) => n * 2),filter((n:number) => n > 4));
​
source.subscribe(
  (value:any) => console.log(`value: ${value}`),
  (e:any) => console.log(`error: ${e}`),
  () => console.log("complete")
);

// click event
let click$ = fromEvent(document, 'click');

click$.pipe(
    pluck('clientX'),
    timeInterval(),
    map(clickInfo => `${clickInfo.interval/1000} seconds (${clickInfo.value})`))
.subscribe(
    (value) => console.log(value),
     (err) => console.log(`Error: ${err}`),
    () => console.log(`All one`)

)