const today = new Date();

let value = today;

console.log(value);

value = today.getFullYear();
console.log(value);

value = today.getMonth(); //months start 0 
console.log(value);
value = today.getMinutes();
console.log(value);
value = today.getHours();
console.log(value);
value = today.getTime(); //since 1970
console.log(value);

moment.locale('en')
console.log(moment().format('MMMM DD YYYY h:mm:ss'))