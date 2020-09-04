import "./index.css";

import "./rxjsBook/practice";
import "./rxjsBook/bigpicture"

import "./scottAllenCourse/observables"
import "./scottAllenCourse/events"


export class C {
  private x = 17;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

