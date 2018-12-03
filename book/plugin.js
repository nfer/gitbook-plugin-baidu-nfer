require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        var conf = config["baidu-nfer"] || {};
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?' + conf.token;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    });

    gitbook.events.bind("page.change", function(e){
        window._hmt && _hmt.push(['_trackEvent', location.pathname, 'page.change', '', '']);
    });
});
