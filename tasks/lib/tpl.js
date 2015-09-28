var templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
};

var noMatch = /(.)^/;

var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
};

var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

var entityMap = {
    escape: {
        '&': '&',
        '<': '<',
        '>': '>',
        '"': '"',
        "'": '\''
    }
};

var keys = Object.keys || function (obj) {
    var key, ret = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(key);
        }
    }
    return ret;
};

var entityRegexes = {
    escape: new RegExp('[' + keys(entityMap.escape).join('') + ']', 'g')
};

var escapeEntity = function (string) {
    if (string == null) return '';
    return ('' + string).replace(entityRegexes.escape, function (match) {
        return entityMap.escape[match];
    });
};

var merge = function () {
    var ret = {};
    var args = [].slice.call(arguments);

    args.forEach(function (arg) {
        if (arg) {
            for (var key in arg) {
                ret[key] = arg[key];
            }
        }
    });

    return ret;
};

exports.template = function (text, data, settings) {
    var render;
    settings = merge(templateSettings, settings || {});

    var matcher = new RegExp([
        (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset)
            .replace(escaper, function (match) {
                return '\\' + escapes[match];
            });

        if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':escapeEntity(__t))+\n'";
        }
        if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        }
        if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
        }
        index = offset + match.length;
        return match;
    });
    source += "';\n";

    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";

    try {
        render = new Function(settings.variable || 'obj', source);
    } catch (e) {
        e.source = source;
        throw e;
    }

    return data ? render(data, $) : {
        render: function (data) {
            return render.call(this, data, $);
        },
        source: 'function(' + (settings.variable || 'obj') + '){\n' + source + '}'
    };
};