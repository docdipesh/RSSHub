const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async () => {
    const url = 'https://clickdharan.com';
    const response = await got(url);
    const $ = cheerio.load(response.data);

    const items = [];

    $('h2 a').each((_, el) => {
        const title = $(el).text().trim();
        const link = $(el).attr('href');

        if (title && link) {
            items.push({
                title,
                link,
            });
        }
    });

    return {
        title: 'Click Dharan',
        link: url,
        item: items,
    };
};
