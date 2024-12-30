let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let p = document.querySelector('p')
let tc

let imgContainer = document.querySelector('.imgContainer')
let imgZoom1 = document.querySelector('.imgZoom:nth-child(1)')
let imgZoom2 = document.querySelector('.imgZoom:nth-child(2)')
let imgZoom3 = document.querySelector('.imgZoom:nth-child(3)')
let imgZoom4 = document.querySelector('.imgZoom:nth-child(4)')
let imgZoom5 = document.querySelector('.imgZoom:nth-child(5)')

let grayFilter1 = function(){
  imgZoom1.style.filter = 'grayscale(0)'
  imgZoom2.style.filter = 'grayscale(1)'
  imgZoom3.style.filter = 'grayscale(1)'
  imgZoom4.style.filter = 'grayscale(1)'
  imgZoom5.style.filter = 'grayscale(1)'
}
let grayFilter2 = function(){
  imgZoom1.style.filter = 'grayscale(1)'
  imgZoom2.style.filter = 'grayscale(0)'
  imgZoom3.style.filter = 'grayscale(1)'
  imgZoom4.style.filter = 'grayscale(1)'
  imgZoom5.style.filter = 'grayscale(1)'
}
let grayFilter3 = function(){
  imgZoom1.style.filter = 'grayscale(1)'
  imgZoom2.style.filter = 'grayscale(1)'
  imgZoom3.style.filter = 'grayscale(0)'
  imgZoom4.style.filter = 'grayscale(1)'
  imgZoom5.style.filter = 'grayscale(1)'
}
let grayFilter4 = function(){
  imgZoom1.style.filter = 'grayscale(1)'
  imgZoom2.style.filter = 'grayscale(1)'
  imgZoom3.style.filter = 'grayscale(1)'
  imgZoom4.style.filter = 'grayscale(0)'
  imgZoom5.style.filter = 'grayscale(1)'
}
let grayFilter5 = function(){
  imgZoom1.style.filter = 'grayscale(1)'
  imgZoom2.style.filter = 'grayscale(1)'
  imgZoom3.style.filter = 'grayscale(1)'
  imgZoom4.style.filter = 'grayscale(1)'
  imgZoom5.style.filter = 'grayscale(0)'
}

let zoom1 = function(){
  imgZoom1.style.transform = `perspective(1000px) translateX(-600px) translateZ(750px)`
  imgZoom2.style.transform = `perspective(1000px) translateX(-400px) translateZ(500px)`

  imgZoom3.style.transform = `perspective(1000px) translateX(-200px) translateZ(250px)`
  imgZoom4.style.transform = `perspective(1000px) translateX(0px) translateZ(0px)`
  imgZoom5.style.transform = `perspective(1000px) translateX(200px) translateZ(-250px)`
}
let zoom2 = function(){
  imgZoom1.style.transform = `perspective(1000px) translateX(-400px) translateZ(500px)`
  imgZoom2.style.transform = `perspective(1000px) translateX(-200px) translateZ(250px)`

  imgZoom3.style.transform = `perspective(1000px) translateX(0px) translateZ(0px)`
  imgZoom4.style.transform = `perspective(1000px) translateX(200px) translateZ(-250px)`
  imgZoom5.style.transform = `perspective(1000px) translateX(400px) translateZ(-500px)`
}
let zoom3 = function(){
  imgZoom1.style.transform = `perspective(1000px) translateX(-200px) translateZ(250px)`
  imgZoom2.style.transform = `perspective(1000px) translateX(0px) translateZ(0px)`

  imgZoom3.style.transform = `perspective(1000px) translateX(200px) translateZ(-250px)`
  imgZoom4.style.transform = `perspective(1000px) translateX(400px) translateZ(-500px)`
  imgZoom5.style.transform = `perspective(1000px) translateX(600px) translateZ(-750px)`
}

prevBtn.onclick = ()=> {
  if (p.innerHTML === "Lu Shaotang") {
    p.innerHTML = "Heisuke Mashimo";
    grayFilter4()
    zoom1()
  }
  else if (p.innerHTML === "Heisuke Mashimo") {
    p.innerHTML = "Aoi Sakamoto <br> Hana Sakamoto";
    grayFilter3()
    zoom2()
  }
  else if (p.innerHTML === "Aoi Sakamoto <br> Hana Sakamoto") {
    p.innerHTML = "Taro Sakamoto";
    grayFilter2()
    zoom3()
  }
  else if (p.innerHTML === "Taro Sakamoto") {
    p.innerHTML = "Shin Asakura";
    grayFilter1()

    imgZoom1.style.transform = `perspective(1000px) translateX(0px) translateZ(0px)`
    imgZoom2.style.transform = `perspective(1000px) translateX(200px) translateZ(-250px)`
    
    imgZoom3.style.transform = `perspective(1000px) translateX(400px) translateZ(-500px)`
    imgZoom4.style.transform = `perspective(1000px) translateX(600px) translateZ(-750px)`
    imgZoom5.style.transform = `perspective(1000px) translateX(800px) translateZ(-1000px)`
  }
  else {
    prevBtn = null
  } 

}
nextBtn.onclick = ()=> {

  if (p.innerHTML === "Shin Asakura") {
      p.innerHTML = "Taro Sakamoto";
      grayFilter2()
      zoom3()
  }
  else if (p.innerHTML === "Taro Sakamoto") {
      p.innerHTML = "Aoi Sakamoto <br> Hana Sakamoto";
      grayFilter3()
      zoom2()
  }
  else if (p.innerHTML === "Aoi Sakamoto <br> Hana Sakamoto") {
      p.innerHTML = "Heisuke Mashimo";
      grayFilter4()
      zoom1()
  }
  else if (p.innerHTML === "Heisuke Mashimo") {
      p.innerHTML = "Lu Shaotang";
      grayFilter5()

      imgZoom1.style.transform = `perspective(1000px) translateX(-800px) translateZ(1000px)`
      imgZoom2.style.transform = `perspective(1000px) translateX(-600px) translateZ(750px)`
      
      imgZoom3.style.transform = `perspective(1000px) translateX(-400px) translateZ(500px)`
      imgZoom4.style.transform = `perspective(1000px) translateX(-200px) translateZ(250px)`
      imgZoom5.style.transform = `perspective(1000px) translateX(0px) translateZ(0px)`
  }
  else {
      nextBtn = null
  }

}

