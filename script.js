var div = document.querySelector(".div")
div.style.left = localStorage.l
div.style.top = localStorage.t

var a = false
class Menu {
    handleEvent(event) {
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
     	a = true
    }
    onMouseleave(){
    	a = flase
    }

    onMouseup() {
      	localStorage.l = div.style.left,
		localStorage.t = div.style.top,
		a = false
    }
    onMousemove(e){
    	if(a == true){
    	div.style.left = e.pageX-125+"px"
		div.style.top = e.pageY-125+"px"
		}
    }
  }

  let menu = new Menu();
div.addEventListener('mousedown', menu);
div.addEventListener('mouseup', menu);
div.addEventListener('mousemove', menu);
div.addEventListener('mouseleave', menu);


