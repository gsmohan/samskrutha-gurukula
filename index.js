class ArticlesExtractor {

    constructor(){
      this.yearMonth = process.argv[2],
      //this.days = this.daysInMonth(),
      this.params = null,
      this.options = null;
      if(!this.yearMonth){
        console.log('Please pass the Year and Month as YYYY/MM');
      }else{
        console.log('yearMonth', this.yearMonth);
      }
    }
}

new ArticlesExtractor();

