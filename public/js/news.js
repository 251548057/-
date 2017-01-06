window.onload = function(){
	var list = document.getElementsByClassName('news');
	var texts = document.getElementsByClassName("otext");
	for(var i=0; i<list.length; i++){
		list[i].addEventListener('touchstart', function(){
			var id = this.getAttribute('dataid');
			var texts = document.getElementsByClassName("otext");
			for(var j=0; j < texts.length; j++){
				if(texts[j].id == id){
					texts[j].style.display = 'block'
				}else{
					texts[j].style.display = 'none'
				}
				
				list[j].setAttribute("class", "news");
			}
			this.setAttribute("class", "news active");
		})
	}
}
