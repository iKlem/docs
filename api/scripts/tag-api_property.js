var util = require('hexo-util');

var counter = 0;

hexo.extend.tag.register('api_property', function (args) {
    var name = args[0], inherited = '';
    var m = name.match(/^(.*?):(.*)$/);
    if (m) {
        name = m[2];
        inherited = `<div class="api-property__inherited">Inherited from <a href="#${m[1]}">${m[1]}</a></div>`;
	}

	const mr = this.raw.match(/^\# (\S+)/);
    if(mr) {
        name = mr[1] ? `${mr[1]}.${name}` : name;
    } else {
        if(this.parentTitle) {
            name = `${this.parentTitle}.${name}`;
        }
    }

    var opts = {};
    if(args[2]) {
        opts = JSON.parse(args[2]);
    }

    var id = util.slugize(name.trim(), {separator: '.'});
    var result = `<h2 id="${id}" data-id="${id}" data-name="${name}" class="api-property api-property--property ${inherited ? 'api-property--inherited' : ''} ${opts.deprecated ? 'api-property--deprecated' : ''}">${inherited}<span class="api-property__name">${name}</span><span class="api-property__type">${args[1]}</span></h2>`;
    if (opts.deprecated) {
        var text = 'This property is deprecated and will be removed soon.';
        if (opts.deprecated !== true) {
            text += ' ' + opts.deprecated;
        }
        text = hexo.render.renderSync({text, engine: 'markdown'});
        result += `<div class="api-deprecated">${text}</div>`
    }
    return result;
}, {async: false});
