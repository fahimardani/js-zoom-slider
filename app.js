/* Bekasanmu */
let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let p = document.querySelector('p')

let imgContainer = document.querySelector('.imgContainer')

/* Pre variable */
///////////////////////////////////////////////
const character = [
  {
    order: 1,
    id: "shin-asakura",
    display: "Shin Asakura",
    img: "images/shin-asakura.webp"
  },
  {
    order: 2,
    id: "taro-sakamoto",
    display: "Taro Sakamoto",
    img: "images/taro-sakamoto.webp"
  },
  {
    order: 3,
    id: "aoi-n-hana-sakamoto",
    display: "Aoi Sakamoto <br> Hana Sakamoto",
    img: "images/Aoi-Sakamoto-Hana-Sakamoto.png"
  },
  {
    order: 4,
    id: "heisuke-mashimo",
    display: "Heisuke Mashimo",
    img: "images/heisuke-mashimo.webp"
  },
  {
    order: 5,
    id: "lu-shaotang",
    display: "Lu Shaotang",
    img: "images/lu-shaotang.webp"
  },
  {
    order: 6,
    id: "karasu",
    display: "Karasu",
    img: "images/karasu.png"
  },
]
const characterObj = {}

/* Engine */
///////////////////////////////////////////////
/* -Init function */
// function yang dipakai buat inisiasi

// karena penambahan item itu lebih mudah
// pakai format array. Makanya bentuk dasarannya
// array dulu gak langsung object.
// Tapi eksekusinya full pakai object
// (Array untuk inisiasi doang)
const arrayToObject = function(){
  // pastiin urut. Ini toleransi
  // agar walau arraynya isinya
  // berantakan pun masih bisa
  // diproses
  const orderedCharacter = character.sort((a, b)=>{
    a.order < b.order
  })

  for(const char of orderedCharacter){
    characterObj[char.id] = char
  }
}

/* -Engine function */
// function2 utama pengolahan (mesin utama)
const grayFilter = function(characterId){
  // ubah semua mjd gray
  for(const id in characterObj){
    document.querySelector(`#${characterObj[id].id}`).style.filter = 'grayscale(1)'
    
  }

  // (pengecualian)
  // ubah focused 1 doang mjd warna
  document.querySelector(`#${characterObj[characterId].id}`).style.filter = 'grayscale(0)'
}
const zoom = function(characterId){
  const intervalX = 200 // jarak antar translateX 200 ya?
  const intervalZ = 250 // also
  const focusedOrder = characterObj[characterId].order // fix-sasi urutan gambar yang lagi diklik

  for(char in characterObj){
    const baseLayout = {
      x: -600,
      z: 750
    }
    // ratio untuk masing2 gambar
    // (current order dikurangi yang lagi
    // diklik).
    // Dengan string tolerance (kalau string
    // otomatis diubah ke number)
    const differential = Number(characterObj[char].order-focusedOrder)+3 // pokoknya gitu nemunya ini trial and error
    const calculatedAxis = `translateX(${baseLayout.x+(intervalX*differential)}px) translateZ(${baseLayout.z-(intervalZ*differential)}px)`
    // metode matematika cumming
    document.querySelector(`#${characterObj[char].id}`).style.transform = `perspective(1000px) ${calculatedAxis}`
  }
}

/* -Encapsulate function */
// function yang membundling beberapa
// function lain untuk sekaligus dalam
// 1 eksekusi
const initPosition = function(firstOrderId){
  grayFilter(firstOrderId)
}
const setFocus = function(){
  const focusedId = charCollection[currentSwipe-1] // -1 krn array

  grayFilter(focusedId)
  zoom(focusedId)
  p.innerHTML = characterObj[focusedId].display
}
/* Proses */
///////////////////////////////////////////////
arrayToObject()

const charCollection = Object.keys(characterObj).sort((a, b)=> a.order < b.order)
// -> ['shin-asakura', 'taro-sakamoto', 'aoi-n-hana-sakamoto',...]
let currentSwipe = 1
const mutateSwipe = function(operand){
  if(operand == '++'){
    if(currentSwipe >= charCollection.length) currentSwipe
    else currentSwipe++
  }
  else if(operand == '--'){
    if(currentSwipe <= 1) currentSwipe
    else currentSwipe--
  }
  else{
    throw Error(`Unknown operand ${operand}`)
  }

  setFocus()
}

initPosition(charCollection[currentSwipe-1])

nextBtn.onclick = ()=> mutateSwipe('++')
prevBtn.onclick = ()=> mutateSwipe('--')