$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoPlay: 2000,
  items: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

let http = new XMLHttpRequest();

http.open(
  "get",
  "https://rpblog.geekonomy.in/wp-json/wp/v2/posts?_embed",
  true
);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      let getembeddata = item._embedded["wp:featuredmedia"][0]["source_url"];
      output += `       
				<div class="item">
				   <img src="${getembeddata}" />
					<p class="title">${item.slug} </p>
					<a href=${item.link} class="cart" <p> >>   Read More </p> </a>
				</div>
               
			`;
    }
    // document.querySelector(".products").innerHTML = output;
    document.querySelector(".owl-carousel").innerHTML = output;
  }
};
