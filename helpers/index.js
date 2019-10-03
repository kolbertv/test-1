const parseTitleToJson = str => {
    let posStart = 0,
        posEnd = 0,
        result = [];
    while (true) {
        let start = str.indexOf('<title>', posStart);
        let end = str.indexOf('</title>', posEnd);
        if (start == -1) break;
        result.push(str.slice(start + 7, end));
        posStart = start + 1;
        posEnd = end + 1;
    }
    let [, ...titles] = result;
    return JSON.stringify(titles);
};

module.exports = {
    parseTitleToJson
};