(function() {
    NProgress.configure({
        minimum: 0.5,
        showSpinner: true
    });

    $(document).ready(function() { NProgress.start(); });
    $(window).load(function() { NProgress.done();} );
})();