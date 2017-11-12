//var counter =1000;
class Item{
    constructor(id , name , desc , price, image, color){
        
        //this.id = counter;
        //counter++;
        this.id = id;
        this.name = name;  // Instance Variable = Local Variable
        this.desc = desc;
        this.price = price;
        this.image = image;
        this.color = color;
        this.markForDelete = false;

    }
}


// C++ Code
// class Item{
//     int id;
//     char [] name;

//     Item(int id ){
//         this.id = id;
//     }
// }