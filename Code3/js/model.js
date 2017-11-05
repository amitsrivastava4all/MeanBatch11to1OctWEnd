const Model={
    
        itemArray:[],
    
    addItem (id , name, desc, price, image,color){
          var itemObject = new Item(id, name, desc, price, image, color); 
          this.itemArray.push(itemObject);
          console.log("item Array is ",this.itemArray); 
    }
}

// object = {key:value,key:value}