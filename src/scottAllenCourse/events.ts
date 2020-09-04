import { fromEvent} from "rxjs";
import {map, filter} from "rxjs/operators"

let circle = document.querySelector('#circle') as HTMLDivElement;

let source$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map((e) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }),
    filter(value => value.x < 500)
);

function onNext(value:any){
    circle.style.left = value.x;
    circle.style.top = value.y
}

source$.subscribe(
    //(value:any) => console.log(value),
    onNext,
    (e:any) => console.log(`error: ${e}`),
    () => console.log(`complete`),
)