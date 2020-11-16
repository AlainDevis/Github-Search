export class Repository {
    showDetails:boolean
    constructor(public name:string,public description:string,public html_url:any){
        this.showDetails=false;
    }   
}