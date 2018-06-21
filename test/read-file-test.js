/* @flow */

import { expect } from "chai";
import { describe, it } from "mocha";
import * as fs from 'fs';

function getData(fileName, type) {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, type, (err, data) => {
        if (err) { reject(err); }
        resolve(data);
    })
  });
}

describe("read file functionality", () => {
  it("read and process JSON file", async () => {
    const r1 = await getData('./test/f1.js','utf8')
    const r2 = r1.trim();
    //console.log(r2);
    expect(r2).to.equal('{"key": "hi"}');
    const myjson = JSON.parse(r2);
    //console.log(myjson.key);
    expect(myjson.key).to.equal('hi');
  });
});
