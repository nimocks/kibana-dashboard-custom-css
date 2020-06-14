import $ from "jquery";

window.onhashchange = locationHashChanged;

$(document).ready(function () {
  initHack();
});

function locationHashChanged() {
  initHack();
}

function initHack() {
  $("#custom-css").remove();
  if (window.location.href.includes("kibana#/dashboard/")) {
    var url = window.location.href.match(
      new RegExp("dashboard/" + "(.*)" + "?_a=")
    );
    var fileName = url[1].substring(0, url[1].length - 1);
    getCssData(fileName);
  }
}

function getCssData(fileName) {
  $.ajax("/api/custom-css/getObjectCss?objectId=" + fileName + "", {
    success: function (data) {
      var cssBlock = "<style>" + data + "</style>";

      $("body").append("<div id='custom-css'></div>");
      $("#custom-css").html(cssBlock);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
