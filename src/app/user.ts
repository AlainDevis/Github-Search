export class User {
    showDetails:boolean
    constructor(public name:string,public bio:string,public avatar_url:any){
        this.showDetails=false;
    }   
}
