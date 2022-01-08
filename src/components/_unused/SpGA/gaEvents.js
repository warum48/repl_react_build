/*export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};

export const justAnAlert = () => {
   alert('hello');
};*/
//console.log('winga', window.ga);

export const gaEvents = {
    sendEvent : function(fields){
        console.log(fields);
        //alert(fields);
        try{
          if(typeof ga == 'undefined'){
            var ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          }
          ga(function(){
            ga(ga.getAll()[ga.getAll().length-1].get('name')+'.send', fields);
          });
        }catch(e){
          console && console.log('spGA', e, fields);
        };
      },
    
    sendPageview : function(){
        var event = {hitType: 'pageview', page: window.location.pathname};
        this.sendEvent(event);
    }
}