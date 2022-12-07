// import { newsList } from "./main.js";
import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search string in newsList array", () => {
  expect(newsList).toContain("I am a cool web developer");
});

test("Search function testing", () => {
  expect(search(newsList)).toContain("I am a cool web developer");
});

test("Sort function testing ascending", () => {
  expect(sort("ascending")).toBe(newsList.sort());
});

test("Sort function testing descending", () => {
  expect(sort("descending")).toBe(newsList.reverse());
});
