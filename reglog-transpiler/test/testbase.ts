import { vi } from "vitest";
import { JSDOM } from "jsdom";

vi.stubGlobal("window", new JSDOM().window);
