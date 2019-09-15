// ---------added product----------
let add_buttons = document.getElementsByClassName('addtocart');
console.log(add_buttons);

for (let i=0; i < add_buttons.length;
    i++) {
        add_buttons[i].addEventListener('click', function(){
        this.classList.toggle('added');
        if(this.classList.contains('added')){
            this.textContent = 'დამატებულია';
        } else {
            this.textContent = 'დამატება';
        }
        })
    }
// ------------burger menu----------
    let burger = document.getElementById('bbactive');
    let menu = document.getElementById('bigmenu')
        burger.addEventListener('click',function(){    
        this.classList.toggle('active');
        menu.classList.toggle('open');
        

    })