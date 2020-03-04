//Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.
function getConsecRun(num) {
    var binaryRep = num.toString(2);
    var substring = "";
    
    return binaryRep.split('').reduce((r) => {
        substring += "1";
      return binaryRep.indexOf(substring) > -1 ? r += 1 : r+=0;
        }, 0)
    }
    
    //returns 7
    getConsecRun(569325)