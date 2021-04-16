const body = document.body;
let isHeaderSticky=false;
 
window.addEventListener("scroll", () => {
	if (!isHeaderSticky){
		if (window.pageYOffset > 600){
			isHeaderSticky = true;
			document.querySelector("header").classList.add('revealed');
		}
	} else {
		if (window.pageYOffset < 599){
			isHeaderSticky = false;
			document.querySelector("header").classList.remove('revealed');
		}
	}
});