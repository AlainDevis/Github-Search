export class Repository {
    showDetails:boolean
    constructor(public name:string,public description:string,public url:any){
        this.showDetails=false;
    }   
}