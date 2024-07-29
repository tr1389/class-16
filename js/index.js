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
var b=new button("first name")
       var f= function(){
        var button=document.querySelector("button")
        var p=document.querySelector("p")
        if(button.innerText=="first name"){
            p.innerText="رضا"
            button.innerText="family name"

        }
        else if( button.innerText=="family name"){
            p.innerText="ریخته گران"
            button.innerText="first name"

        }


       }
 b.create(f) 