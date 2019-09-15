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
    console.log(burger);
    let menu = document.getElementById('bigmenu')
    console.log(menu);
        burger.addEventListener('click',function(){    
        this.classList.toggle('active');
        menu.classList.toggle('open')    
    })

    let burg = document.getElementById('bmenu1');
    console.log(burg);
        burg.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });

        let bmenu = document.getElementById('bmenu2');
        console.log(bmenu);
        bmenu.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });

        let burgmenu = document.getElementById('bmenu3');
        console.log(burgmenu);
        burgmenu.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });
        let facebook = document.getElementById('face');
        console.log(facebook);
        facebook.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });
        let instagram = document.getElementById('instagram');
        console.log(instagram);
        instagram.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });
        let youtube = document.getElementById('you');
        console.log(youtube);
        youtube.addEventListener('click',function(){
            if (burger.classList.contains('active')){
                menu.classList.add('open')
                burger.classList.remove('active')
            }
        });