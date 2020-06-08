

	(function(w,d){
		d.querySelector('body').addEventListener('click',function(e){
		addLike(e);
	});
		d.querySelector('.like-wrap').addEventListener('click',function(e){
			this.classList.toggle('like-active');
		addLike(e);
	});
	d.querySelector('.content-wrap').addEventListener('click',function(e){
		addLike(e);
	});
	var likeArr = [];
	function addLike(e){
		var likeDiv = d.createElement('div');
		likeDiv.classList.add('like');
		likeDiv.innerHTML = '<i class="fas fa-heart"></i>';
		d.body.appendChild(likeDiv);
	
		
		likeArr.push({
			el:likeDiv,
			top:e.clientY - 20,
			left:e.clientX - 20,
			opacity: 1,
			scale: 1,
			color: `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
		});
		moveLike();
	};
	function moveLike(){
		for(var i=0;i<likeArr.length;i++){
			if(likeArr[i].opacity <= 0){
				d.body.removeChild(likeArr[i].el);
				likeArr.splice(i,1);
				return;
			}
			likeArr[i].top--;
			likeArr[i].opacity -= 0.01;
			likeArr[i].scale += 0.01;
			likeArr[i].el.style.cssText =`
				top:${likeArr[i].top}px;
				left:${likeArr[i].left}px;
				color:${likeArr[i].color};
				opacity: ${likeArr[i].opacity};
				transform: scale(${likeArr[i].scale});
				`
		}
		w.requestAnimationFrame(moveLike);
	}
})(window,document);







