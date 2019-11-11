module.exports = {
 normalizeErrors: function(errors) {
     for (let property in errors) {
         if(errors.hasOwnProperty(property)) {
             this.normalizeErrors.push({title:property, detail:errors[property].message});
         }
     }

     return this.normalizeErrors;
 }
}