
import { fromEvent } from "rxjs";
// import {map, filter} from "rxjs/operators"
// import * as data from 'movies.json'


let output = document.querySelector('#output') as HTMLDivElement;
let button = document.querySelector('#button') as HTMLDivElement;

let click$ = fromEvent(button, 'click')

function load(url: string){

    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        console.log(movies);
        
        movies.foreach((m:any) => {
            let div = document.createElement('div');
            div.innerText = m.title; 
            output.appendChild(div)
        })
    })

    xhr.open('Get', url);
    xhr.send();
}



click$.subscribe(
    //(value:any) => console.log(value),
    () => load('movies.json'),
    (e:any) => console.log(`error: ${e}`),
    () => console.log(`complete`),
)