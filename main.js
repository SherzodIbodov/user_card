document.body.style = `background: #f4d04e
`;

const div = document.createElement("div");
document.body.appendChild(div);
div.style = `
width: 384px;
height: 522px;
box-shadow: 8px 8px 0 0 #000;
background-color: #fff;
border-radius: 20px;
fill: #fff;
stroke-width: 1px;
stroke: #111;
margin:0 auto;
paragraph.innerHTML = "<p>Learning</p>";
`;

div.innerHTML = `
<div class="container">
<img src="./imgs/blogimage.png" alt="">
      <div>
          <p class="paragraph">Learning</p>
          <p class="number">Published 21 Dec 2023</p>
          <h1 class="title">HTML & CSS foundations</h1>
          <p class="text">
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>
      </div>
      <div class =" user_name">
          <img src="/imgs/userpic.svg" alt="#">
          <p>Greg Hooper</p>
      </div>
    </div>
`;
