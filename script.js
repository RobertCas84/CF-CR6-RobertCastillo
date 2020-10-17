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
var sightArr = [];
var travel = /** @class */ (function () {
    function travel(place, zipcode, address, img) {
        this.place = place;
        this.address = address;
        this.zipcode = zipcode;
        this.img = img;
        sightArr.push(this);
    }
    travel.prototype.render = function () {
        return "\n        <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2 d-none\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                        <p class=\"address\">" + this.address + "</p>\n                        <p class=\"zipcode\"><small class=\"text-muted\">" + this.zipcode + "</small></p>\n                    </div>\n        </div>";
    };
    return travel;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(place, zipcode, address, img, food, website) {
        var _this = _super.call(this, place, zipcode, address, img) || this;
        _this.food = food;
        _this.website = website;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n        <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2 d-none\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                        <p class=\"address\">" + this.address + "</p>\n                        <p class=\"zipcode\">" + this.zipcode + "</p>\n                        <p class=\"food\">" + this.food + "</p>\n                        <a href=\"" + this.website + "\" class=\"website\">Click for the website</p>\n\n                    </div>\n        </div>";
    };
    return restaurant;
}(travel));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(place, zipcode, address, img, eventName, eventDate, eventTime, price, website) {
        var _this = _super.call(this, place, zipcode, address, img) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.website = website;
        return _this;
    }
    Event.prototype.render = function () {
        return "\n                    <div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded\" id=\"attracions\">\n                            <img src=\"" + this.img + "\" class=\"card-img-top card-img-fluid my-2 d-none\" alt=\"...\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title mb-2\">" + this.place + "</h5>\n                                    <p class=\"address\">" + this.address + "</p>\n                                    <p class=\"zipcode\">" + this.zipcode + "</p>\n                                    <p class=\"eventName\">" + this.eventName + "</p>\n                                    <p class=\"eventDate\">" + this.eventDate + "</p>\n                                    <p class=\"eventTime\">" + this.eventTime + "</p>\n                                    <a href=\"" + this.website + "\" class=\"website\">Click for the website</p>\n            \n                                </div>\n                    </div>";
    };
    return Event;
}(travel));
var church = new place("St. Charles Church", "Karlsplatz 1", "1010 Vienna", "img/karlskirch.jpg");
var zoo = new place("Zoo Vienna", "Maxingstraße 13b", "1130 Vienna", "img/zoo.jpg");
var lemon = new restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengass 19", "1050 Vienna", "img/lemonleaf.png", "Thai kitchen", "www.lemonleaf.at");
var sixta = new restaurant("Sixta Restaurant", "Schönbrunner Straße 21", "1050 Vienna", "img/sixta.png", "Traditional food", "www.sixta-restaurant.at");
var kris = new Event("Kris Kristofferson", "Wiener Stadthalle,HAlle F, Roland Rainer Platz 1", "1150 Vienna", "img/Kristofferson.jpg", "Thursday 15.11.2021", "20:00", "58.50EUR", "www.kriskristofferson.com");
var lenny = new Event("Lenny Kravitz", "Wiener Stadthalle, Halle D, roland Rainer Platz 1", "1150 Vienna", "img/lenny.jpg", "Saturday 09.12.2029", "19:30", "47.80EUR", "www.lennykravitz.com");
$(document).ready(function () {
    for (var i in sightArr) {
        document.getElementById("attractions").innerHTML += sightArr[i].render();
    }
});
