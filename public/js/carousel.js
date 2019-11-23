getProjects()
function getProjects() {
    fetch('/getprojects')
        .then(res => {

            res.json().then(data => {

                console.log("data",data)
                let dataDOM = '';
                let p1='';
                let p2='';
                for (let i = 0; i < data.length; i++) {
                    
                    if(i===0){
                        dataDOM+=`<img src="${data[i].image}" alt="" style="width: 100%;height:30vw;" class="lastPic" >`
                        p1=`<img src="${data[i].image}" alt="" style="width: 100%;height:30vw;"  >`
                    }
                    
                    else{
                        dataDOM+=`<img src="${data[i].image}" alt="" style="width: 100%;height:30vw;" >`
                        if(i===1){
                            p2=`<img src="${data[i].image}" alt= "" style="width: 100%;height:30vw;" class="firstPic" >`
                        }
                    }
                   

             
                    // dataDOM += `<div class="project">
                    // Project Name: <p>${data[i].projectName} </p>
                    // Description: <p>${data[i].description}</p>
                    // <hr>
                    // <a href=${data[i].urlHeroku}>Visit Heroku</a>
                    // <hr>
                    // <a href=${data[i].urlGithub}>Visit Github</a>
                    // <hr>
                    // Image: <img src="${data[i].image}" height="50vw">
                    // </div>`
                }
                dataDOM+=p1+p2;
console.log(dataDOM)

                let carouselSlide = document.querySelector('.carousel-slide');
                carouselSlide.innerHTML = dataDOM;

                // }).catch(function (err) {
                //     console.log('Fetch Error :-S', err);
                // })
            })

        })
}

const carouselSlide=document.querySelector('.carousel-slide')
const carouselImages=document.querySelectorAll('img')

const prevBtn=document.querySelector('.prevBtn')
const nextBtn=document.querySelector('.nextBtn')

let counter=1;
const size=carouselImages[0].clientWidth;
console.dir(carouselImages)
carouselSlide.style.transform='translateX('+ (-size * counter)+ 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >=carouselImages.length -1)return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX('+ (-size * counter)+ 'px)';
})



prevBtn.addEventListener('click',()=>{
    if(counter<=0)return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform='translateX('+ (-size * counter)+ 'px)';
})
carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].className==='lastPic'){
        carouselSlide.style.transition='none';
        counter=carouselImages.length-2;
        carouselSlide.style.transform='translateX('+ (-size * counter)+ 'px)';
    }
    if(carouselImages[counter].className==='firstPic'){
        carouselSlide.style.transition='none';
        counter=carouselImages.length-counter
        carouselSlide.style.transform='translateX('+ (-size * counter)+ 'px)';
    }
})