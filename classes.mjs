class Red{
    printColor1=(color)=>console.log(color)
}

class Car extends Red{
    constructor(color){
        super();
        this.Color=color
    }
    
    printColor=()=>console.log(this.Color)
    
}
export default Car