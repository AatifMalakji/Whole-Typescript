const cl = console.log

// single product interface
enum category{
    booksandtyos = 'Books and Toys',
    Electronics = 'Electronics'
} 
interface product{
    _id: string;
    title: string;
    product_description: null | string
    rating: number;
    reviews_count: number;
    images: string[];
    tags: Array<string>;
    product_details: string;
    return_policy: string;
    total_price: string;
    product_specifications: specs[];
    category:category;
    subcategory: string
}
interface specs{
    _id: string;
    specification_name: string;
    specification_value: string;
}
let prdct : product =  {
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
}
// multiple products interface
interface products{
    products: product[]
}

// singleton class

class Department{
    static instance: Department
    private constructor(public dname: string, public did: string){}
    static getinstance(dname:string, did: string) {
        if(!this.instance){
            this.instance = new Department(dname, did)
            return this.instance
        }else{
            return this.instance
        }
    }
}

let d1 = Department.getinstance('finance', 'd-123')
cl(d1)
let d2 = Department.getinstance('dev', 'd-123')
cl(d2)
cl(d1 === d2)


// decorator
function logmsg(name: string){
   return function(target : Function){
        cl(`Going for drive in ${name}`)
    }
}

@logmsg('car')
class car{
    constructor(public name: string){}
}
@logmsg('truck')
class truck{
    constructor(){}
}
let c1 = new car('Creta')
let t1 = new truck()


//inheritance protected, private property with get and set
class dpartment{
    private emparr: string[] = []
    constructor(public name: string, protected age: number){}
 hireemp(emp: string){
        this.emparr.push(emp)
    }
get getemp(){
    return this.emparr
}
set setemp(emps: string[]){
    this.emparr = emps
}
}
class finance extends dpartment{
empdoc: string[] = []
showprotected(){
    cl(this.age) //accessing protected property
}
}

let department1  = new dpartment('dev', 34)
department1.hireemp('Ajay')
cl(department1.getemp)
department1.setemp = ['mike', 'jhon']
cl(department1.getemp)

