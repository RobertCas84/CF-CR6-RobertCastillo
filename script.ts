 const sightArr: Array<any>=[];

    class travel{
        place: string;
        address: string;
        zipcode: string;
        img: string;
    

   constructor(place: string, zipcode: string, address: string, img: string) { 
        this.place = place;
        this.address = address;
        this.zipcode = zipcode;
        this.img = img;
        sightArr.push(this);

    }
    render() {
        return `
        <div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded" id="attracions">
                <img src="${this.img}" class="card-img-top card-img-fluid my-2 d-none" alt="...">
                    <div class="card-body">
                        <h5 class="card-title mb-2">${this.place}</h5>
                        <p class="address">${this.address}</p>
                        <p class="zipcode"><small class="text-muted">${this.zipcode}</small></p>
                    </div>
        </div>`
    }
}

    class restaurant extends travel{
        food: string;
        website: string;

        constructor(place: string, zipcode: string, address: string, img: string, food: string, website: string){
            super(place, zipcode, address, img);
            this.food = food;
            this.website = website;

        }
    

        render() {
        return `
        <div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded" id="attracions">
                <img src="${this.img}" class="card-img-top card-img-fluid my-2 d-none" alt="...">
                    <div class="card-body">
                        <h5 class="card-title mb-2">${this.place}</h5>
                        <p class="address">${this.address}</p>
                        <p class="zipcode">${this.zipcode}</p>
                        <p class="food">${this.food}</p>
                        <a href="${this.website}" class="website">Click for the website</p>

                    </div>
        </div>`
     }
}
    class Event extends travel{
            eventName: string;
            eventDate: string;
            eventTime: string;
            price: string;
            website: string;
    
            constructor(place: string, zipcode: string, address: string, img: string, eventName: string, eventDate: string, eventTime: string, price: string, website: string){
                super(place, zipcode, address, img);
                this.eventName = eventName;
                this.eventDate = eventDate;
                this.eventTime = eventTime;
                this.price = price;
                this.website = website; 

    }           
   
    
    render() {
                    return `
                    <div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg.-2 m-4 p-1 justify content-between w-100 rounded" id="attracions">
                            <img src="${this.img}" class="card-img-top card-img-fluid my-2 d-none" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title mb-2">${this.place}</h5>
                                    <p class="address">${this.address}</p>
                                    <p class="zipcode">${this.zipcode}</p>
                                    <p class="eventName">${this.eventName}</p>
                                    <p class="eventDate">${this.eventDate}</p>
                                    <p class="eventTime">${this.eventTime}</p>
                                    <a href="${this.website}" class="website">Click for the website</p>
            
                                </div>
                    </div>`
        }    
    } 


var church = new place("St. Charles Church","Karlsplatz 1", "1010 Vienna", "img/karlskirch.jpg");
var zoo = new place("Zoo Vienna", "Maxingstraße 13b", "1130 Vienna", "img/zoo.jpg");
var lemon = new restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengass 19", "1050 Vienna", "img/lemonleaf.png", "Thai kitchen", "www.lemonleaf.at");
var sixta = new restaurant("Sixta Restaurant", "Schönbrunner Straße 21", "1050 Vienna", "img/sixta.png", "Traditional food", "www.sixta-restaurant.at");
var kris = new Event("Kris Kristofferson","Wiener Stadthalle,HAlle F, Roland Rainer Platz 1", "1150 Vienna", "img/Kristofferson.jpg", "Thursday 15.11.2021", "20:00","58.50EUR", "www.kriskristofferson.com");
var lenny = new Event("Lenny Kravitz","Wiener Stadthalle, Halle D, roland Rainer Platz 1", "1150 Vienna", "img/lenny.jpg", "Saturday 09.12.2029", "19:30", "47.80EUR", "www.lennykravitz.com");

$(document).ready(function(){
    for(let i in sightArr){
        document.getElementById("attractions").innerHTML += sightArr[i].render();
    
}
 })
