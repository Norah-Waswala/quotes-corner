export class Quotes {
   showDescription:boolean;
   constructor(public id: number, public userName: string,public quoteTitle: string,public quoteDescription:string,public author: string, public submitDate: Date,public likes:number, public dislikes:number){
      this.showDescription=false;
   };
   // id!: number;
   // userName!: string;
   // quoteTitle!: string;
   // quoteDescription!:string;
  
}
