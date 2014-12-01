/**
 * Created by henry on 11/9/14.
 */
function ScrollingNavBar() {
    $(".actualBody").each(function() {

        var el             = $(this),
            offset         = el.offset(),
            scrollTop      = $(window).scrollTop(),
            floatingHeader = $(".floatingNav", this)

        if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
            floatingHeader.css({
                "visibility": "visible"
            });
        } else {
            floatingHeader.css({
                "visibility": "hidden"
            });
        };
    });
}

$(function() {

    var clonedHeaderRow;

    $(".actualBody").each(function() {
        clonedHeaderRow = $(".nav-main", this);
        clonedHeaderRow
            .before(clonedHeaderRow.clone())
            .css("width", clonedHeaderRow.width())
            .addClass("floatingHeader");

    });

    $(window)
        .scroll(UpdateTableHeaders)
        .trigger("scroll");

});