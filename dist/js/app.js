"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const cl = console.log;
var category;
(function (category) {
    category["booksandtyos"] = "Books and Toys";
    category["Electronics"] = "Electronics";
})(category || (category = {}));
let prdct = {
    "_id": "67cfe4411d3eb582dacee79c",
    "title": "Disney Lilo & Stitch Collectible 7 Piece Action Figure Playset",
    "product_description": null,
    "rating": 4.9,
    "reviews_count": 60,
    "images": [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHnFJjyKSfkhixYRksJOA-NtxfzAd4TghidQgfOFgQP5PyrywesdUy6up5lOmgjYcjtPPvfvJ9W74lRYTlg9wzeHrhQy4z2w&usqp=CAY",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLfQoxAk6hCCAiNdE7yHs_DaTBOCX5aVCYKaElw9sFOY-iBzoDZJk4dKyvI-GDPi49MpdDGsgfIqNj--BRwvdN9RnnE3oEuw&usqp=CAY",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQYvGBmldbmLo21vHHSJGQpywuiESnCB-4gG0cmFe1VFrmnSn1ivr3wkRvQTQc414vNYVcsnEvcA2pVamZUbkXJOx1CXZv&usqp=CAY"
    ],
    "tags": [
        "Action",
        "Set"
    ],
    "product_details": "Capture the out-of-this world charm of Disney's lovable blue alien with the Disney Stitch Collectible Figure Set. This collection includes 7 adorable Stitch figures sculpted in fun, action poses. They average 2 inches tall and feature excellent character detail that makes them perfect for play or display.Disney Stitch fans of all ages will love adding them to their collection, and kids will love inventing tropical adventures with these mini Stitch pals. Mini figures make great cake toppers and party favours, too! Collect all the Disney Stitch toy figures and plushies (each sold separately). For kids ages 3 years and up.",
    "return_policy": "Free 90-day returns",
    "total_price": "$30.35",
    "product_specifications": [
        {
            "_id": "68453f1087c49c2d115dba08",
            "specification_name": "Age Range",
            "specification_value": "3 - 8 Years"
        },
        {
            "_id": "68453f1087c49c2d115dba09",
            "specification_name": "Assembled Product Weight",
            "specification_value": "0.42 lb"
        },
        {
            "_id": "68453f1087c49c2d115dba0a",
            "specification_name": "Character",
            "specification_value": "Stitch"
        },
        {
            "_id": "68453f1087c49c2d115dba0b",
            "specification_name": "Assembled Product Dimensions (L x W x H)",
            "specification_value": "6.00 x 2.00 x 10.00 Inches"
        }
    ],
    "category": category.booksandtyos,
    "subcategory": "Toys"
};
class Department {
    constructor(dname, did) {
        this.dname = dname;
        this.did = did;
    }
    static getinstance(dname, did) {
        if (!this.instance) {
            this.instance = new Department(dname, did);
            return this.instance;
        }
        else {
            return this.instance;
        }
    }
}
let d1 = Department.getinstance('finance', 'd-123');
cl(d1);
let d2 = Department.getinstance('dev', 'd-123');
cl(d2);
cl(d1 === d2);
function logmsg(name) {
    return function (target) {
        cl(`Going for drive in ${name}`);
    };
}
let car = class car {
    constructor(name) {
        this.name = name;
    }
};
car = __decorate([
    logmsg('car'),
    __metadata("design:paramtypes", [String])
], car);
let truck = class truck {
    constructor() { }
};
truck = __decorate([
    logmsg('truck'),
    __metadata("design:paramtypes", [])
], truck);
let c1 = new car('Creta');
let t1 = new truck();
class dpartment {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.emparr = [];
    }
    hireemp(emp) {
        this.emparr.push(emp);
    }
    get getemp() {
        return this.emparr;
    }
    set setemp(emps) {
        this.emparr = emps;
    }
}
class finance extends dpartment {
    constructor() {
        super(...arguments);
        this.empdoc = [];
    }
    showprotected() {
        cl(this.age);
    }
}
let department1 = new dpartment('dev', 34);
department1.hireemp('Ajay');
cl(department1.getemp);
department1.setemp = ['mike', 'jhon'];
cl(department1.getemp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQTtBQUd0QixJQUFLLFFBR0o7QUFIRCxXQUFLLFFBQVE7SUFDVCwyQ0FBK0IsQ0FBQTtJQUMvQix1Q0FBMkIsQ0FBQTtBQUMvQixDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtBQXFCRCxJQUFJLEtBQUssR0FBYztJQUNuQixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLE9BQU8sRUFBRSxnRUFBZ0U7SUFDekUscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixRQUFRLEVBQUUsR0FBRztJQUNiLGVBQWUsRUFBRSxFQUFFO0lBQ25CLFFBQVEsRUFBRTtRQUNOLG1LQUFtSztRQUNuSyxtS0FBbUs7UUFDbkssaUtBQWlLO0tBQ3BLO0lBQ0QsTUFBTSxFQUFFO1FBQ0osUUFBUTtRQUNSLEtBQUs7S0FDUjtJQUNELGlCQUFpQixFQUFFLHFuQkFBcW5CO0lBQ3hvQixlQUFlLEVBQUUscUJBQXFCO0lBQ3RDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLHdCQUF3QixFQUFFO1FBQ3RCO1lBQ0ksS0FBSyxFQUFFLDBCQUEwQjtZQUNqQyxvQkFBb0IsRUFBRSxXQUFXO1lBQ2pDLHFCQUFxQixFQUFFLGFBQWE7U0FDdkM7UUFDRDtZQUNJLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsb0JBQW9CLEVBQUUsMEJBQTBCO1lBQ2hELHFCQUFxQixFQUFFLFNBQVM7U0FDbkM7UUFDRDtZQUNJLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsb0JBQW9CLEVBQUUsV0FBVztZQUNqQyxxQkFBcUIsRUFBRSxRQUFRO1NBQ2xDO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLG9CQUFvQixFQUFFLDBDQUEwQztZQUNoRSxxQkFBcUIsRUFBRSw0QkFBNEI7U0FDdEQ7S0FD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