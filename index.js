var images;

images = [
  "https://images.unsplash.com/photo-1662499021931-f78e5c2e9f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxnbGFzZ293fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1697809561309-58bb1e0fb914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdsYXNnb3d8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1661549519888-e2ea0bad293e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxnbGFzZ293fGVufDB8fDB8fHww",
];
let element_display_image = document.getElementById("display_image");
element_display_image.setAttribute("src", images[0]);

document.getElementById("next").addEventListener("click", (event) => {
  let element_display_image2 = document.getElementById("display_image");
  images.push(images[0]);
  images.shift();
  let element_display_image3 = document.getElementById("display_image");
  element_display_image3.setAttribute("src", images[0]);
});

document.getElementById("previous").addEventListener("click", (event) => {
  let element_display_image4 = document.getElementById("display_image");
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_display_image5 = document.getElementById("display_image");
  element_display_image5.setAttribute("src", images[0]);
});
