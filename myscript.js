(function() {
  //Selecting our node
  var myNode = document.querySelector('ul');

  myNode.addEventListener("click", function(e){
    if (e.target.tagName === 'IMG') {
      console.log(e);
    }
  }, false); //image is clicked
})(); //self executing function
