const Model={
    
        itemArray:[],
    
    addItem (id , name, desc, price, image,color){
          var itemObject = new Item(id, name, desc, price, image, color); 
          this.itemArray.push(itemObject);
          console.log("item Array is ",this.itemArray); 
    },
    deleteRecords(){
        this.itemArray = this.itemArray.filter(itemObject=>!itemObject.markForDelete);
        return this.itemArray;
    },    
    markRecord(id){
        var itemObject = this.searchById(id);
          itemObject.markForDelete =   !itemObject.markForDelete;
    },    
    searchById(id){
            return this.itemArray.filter((itemObject)=>itemObject.id == id)[0]
    },    
    countMark(){
                return this.search(true).length;
    },
     countUnMark(){        
            return this.search(false).length;
     }  ,     
    search(flag){
        return this.itemArray.filter((itemObject)=>itemObject.markForDelete==flag);
    }    
}

// object = {key:value,key:value}