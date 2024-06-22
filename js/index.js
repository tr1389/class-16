class button{
     button;
     constructor(text){
        this.button=document.createElement("button")
        this.button.innerText=text
        var body=document.querySelector("body")
        body.appendChild(this.button)

     }
    create(f){
        this.button.addEventListener("click",f)
    } 
      

}
var b=new button("translate to German")
       var f= function(){
        var button=document.querySelector("button")
        var title=document.querySelector("title")
        var p=document.querySelector("p")
        if(button.innerText=="translate to German"){
            title.innerText="Meine Einleitung"
            p.innerText="Hallo! Ich bin Reza. Ich bin 13 Jahre alt."
            button.innerText="translate to English"

        }
        else if( button.innerText=="translate to English"){
            title.innerText="My introduction"
            p.innerText="Hello! I am Reza. I am 13."
            button.innerText="translate to German"

        }


       }
 b.create(f) 