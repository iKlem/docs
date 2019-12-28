'use strict';

const _ = require('lodash');

hexo.extend.generator.register('toc', function(locals) {
    return {
        path: 'toc.html',
/*
        layout: 'index',
        data: {
            pages: _.reduce(locals.pages.data, (result, i) => (result[i.source] = i.path, result), {})
        }
*/
        data: JSON.stringify(_.keys(locals.data),0,2)
        // data: _.reduce(locals.pages.data, (result, page) => (result + page.content), '')
    }
});
