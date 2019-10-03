const {
    parseTitleToJson
} = require("../helpers");

test("parse <title> data and convert to Json", () => {
    const rawData = `<title>google</title><title>1</title><title>2</title>`;
    expect(JSON.parse(parseTitleToJson(rawData)).length).toBe(2);
});