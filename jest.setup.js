import { TextEncoder, TextDecoder } from "util";

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

import "@testing-library/jest-dom";
