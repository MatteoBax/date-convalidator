
# date-convalidator

This tool allows you to check if a date is entered correctly



## Usage

```javascript
const convalidate = require('@matteobax/date-convalidator');
let date=''; // The date to check (separators - / . can be used)
let format = '' // The format of date (dd/mm/yyyy , yyyy/mm/dd , mm/dd/yyyy)
let check = convalidate.checkDate(date, format);
if(check==0){
    console.log('correct date');
}else if (check==-1){
    console.log('wrong date');
}
```

## Installation

```
npm i @matteobax/date-convalidator
```
