const mainFunction =()=>{
    const images = document.querySelectorAll(".grid img");
    const mainImage = document.querySelector("#mainImage");
    const title = document.querySelector(".title");

    for(i=0; i<images.length;i++){
        images[i].addEventListener("click",function(){
            mainImage.src = this.src;
            console.log("clicked")
        });
    };
} ;
mainFunction();