import { d2 } from "./dep2";

export function d1a(a) {
    console.log("d1a called", a);
    d2(a + 1);
}

export function d1b(a) {
    console.log("d1b called", a);
}
