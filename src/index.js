module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
    if (number < 100){
        return getFullDecimalString (number);
    }
    if (number % 100 == 0) {
        return getSinglNumberString(number / 100) + ' hundred';
    }
    if (99 < number < 1000) {
        return getSinglNumberString(Math.floor(number / 100)) + ' hundred ' + getFullDecimalString(number % 100);
    }
}

function getFullDecimalString (number) {
    if (0 < number && number < 20) {
        return getSinglNumberString(number);
    }
    if (19 < number && number < 100){
        if (number % 10 == 0) {
            return getDecimalNumberString(Math.floor(number / 10));
        }
        return getDecimalNumberString(Math.floor(number / 10)) + ' ' + getSinglNumberString(number % 10);
    }
}

function getSinglNumberString (number) {
    switch (number) {
        case 0 : return '';
        case 1 : return 'one';
        case 2 : return 'two';
        case 3 : return 'three';
        case 4 : return 'four';
        case 5 : return 'five';
        case 6 : return 'six';
        case 7 : return 'seven';
        case 8 : return 'eight';
        case 9 : return 'nine';
        case 10 : return 'ten';
        case 11 : return 'eleven';
        case 12 : return 'twelve';
        case 13 : return 'thirteen';
        case 14 : return 'fourteen'
        case 15 : return 'fifteen';
        case 16 : return 'sixteen';
        case 17 : return 'seventeen';
        case 18 : return 'eighteen';
        case 19 : return 'nineteen';
    }    
} 
  
function getDecimalNumberString (number) {
    switch (number){
        case 2 : return 'twenty';
        case 3 : return 'thirty';
        case 4 : return 'forty';
        case 5 : return 'fifty';
        case 6 : return 'sixty';
        case 7 : return 'seventy';
        case 8 : return 'eighty';
        case 9 : return 'ninety';
    }
  }
