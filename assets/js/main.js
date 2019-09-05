let buttons = document.getElementsByClassName("damateba");
    

    for(let i =0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            this.classList.toggle('damatebulia');
            if(this.classList.contains("damatebulia")){
                this.textContent = "დამატებულია"
            }
            else{
                this.textContent = "დამატება"
            }
        })
       
    }


