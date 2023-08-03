const backgrounds=['background1','background2','background3','background4'];
const linksimages = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c8454b6-7f8b-4244-8f64-33f709a9f921/dbfjw4x-badbc3ff-d11e-4d2e-b6be-1e4642b95e43.png/v1/fill/w_784,h_1020/goku_nuevo_estado___render___dragon_ball_super_by_fradayesmarkers_dbfjw4x-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMzMiIsInBhdGgiOiJcL2ZcLzRjODQ1NGI2LTdmOGItNDI0NC04ZjY0LTMzZjcwOWE5ZjkyMVwvZGJmanc0eC1iYWRiYzNmZi1kMTFlLTRkMmUtYjZiZS0xZTQ2NDJiOTVlNDMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fIcByeNyix3shNSMyLXC2BFgJzgnO1w35l2j40pN8N8",
"https://www.pngplay.com/wp-content/uploads/12/Vegeta-No-Background.png",'https://i.pinimg.com/originals/8f/26/3c/8f263ccf8b6cf9beefe4f915e3f4b4f7.png', 'https://i.pinimg.com/originals/f0/cf/81/f0cf819a0cb57d55cb17cbd9d217fcc7.png']
const linksimages2 = ["https://cdnb.artstation.com/p/assets/images/images/028/367/001/large/jose-americo-neto-wallpaper-goku-3.jpg?1594258983","https://getwallpapers.com/wallpaper/full/3/e/e/206851.jpg", "https://images2.alphacoders.com/673/673501.jpg","https://cdn.wallpapersafari.com/35/6/GXDZQY.jpg"]
const text = ['Goku',"Vegeta", "Gohan", "Trunks"]
const numbers = ['#23','#33', "#12", '#7']
const serial =['#2123erd12341r','#1233e67t8921h',"#123334ju2op2e", "#34pl2j786ef34"]
const list1 = ['filter1','filter2','filter3','filter4']
const elements1 = ['circle','circle2', 'circle3','circle4']
const skill1title= ['Fuerza', 'Potencia',"Fuerza", "Poder"]
const skill3title = ['Resistencia',"Agilidad", "Rapidez"]
const skill3img = ['https://cdn-icons-png.flaticon.com/256/5399/5399638.png',"https://cdn-icons-png.flaticon.com/256/4727/4727247.png"]
const skill1img = ["https://cdn-icons-png.flaticon.com/256/2690/2690150.png", "https://cdn-icons-png.flaticon.com/256/1923/1923605.png", "https://cdn-icons-png.flaticon.com/256/2690/2690150.png", "https://cdn-icons-png.flaticon.com/256/616/616666.png"]
const elements2 = ['https://i.pinimg.com/originals/e4/d0/61/e4d06193bc75257b6c4bf3b1e07f5d2f.png','https://2img.net/h/i7.photobucket.com/albums/y295/super_lalis/renders/image19wk7.png', "https://marbal.files.wordpress.com/2011/11/las-mejores-imagenes-de-gohan-dragon-ball-88.png", 'https://www.pngplay.com/wp-content/uploads/12/Trunks-Transparent-Images.png']
const boton = document.getElementById('button');
const fondo = document.getElementById("fondo");
const body = document.getElementById('tag1')
const serial1 = document.getElementById("serial")
const caracter = document.getElementById('caracter')
const dimention = document.getElementById('card')
const changecolor = document.getElementById('tag2')
const changecolor2 = document.getElementById('tag3')
let size = backgrounds.length
let number1 = Math.floor(Math.random()*size)
let cont=0
let cont2 =0
var img = document.getElementById('image-fondo')
var img2 = document.getElementById('image-fondo3')
var img3 = document.getElementById('skill1-img1')
var element = document.getElementById('element1')
window.addEventListener('load',function(){
    boton.addEventListener('click',function(){
        cont+=1
        let remove=backgrounds[cont-1]
        let remove2=elements1[cont-1]
        let remove3= list1[cont-1]
        if (cont===size){
            cont=0
            cont2=0
            document.getElementById('tag4').innerText=skill3title[cont2]
            document.getElementById('tag5').src = skill3img[cont2]
        }else if(cont===2){
            cont2+=1
            document.getElementById('tag4').innerText=skill3title[cont2]
            document.getElementById('tag5').src = skill3img[cont2]
        }
        fondo.classList.remove(remove)
        fondo.classList.add(backgrounds[cont])
        if((cont+1)%2===0){
            changecolor.classList.add('color')
            changecolor2.classList.add('color')
        }else{
            changecolor.classList.remove('color')
            changecolor2.classList.remove('color')
        }
        element.classList.remove(remove2)
        dimention.classList.remove(remove3)
        element.classList.add(elements1[cont])
        body.classList.add('transition')
        dimention.classList.add(list1[cont])
        document.getElementById('text1').innerText = text[cont]
        document.getElementById('span').innerText = numbers[cont]
        document.getElementById('skill1-title1').innerText = skill1title[cont]
        img.src=linksimages[cont]
        img2.src=linksimages2[cont]
        img3.src=skill1img[cont]
        caracter.src=elements2[cont]
        serial1.innerText=serial[cont]
        setTimeout(function(){
            body.classList.remove('transition')
        }, 1000)
        console.log(cont)
    })
})  