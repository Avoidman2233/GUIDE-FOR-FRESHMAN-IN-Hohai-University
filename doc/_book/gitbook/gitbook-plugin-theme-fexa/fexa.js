require(['gitbook', 'jquery'], function(gitbook, $) {

    function getRootPath() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
        if (webName == "") {
            return window.location.protocol + '//' + window.location.host;
        }
        else {
            return window.location.protocol + '//' + window.location.host + '/' + webName;
        }
    }

    // 生成内容导航
    function generateSectionNavigator() {
        // 保留原有的生成导航逻辑
        // ...
    }

    // 基础设置
    function setBase() {
        // 标题
        var $title = $(".header-inner .title");
        $title.text(gitbook.state.config.title);

        // 搜索框
        var $search = $('#book-search-input');
        var placeholder = gitbook.state.config.pluginsConfig["theme-fexa"]["search-placeholder"] || "输入关键字搜索"
        $search.find("input").attr("placeholder", placeholder);
        $search.append("<span id='searchBtn'>搜索</span>");
        $search.focus();
        $("#searchBtn").click(function (e) {});

        // 去掉 gitbook-link
        $(".summary .gitbook-link").hide();
        $(".summary .divider").hide();

        // 隐藏导航栏
        hideNavigation();
    }

    // 隐藏导航栏
    function hideNavigation() {
        $('.book-anchor').hide();
    }

    gitbook.events.on('start', function () {

    });

    gitbook.events.on('page.change', function () {
        setBase();
        // 不再生成导航栏
        // generateSectionNavigator();
    });
});