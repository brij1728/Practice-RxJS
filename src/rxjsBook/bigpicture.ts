import {  from } from "rxjs";
import {filter, map} from "rxjs/operators"

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