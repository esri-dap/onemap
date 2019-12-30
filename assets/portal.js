// // Load Portal Gallery

// dojo.require('esri.arcgis.Portal');
// dojo.require("esri.IdentityManager");
// dojo.require("dojox.lang.aspect");

// var displayOptions = {
//     themeName: 'gray',
//     numItemsPerPage: 999,
//     group: {
//         "owner": "gempa_lombok",
//         "title": "gallery"
//     },
//     portalUrl: 'https://essclombok.maps.arcgis.com/'
// };
// var portal;
// var group;
// var nextQueryParams;
// var queryParams;

// function init() {
//     portal = new esri.arcgis.Portal(displayOptions.portalUrl);
//     dojo.connect(portal, 'onLoad', loadPortal);
//     dojox.lang.aspect.advise(portal, "queryItems", {
//         afterReturning: function (queryItemsPromise) {
//             queryItemsPromise.then(function (result) {
//                 nextQueryParams = result.nextQueryParams;
//                 queryParams = result.queryParams;
//             });
//         }
//     });
// }

// function loadPortal() {
//     var params = {
//         q: 'title: ' + displayOptions.group.title + ' AND owner:' + displayOptions.group.owner
//     };
//     portal.queryGroups(params).then(function (groups) {
//         //get group title and thumbnail url
//         if (groups.results.length > 0) {
//             group = groups.results[0];

//             //Retrieve the web maps and applications from the group and display
//             var params = {
//                 q: ' type: *',
//                 num: displayOptions.numItemsPerPage
//             };
//             group.queryItems(params).then(updateGrid);
//         }
//     });
// }

// function updateGrid(queryResponse) {
//     //update the gallery to get the next page of items

//     var galleryList = dojo.byId('galleryList');
//     dojo.empty(galleryList); //empty the gallery to remove existing items

//     //navigation buttons

//     //Build the thumbnails for each item the thumbnail when clicked will display the web map in a template or the web application
//     var frag = document.createDocumentFragment();
//     dojo.forEach(queryResponse.results, function (item) {
//         console.log(item);

//         if (item.id) {
//             // var tilehref = dojo.create(
//             //     "a", {
//             //         href: item.url,
//             //         target: "_blank",
//             //         // class: "hoveredhref",
//             //     }, frag
//             // );
//               var tile = dojo.create("a", {
//                   class: 'tile',
//                   href: item.url,
//                   target: "_blank",
//               }, frag);
//             // var tile = dojo.create("div", {
//             //     class: 'tile',
//             // }, tilehref);
//             var tileMedia = dojo.create("div", {
//                 class: "tile__media",
//                 innerHTML: '<img class="tile__img" src="' + item.thumbnailUrl + '" alt="' + item.title +
//                     '"/>'
//             }, tile);
//             var tileDetails = dojo.create("div", {
//                 class: "tile__details",
//                 innerHTML: '<div class="tile__title">' + item.title + '</div>'
//             }, tile);
//         }
//     });

//     dojo.place(frag, galleryList);
// }

// dojo.ready(init);

// // End Portal Gallery


// // Background Slider
// var counter = 0;
// var sliderPosition = 1;
// var initSlider = function() {
//     if (sliderPosition = 1) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page1-right")[0].click();
//             sliderPosition = 2;
//         }, 0);
//     };
//     if (sliderPosition = 2) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page2-right")[0].click();
//             sliderPosition = 3;
//         }, 4000);
//     };
//     if (sliderPosition = 3) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page3-right")[0].click();
//             sliderPosition = 4;
//         }, 8000);
//     };
//     if (sliderPosition = 4) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page4-right")[0].click();
//             sliderPosition = 5;
//         }, 12000);
//     };
//     if (sliderPosition = 5) {
//         myVar = setTimeout(function () {
//             sliderPosition = 1;
//         }, 16000);
//     };
// };
// initSlider();
// var i = setInterval(function () {
//     if (sliderPosition = 1) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page1-right")[0].click();
//             sliderPosition = 2;
//         }, 1000);
//     };
//     if (sliderPosition = 2) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page2-right")[0].click();
//             sliderPosition = 3;
//         }, 5000);
//     };
//     if (sliderPosition = 3) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page3-right")[0].click();
//             sliderPosition = 4;
//         }, 9000);
//     };
//     if (sliderPosition = 4) {
//         myVar = setTimeout(function () {
//             document.getElementsByClassName("page4-right")[0].click();
//             sliderPosition = 5;
//         }, 13000);
//     };
//     if (sliderPosition = 5) {
//         myVar = setTimeout(function () {
//             sliderPosition = 1;
//         }, 17000);
//     };
//     counter++;
//     if (counter === 50) {
//         clearInterval(i);
//     }
// }, 17000);
// // End Background Slider


//onemap
$(document).ready(function(){
    $("#areabarat").hover(function(){
      $("#bgmaps").css("background-image", "url('./assets/bg_barat.png')");
      $("#bgmaps").css("background-size", "cover");
      }, function(){
      $("#bgmaps").css("background-image", "url('./assets/bg_full.png')");
      $("#bgmaps").css("background-size", "cover");
    });
    $("#areatengah").hover(function(){
        $("#bgmaps").css("background-image", "url('./assets/bg_tengah.png')");
        $("#bgmaps").css("background-size", "cover");
        }, function(){
        $("#bgmaps").css("background-image", "url('./assets/bg_full.png')");
        $("#bgmaps").css("background-size", "cover");
    });
    $("#areatimur").hover(function(){
        $("#bgmaps").css("background-image", "url('./assets/bg_timur.png')");
        $("#bgmaps").css("background-size", "cover");
        }, function(){
        $("#bgmaps").css("background-image", "url('./assets/bg_full.png')");
        $("#bgmaps").css("background-size", "cover");
      });  
  });