// Traverse the DOM!

function traverse_dom(search_term) {
  //I want to traverse all the div elements in the DOM and find
  //elements to find one whose
  var elements = document.getElementsbyTagName('div');
  for (var i=0; i < elements.length; i++){
    if (elements[i].innerText === search_term) {
    return elements[i];
    }
  }
  return null;
}
//   return result;
// }

// we can drille down to propertys


function feed_the_shark() {
  document.getElementsbyTagName('img')[0].width *= 1.1;

}


function grow_the_shark() {

  var timer = setInterval( feed_the_shark,3000)
}