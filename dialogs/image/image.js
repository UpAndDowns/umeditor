(function () {
    UE.registerWidget('image', {
        tpl:  "<style type=\"text/css\">" +
            ".edui-image-wrapper{font-size: 12px;margin: 15px;}" +
            "</style>" +
            "<div id=\"edui-image-Jwrapper\" class=\"edui-image-wrapper\">" +
            "<ul class=\"edui-tab-nav\">" +
            "<li class=\"edui-tab-item active\"><a href=\"#edui-image-Jlocal\" class=\"edui-tab-text\">本地上传</a></li>" +
            "<li  class=\"edui-tab-item\"><a href=\"#edui-image-JimgSearch\" class=\"edui-tab-text\">图片搜索</a></li>" +
            "</ul>" +
            "<div class=\"edui-tab-content\">" +
            "<div id=\"edui-image-Jlocal\" class=\"edui-tab-pane active\">" +

            "</div>" +
            "<div id=\"edui-image-JimgSearch\" class=\"edui-tab-pane\">2</div>" +
            "</div>" +
            "</div>",
        initContent: function (editor) {
            var lang = editor.getLang('image');
            if (lang) {
                var html = $.parseTmpl(this.tpl, lang.static);
            }
            this.root().html(html);

        },
        initEvent: function (editor, $w) {
            $.eduitab({selector:"#edui-image-Jwrapper"});
        },
        buttons: {
            'ok': {
                label: '插入图片',
                exec: function () {
                    editor.execCommand('insertimage', obj);
                }
            },
            'cancel': {}
        }

    })
})();

