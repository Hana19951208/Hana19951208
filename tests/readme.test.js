const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const readme = fs.readFileSync(path.join(__dirname, "..", "README.md"), "utf8");

test("README 包含核心身份和宣言", () => {
  assert.match(readme, /吴方恩/);
  assert.match(readme, /Hana/);
  assert.match(readme, /在技术与表达之间，长期创作。/);
});

test("README 包含四条创作主线", () => {
  assert.match(readme, /DailyWallpaperHub/);
  assert.match(readme, /Manim/);
  assert.match(readme, /AI/);
  assert.match(readme, /Agent \/ Skills/);
});

test("README 使用本地 SVG 素材", () => {
  assert.match(readme, /assets\/editorial-banner\.svg/);
  assert.match(readme, /assets\/quiet-mascot\.svg/);
});

test("默认模板内容已移除", () => {
  assert.doesNotMatch(readme, /Hi there/);
  assert.doesNotMatch(readme, /get you started/);
});
