$(function() {
    var $affixElement = $('div[class="affix"]');
    $affixElement.width($affixElement.parent().width());
});

$(window).resize(function() {
    var $affixElement = $('div[class="affix"]');
    $affixElement.width($affixElement.parent().width());
});
