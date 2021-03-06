import { TAPi18n } from "meteor/tap:i18n";

Meteor.startup(function () {
	Meteor.subscribe("contacts");

	if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          console.log('ServiceWorker registration successful with scope:',  registration.scope);
        }).catch(function(error) {
          console.log('ServiceWorker registration failed:', error);
        });
      }


    TAPi18n.setLanguage('es')
    	.done(()=>{
    		console.log('OK')
    	})
    	.fail((e)=>{
    		console.log(e)
    	});
 
});