/* DESTRUCTURING OBJECTS 
   - While working with the properties of a object we have to access them using dot/bracket notation
     again and again.
   - It becomes hectic and makes code complex for reading!
   
   - Hence, destructuring is preffered where the properties can be made a separate entity and 
     can even have a custom name!
     
     
   # Syntax
   const/let {property} = <object_name> OR we can have property: customName */

const repository = {
    name: "LearnJavaScript",
    repositoryOwner: "VedisVigourous",
    platform: "Github"
}

// Destructuring the owner
const {repositoryOwner: owner, platform: pf} = repository
console.log(`\n Repository Owner: ${owner} & Platform: ${pf}`)




/* ========================
    HANDLING JSON-API DATA
   ========================
   
   - Definition of APIs: An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured, enabling developers to access and manipulate data or services provided by another application or platform.

   - JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as text.

   - JSON-API is a specification for building APIs in JSON format. It provides a standardized way to structure and exchange data between clients and servers, making it easier to work with APIs and ensuring consistency across different implementations. 
   
   
   Note: Sometimes data received may be an array of objects!
   
   Structure of Data in JSON format:
   {
     "key1": "value1",
     "key2": "value2"
   }
     
   Where, all the keys are strings and values can be of any data type (string, number, boolean, array, object, etc.) */


// JSON Formatter is used for better understanding - check '01_SupportingImg'