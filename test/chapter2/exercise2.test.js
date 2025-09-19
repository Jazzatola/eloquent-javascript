import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { execute } from "../fixtures.js";

describe("Chapter 2, Exercise 2", () => {
  it("prints 1-100 with FizzBuzz", async () => {
    const fizzbuzz =
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n" +
      "11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\n" +
      "Fizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n" +
      "31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n" +
      "41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\n" +
      "Fizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n" +
      "61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n" +
      "71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\n" +
      "Fizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n" +
      "91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz\n";

    const output = await execute("src/chapter2/exercise2.js");
    assert.equal(output, fizzbuzz);
  });
});
