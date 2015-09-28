/*
 * grunt-tpl
 * https://github.com/junjianwjj/tpl
 *
 * Copyright (c) 2015 junjian.wjj
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var beautifier = require('node-beautify');
    var templateProvider;

    grunt.registerMultiTask('tpl', 'Compile underscore templates to cmd module', function () {
        var options = this.options({
            templateSettings: { },
            provider: 'underscore',
            prettify: false,
            prettifyOptions: {
                indentSize: 2
            }
        });
        if (options.provider === 'underscore') {
            templateProvider = require('./lib/tpl');
        } else {
            templateProvider = require(options.provider);
        }


        this.files.forEach(function (file) {
            var output = [];
            var compiled;
            var src = file.src[0];
            var dest = file.dest;
            var html = grunt.file.read(src);
            var cwd = file.orig.cwd;
            var ext = file.orig.ext;

            //根据目录生成id
            var id = '';
            var ids = [];
            var lastItem = '';
            id = src.replace(cwd, '');
            ids = id.split('/');
            for(var i = 0; i < ids.length; i++){
                if(ids[i] === ''){
                    ids.splice(i, 1);
                }
            }
            lastItem = ids[ids.length - 1];
            lastItem = lastItem.split('.');
            lastItem.pop();
            lastItem.join('');
            ids.pop();
            ids.push(lastItem);
            id = ids.join('/');

            try {
                if (options.provider === 'ejs') {
                    compiled = templateProvider.compile(html, options.templateSettings);
                } else {
                    compiled = templateProvider.template(html, false, options.templateSettings).source;
                }

                output.push('return {render:' + compiled + '};');
            } catch (e) {
                grunt.log.error(e);
                grunt.fail.warn('File ' + src + ' has syntax error，failed to compile.');
            }

            if (output.length > 0) {

                var cmdDefine = 'define("' + id + '", function(){';

                output.unshift(cmdDefine);
                output.push('});');

                var contents = output.join("\n");
                if (options.prettify) {
                    contents = beautifier.beautifyJs(contents, options.prettifyOptions);
                }

                grunt.file.write(dest, contents);
                grunt.log.writeln("Template '" + dest + "' created.");
            }
        });
    });
};