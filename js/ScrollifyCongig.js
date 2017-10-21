$.scrollify({
    section : ".page",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll:true
});

nextpage = function () {
    $.scrollify.next()
};
