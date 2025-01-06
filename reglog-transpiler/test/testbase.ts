import { JSDOM } from "jsdom";

Reflect.set(globalThis, "window", new JSDOM().window);
