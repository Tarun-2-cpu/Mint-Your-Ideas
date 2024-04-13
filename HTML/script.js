console.log("Hey");

document.addEventListener("DOMContentLoaded", function() {
    let readMore = document.querySelector('.read-more-1');
    let readMoreContent = document.querySelector('.Read-More'); 
    let readLess = document.querySelector('.read-less');

    readMore.addEventListener("click", function(e) {
        e.preventDefault();
        if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
            readMoreContent.style.display = "block";
            readMore.innerHTML = "Read Less <i class='uil uil-arrow-right'></i>";
        } else {
            readMoreContent.style.display = "none";
            readMore.innerHTML = "Read More <i class='uil uil-arrow-right'></i>";
        }
    });


    readLess.addEventListener("click", function(e) {
        e.preventDefault();
        readMoreContent.style.display = "none";
    });
});
   
