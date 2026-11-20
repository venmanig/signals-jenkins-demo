// A dependency-free test runner that writes a JUnit report Jenkins can read (reports/junit.xml).
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { add, total } = require('../src/math');

const tests = {
  'math.adds two numbers': () => assert.strictEqual(add(2, 3), 5),
  'math.totals a cart': () => assert.strictEqual(total([{ price: 5, qty: 2 }, { price: 1, qty: 3 }]), 13),
  'math.totals an empty cart': () => assert.strictEqual(total([]), 0),
};

const results = Object.entries(tests).map(([name, fn]) => {
  try { fn(); return { name, ok: true }; } catch (e) { return { name, ok: false, message: e.message }; }
});
const failed = results.filter(r => !r.ok);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const cases = results.map(r => {
  const [cls, ...rest] = r.name.split('.');
  return `  <testcase classname="${esc(cls)}" name="${esc(rest.join('.'))}">`
    + (r.ok ? '' : `<failure message="${esc(r.message)}"/>`) + '</testcase>';
}).join('\n');
fs.mkdirSync(path.join(__dirname, '..', 'reports'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '..', 'reports', 'junit.xml'),
  `<testsuite name="demo" tests="${results.length}" failures="${failed.length}">\n${cases}\n</testsuite>\n`);
results.forEach(r => console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.name}${r.ok ? '' : ' — ' + r.message}`));
process.exit(failed.length ? 1 : 0);
