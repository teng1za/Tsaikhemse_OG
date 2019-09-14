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

    let burger = document.getElementsById('burger');
    let menu = document.getElementsByClassId('menu')
    burger.addEventListener('click',function(){
    this.classList.toggle('active');
    menu.classList.toggle('open');
    })