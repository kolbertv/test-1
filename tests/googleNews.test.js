const GoogleNews = require('../models/googleNews');

test('JSON data of titles should be in array with length greater than 1 ', async () => {
    expect.assertions(2);

    const titles = await new GoogleNews().getTitles();
    expect(Array.isArray(JSON.parse(titles))).toBeTruthy();
    expect(JSON.parse(titles).length).toBeGreaterThan(1);

})