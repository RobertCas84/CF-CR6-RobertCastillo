var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var attractionsArr = [];
var Travel = /** @class */ (function () {
    function Travel(place, zipcode, address, img) {
        this.place = place;
        this.address = address;
        this.zipcode = zipcode;
        this.img = img;
        attractionsArr.push(this);
    }
    Travel.prototype.render = function () {
        return "\n        <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                \n                    <div class=\"card-body text-white\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2\" alt=\"...\">\n                        <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                        <p class=\"address\">" + this.address + "</p>\n                        <p class=\"zipcode\">" + this.zipcode + "</p>\n                    </div>\n        </div>";
    };
    return Travel;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(place, zipcode, address, img, food, website) {
        var _this = _super.call(this, place, zipcode, address, img) || this;
        _this.food = food;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n        <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                \n                    <div class=\"card-body text-white\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2 \" alt=\"...\">\n                        <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                        <p class=\"address\">" + this.address + "</p>\n                        <p class=\"zipcode\">" + this.zipcode + "</p>\n                        <p class=\"food\">" + this.food + "</p>\n                        <a href=\"" + this.website + "\" class=\"website\">Click for the website</p>\n\n                    </div>\n        </div>";
    };
    return Restaurant;
}(Travel));
var Show = /** @class */ (function (_super) {
    __extends(Show, _super);
    function Show(place, zipcode, address, img, eventName, eventDate, eventTime, price, website) {
        var _this = _super.call(this, place, zipcode, address, img) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.website = website;
        return _this;
    }
    Show.prototype.render = function () {
        return "\n                    <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                            \n                                <div class=\"card-body text-white\">\n                                    <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2\" alt=\"...\">\n                                    <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                                    <p class=\"address\">" + this.address + "</p>\n                                    <p class=\"zipcode\">" + this.zipcode + "</p>\n                                    <p class=\"eventName\">" + this.eventName + "</p>\n                                    <p class=\"eventDate\">" + this.eventDate + "</p>\n                                    <p class=\"eventTime\">" + this.eventTime + "</p>\n                                    <p class=\"eventPrice\">" + this.price + "</p>\n                                    <a href=\"" + this.website + "\" class=\"website\">Click for the website</p>\n            \n                                </div>\n                    </div>";
    };
    return Show;
}(Travel));
var church = new Travel("St. Charles Church", "Karlsplatz 1", "1010 Vienna", "img/karlskirche.jpg");
var zoo = new Travel("Zoo Vienna", "Maxingstraße 13b", "1130 Vienna", "img/zoo.jpg");
var apple = new Restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengass 19", "1050 Vienna", "img/lemonleaf.png", "Thai kitchen", "www.lemonleaf.at");
var center = new Restaurant("Sixta Restaurant", "Schönbrunner Straße 21", "1050 Vienna", "img/sixta.png", "Traditional food", "www.sixta-restaurant.at");
var artist = new Show("Wiener Stadthalle,HAlle F", "1150 Vienna", "Roland Rainer Platz 1", "img/Kristofferson.jpg", "Kris Kristofferson", "Thursday 15.11.2021", "20:00", "58.50EUR", "www.kriskristofferson.com");
var star = new Show("Wiener Stadthalle, Halle D", "1150 Vienna", "Roland Rainer Platz 1", "img/lenny.jpg", "Lenny Kravitz", "Saturday 09.12.2029", "19:30", "47.80EUR", "www.lennykravitz.com");
$(document).ready(function () {
    for (var i in attractionsArr) {
        document.getElementById("attractions").innerHTML += attractionsArr[i].render();
    }
});
