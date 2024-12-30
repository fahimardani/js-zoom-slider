let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let p = document.querySelector('p')

let imgZoom = document.querySelectorAll('.imgZoom')
let imgArray = []
for(let i = 0; i < imgZoom.length; i++){
  imgArray.push(imgZoom[i])
}

let perspective = 'perspective(1000px)'
let bnw = 'grayscale(1)'
let notBnw = 'grayscale(0)'

let zoom = ()=> {
  let X = -(click * 200)
  let Z = click * 250
  
  imgZoom[0].style.transform = `${perspective} translateX(${X}px) translateZ(${Z}px)`
  imgZoom[1].style.transform = `${perspective} translateX(${X + 200}px) translateZ(${Z - 250}px)`
  imgZoom[2].style.transform = `${perspective} translateX(${X + 400}px) translateZ(${Z - 500}px)`
  imgZoom[3].style.transform = `${perspective} translateX(${X + 600}px) translateZ(${Z - 750}px)`
  imgZoom[4].style.transform = `${perspective} translateX(${X + 800}px) translateZ(${Z - 1000}px)`
}

let click = 0
prevBtn.onclick = ()=> {
  click--
  
  if (p.innerHTML === "Lu Shaotang") {
    p.innerHTML = "Heisuke Mashimo";
    zoom()

    imgZoom[4].style.filter = bnw
    imgZoom[3].style.filter = notBnw
    nextBtn.disabled = false
  }
  else if (p.innerHTML === "Heisuke Mashimo") {
    p.innerHTML = "Aoi Sakamoto <br> Hana Sakamoto";
    zoom()

    imgZoom[3].style.filter = bnw
    imgZoom[2].style.filter = notBnw
  }
  else if (p.innerHTML === "Aoi Sakamoto <br> Hana Sakamoto") {
    p.innerHTML = "Taro Sakamoto";
    zoom()

    imgZoom[2].style.filter = bnw
    imgZoom[1].style.filter = notBnw
  }
  else {
    p.innerHTML = "Shin Asakura";
    zoom()

    imgZoom[1].style.filter = bnw
    imgZoom[0].style.filter = notBnw
    prevBtn.disabled = true
  }
}
nextBtn.onclick = ()=> {
  click++

  if (p.innerHTML === "Shin Asakura") {
    p.innerHTML = "Taro Sakamoto";
    zoom()
      
    imgZoom[0].style.filter = bnw
    imgZoom[1].style.filter = notBnw
    prevBtn.disabled = false
  }
  else if (p.innerHTML === "Taro Sakamoto") {
    p.innerHTML = "Aoi Sakamoto <br> Hana Sakamoto";
    zoom()

    imgZoom[1].style.filter = bnw
    imgZoom[2].style.filter = notBnw
  }
  else if (p.innerHTML === "Aoi Sakamoto <br> Hana Sakamoto") {
    p.innerHTML = "Heisuke Mashimo";
    zoom()

    imgZoom[2].style.filter = bnw
    imgZoom[3].style.filter = notBnw
  }
  else {
    p.innerHTML = "Lu Shaotang";
    zoom()

    imgZoom[3].style.filter = bnw
    imgZoom[4].style.filter = notBnw
    nextBtn.disabled = true
  }
}