export class Quotes {
   showDescription:boolean;
   constructor(public id: number, public userName: string,public quoteTitle: string,public quoteDescription:string,public completeDate: Date){
      this.showDescription=false;
   };
   // id!: number;
   // userName!: string;
   // quoteTitle!: string;
   // quoteDescription!:string;
  
}
