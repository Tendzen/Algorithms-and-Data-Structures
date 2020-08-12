Longest Word:
  Function LongestWord(sen) { 
    sen = sen.replace(/[^a-zA-z0-9]/gi,' ');  
    let arr = sen.split(' ');
    arr.sort(countLen);

    return arr.shift();

  function countLen(a,b){
    return b.length - a.length;
  }  
}

First Reverse:
  function FirstReverse(str) { 
    let arr = str.split("");
    arr.reverse();
    let result = arr.join("");
    return result; 
}

Bracket Matcher:
  Function LetterChanges(str) { 

  let newStr = str.replace(/[a-zA-Z]/g,function(letter) {
    return (letter == 'z' || letter == 'Z') ? 'a' : String.fromCharCode(letter.charCodeAt() +1);
  });
  let result = newStr.replace(/a|e|i|o|u/g,function(letter){
    return letter.toUpperCase();
  });
  return result; 
}

Binary Reversal:
  function BinaryReversal(str) { 
 
  let binary = parseFloat(str).toString(2);
  let stringArr = binary.split("");
  let reverseStringArr = stringArr.reverse();
  while(reverseStringArr.length % 8 ){
    reverseStringArr.push('0');
  }
  let reverseBinaryNumber = reverseStringArr.join("");
  let intResult = parseInt(reverseBinaryNumber,2);
  
  return intResult; 

}

Find Intersection:
  function FindIntersection(strArr) { 

  const [first,second] = strArr.map(x => x.split(', '));

  const result = [];
  const compareArr = {};

  for (let i of first){
    compareArr[i] = true;
  }
  for(let i of second){
    if(compareArr[i]){
      result.push(i);
    }
  }
  
  if(result.length > 0){
    return result.join(',');
  }else{
    return false;
  }

}

Title Case a SentencePassed:
  function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    str = str.map(function(el){
    return el.replace(el.charAt(0),el.charAt(0).toUpperCase())
  });
  return str.join(' ');
}


Chunky Monkey:
  function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, size));
  }
  return newArr;
}







