// getProjects()
function addNewProject(e) {
    e.preventDefault();
    let projectName=e.target.projectname.value;
    let description=e.target.description.value;
    let urlHeroku=e.target.urlheroku.value;
    let urlGithub=e.target.urlgithub.value;
    let image =e.target.image.value;

    let newProject = {

        projectName: projectName,
        description: description,
        urlHeroku: urlHeroku,
        urlGithub: urlGithub,
        image: image
    }
    fetch('/manager', {
        method: 'POST',
        body: JSON.stringify(newProject),
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then(res => res.json())
        .then(data => {
            // output.innerHTML = `<h1> ${data}</h1>`;
            console.dir(data)

        }).catch(function (err) {
            console.log('Fetch Error :-S', err)
        })
}
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
