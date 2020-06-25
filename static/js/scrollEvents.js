var x = 0
var nav = document.getElementById('nav-bar')
var btn = document.getElementById('btn-scroll')


function addScroll (resX , resY) {
    
    if(resX > 1000 && resY > 700) {
        window.addEventListener('scroll' , () => {
            console.log(window.scrollY)
            if(window.scrollY > 600) {
                nav.style.borderBottom = 'solid 2px #F8F9FA'
                nav.style.boxShadow = '1px 1px 5px #F8F9FA'
            }

            if (window.scrollY < 600) {
                nav.style.borderBottom = 'solid 2px #FFFFFF'
                nav.style.boxShadow = '0px 0px 0px #F8F9FA'
        
            }
        });
    } else {
        window.addEventListener('scroll' , () => {
            console.log(window.scrollY)
            if(window.scrollY > 375) {
                nav.style.borderBottom = 'solid 2px #F8F9FA'
                nav.style.boxShadow = '1px 1px 5px #F8F9FA'
            }
            if (window.scrollY < 375) {
                nav.style.borderBottom = 'solid 2px #FFFFFF'
                nav.style.boxShadow = '0px 0px 0px #F8F9FA'
            }
        });
    }

}


addScroll(screen.width , screen.height)