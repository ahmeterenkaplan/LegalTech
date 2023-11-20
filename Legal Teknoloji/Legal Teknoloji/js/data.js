let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     
     english: {
          title: "Anchor provides a fantastic living experience and its facilities accommodate every students needs.",
          description: "hello world"  } ,
     turkish: {
          title: "Anchor, her öğrencinin ihtiyacını karşılayacak tesisleriyle harika bir yaşam deneyimi sunar.",
          description: "Selam Dünya" }
}