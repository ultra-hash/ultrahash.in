const catagories = ["Programming Languages",
    "Web Development",
    "Database Management",
    "Server Management",
    "Containerization and Virtualization",
    "Version Control"
]

const skills = {
    0: [{
        displayName: "Python",
        iconCode: "python"
    }, {
        displayName: "JavaScript",
        iconCode: "javascript"
    }, {
        displayName: "php",
        iconCode: "php"
    }],
    1: [{
        displayName: "Html",
        iconCode: "html"
    }, {
        displayName: "CSS",
        iconCode: "css"
    }, {
        displayName: "NodeJs",
        iconCode: "nodejs"
    }, {
        displayName: "ExpressJs",
        iconCode: "expressjs"
    }, {
        displayName: "ReactJs",
        iconCode: "react"
    }, {
        displayName: "Bootstrap",
        iconCode: "bootstrap"
    }, {
        displayName: "Django",
        iconCode: "django"
    }],
    2: [{
        displayName: "MySQL",
        iconCode: "mysql"
    }, {
        displayName: "SQLite",
        iconCode: "sqlite"
    }],
    3: [{
        displayName: "Linux",
        iconCode: "linux"
    }, {
        displayName: "Nginx",
        iconCode: "nginx"
    }],
    4: [{
        displayName: "Docker",
        iconCode: "docker"
    }],
    5: [{
        displayName: "Git",
        iconCode: "git"
    }]
}


const activeCategory = 0

const skillsContainer = document.getElementById('skills-container')

const createSkillContainer = (obj) => {
    const imgElement = document.createElement('img')
    imgElement.src = `https://skillicons.dev/icons?i=${obj.iconCode}&theme=dark`

    const paraElement = document.createElement('p')
    paraElement.textContent = obj.displayName
    paraElement.style.fontWeight = 'bold'

    const divElement = document.createElement('div')
    divElement.style.textAlign = 'center'
    divElement.style.flexGrow = 1
    divElement.style.flexShrink = 0


    divElement.appendChild(imgElement)
    divElement.appendChild(paraElement)
    skillsContainer.appendChild(divElement)
}

const generateSkill = (activeCategory) => {
    // skillsContainer.textContent = ""
    skills[activeCategory].map(eachObj => {
        createSkillContainer(eachObj)
        console.log(eachObj)
    })
}


catagories.map((eachObj, index) => {
    generateSkill(index)
})

const projects_list = [
    {
        "title": "NxtTrends App",
        "description": "An E-Commerce Platform",
        "thumbnailImage": "./images/projects/NxtTrends React App.png",
        "altText": "NxtTrends",
        "projectLink": "https://uvswamynxttrend.ccbp.tech"
    },
    {
        "title": "NxtWatch",
        "description": "An Youtube Clone App",
        "thumbnailImage": "./images/projects/NxtWatch React App.png",
        "altText": "NxtWatch",
        "projectLink": "https://uvswamynxtwatch.ccbp.tech"
    },
    {
        "title": "BookHub",
        "description": "An Books Library App",
        "thumbnailImage": "./images/projects/BookHub React App.png",
        "altText": "BookHub",
        "projectLink": "https://uvswamybookhub.ccbp.tech"
    },
    {
        "title": "NxtSlides",
        "description": "An Slides Presentation App",
        "thumbnailImage": "./images/projects/NxtSlides React App.png",
        "altText": "NxtSlides",
        "projectLink": "#"
    },
    {
        "title": "Jobby",
        "description": "An Job Searching Platform",
        "thumbnailImage": "./images/projects/Jobby React App.png",
        "altText": "Jobby",
        "projectLink": "https://uvswamyjobby.ccbp.tech/"
    },
    {
        "title": "My Journey",
        "description": "An timeline using React-chrono library's timeline component ",
        "thumbnailImage": "./images/projects/My Journey React App.png",
        "altText": "My Journey",
        "projectLink": "https://uvswamytimeline.ccbp.tech/"
    },
    {
        "title": "CoWin Dashboard",
        "description": "A Dashboard using ReCharts library",
        "thumbnailImage": "./images/projects/CoWin Dashboard React App.png",
        "altText": "CoWin Dashboard",
        "projectLink": "https://uvswamycowin.ccbp.tech"
    },
    {
        "title": "Popular Github Repos",
        "description": "Displaying repos by fetching data from api.",
        "thumbnailImage": "./images/projects/Popular Github Repos React App.png",
        "altText": "Popular Github Repos",
        "projectLink": "https://uvswamypopular.ccbp.tech/"
    },
    {
        "title": "Ipl Dashboard",
        "description": "Displaying the fetched data from api in a structure way.",
        "thumbnailImage": "./images/projects/Ipl Dashboard React App.png",
        "altText": "Ipl Dashboard",
        "projectLink": "https://uvswamyipldash.ccbp.tech"
    },
    {
        "title": "Blog",
        "description": "An mini Blog.",
        "thumbnailImage": "./images/projects/Blog React App.png",
        "altText": "Blog",
        "projectLink": "https://uvswamyminiblog.ccbp.tech/"
    },
    {
        "title": "Match Game",
        "description": "A match the images to score high before time runs out.",
        "thumbnailImage": "./images/projects/Match Game React App.png",
        "altText": "Match Game",
        "projectLink": "https://uvswamymatch.ccbp.tech/"
    },
    {
        "title": "StopWatch",
        "description": "An StopWatch with start, stop and reset functionality.",
        "thumbnailImage": "./images/projects/StopWatch React App.png",
        "altText": "StopWatch",
        "projectLink": "https://uvswamystopwat.ccbp.tech/"
    },
    {
        "title": "Digital Timer",
        "description": "An Timer App with set, start, stop and reset the timer.",
        "thumbnailImage": "./images/projects/Digital Timer React App.png",
        "altText": "Digital Timer",
        "projectLink": "https://uvswamydigitime.ccbp.tech/"
    },
    {
        "title": "Emoji Game",
        "description": "Avoid clicking on emojis that you've already selected.",
        "thumbnailImage": "./images/projects/Emoji Game React App.png",
        "altText": "Emoji Game",
        "projectLink": "https://uvswamyemoji.ccbp.tech/"
    },
    {
        "title": "Money Manager",
        "description": "lets you track income, expenses, balances and displays transactions.",
        "thumbnailImage": "./images/projects/Money Manager React App.png",
        "altText": "Money Manager",
        "projectLink": "https://uvswamymoneyman.ccbp.tech/"
    },
    {
        "title": "Appointment",
        "description": "Quick access to your important appointments",
        "thumbnailImage": "./images/projects/Appointment React App.png",
        "altText": "Appointment",
        "projectLink": "https://uvswamyappoint.ccbp.tech/"
    },
    {
        "title": "App Store",
        "description": "You can search for apps and filter them by category.",
        "thumbnailImage": "./images/projects/App Store React App.png",
        "altText": "App Store",
        "projectLink": "https://uvswamyappstore.ccbp.tech/"
    },
    {
        "title": "Gallery App",
        "description": "Explore your photos with ease",
        "thumbnailImage": "./images/projects/Gallery App React App.png",
        "altText": "Gallery App",
        "projectLink": "https://uvswamygallery.ccbp.tech/"
    },
    {
        "title": "Feedback Form",
        "description": "Helping you gather valuable input for improvement",
        "thumbnailImage": "./images/projects/Feedback Form React App.png",
        "altText": "Feedback Form",
        "projectLink": "https://uvswamyfeedback.ccbp.tech/"
    },
    {
        "title": "Wiki app",
        "description": " Your go-to source for quick access to a vast database of knowledge",
        "thumbnailImage": "./images/projects/wikiapp React App.png",
        "altText": "Wiki App",
        "projectLink": "https://uvswamywikiapp.ccbp.tech"
    },
    {
        "title": "Sweep Home Cleaners Page",
        "description": "Designed using HTML, CSS, and Bootstrap.",
        "thumbnailImage": "./images/projects/Sweep Home Cleaners Page.png",
        "altText": "Sweep Home Cleaners Page",
        "projectLink": "https://cleaningservice.ccbp.tech"
    },
    {
        "title": "Minimal Shopping Cart Page",
        "description": "Designed using HTML, CSS, and Bootstrap.",
        "thumbnailImage": "./images/projects/Minimal Shopping Cart Page.png",
        "altText": "Minimal Shopping Cart Page",
        "projectLink": "https://minimalshopping.ccbp.tech"
    },
    {
        "title": "Landing Page",
        "description": "Designed using HTML, CSS, and Bootstrap.",
        "thumbnailImage": "./images/projects/Landing Page.png",
        "altText": "Landing Page",
        "projectLink": "https://reswebpage.ccbp.tech/"
    },
    {
        "title": "Shoe Landing Page",
        "description": "Designed using HTML, CSS, and Bootstrap.",
        "thumbnailImage": "./images/projects/shoe landing page.png",
        "altText": "shoe landing Page",
        "projectLink": "https://shoelandingpage.ccbp.tech"
    }
]



let projects_block_size = 6
let projects_shown_size = 0


const projectColumn = (obj) => {
    let columnElement = document.createElement('div')
    columnElement.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4')

    let anchorElement = document.createElement('a')
    anchorElement.href = obj.projectLink
    anchorElement.target = '_blank'

    let frontCard = document.createElement('div')
    frontCard.classList.add('front-card')

    let imageElement = document.createElement('img')
    imageElement.classList.add('w-100')
    imageElement.src = obj.thumbnailImage
    imageElement.alt = obj.altText

    frontCard.appendChild(imageElement)
    anchorElement.appendChild(frontCard)

    let backCard = document.createElement('div')
    backCard.classList.add('back-card')

    let h5Element = document.createElement('h5')
    h5Element.textContent = obj.title
    backCard.appendChild(h5Element)

    let pElement = document.createElement('p')
    pElement.textContent = obj.description
    backCard.appendChild(pElement)

    anchorElement.appendChild(backCard)
    columnElement.appendChild(anchorElement)

    document.getElementById('projects').childNodes[1].childNodes[3].appendChild(columnElement)

}


const showMoreProjects = (event) => {
    if (projects_shown_size + projects_block_size > projects_list.length) {
        projects_block_size = projects_list.length - projects_shown_size
    }

    for (let i = projects_shown_size; i < projects_shown_size + projects_block_size; i++) {
        projectColumn(projects_list[i])
    }

    projects_shown_size += projects_block_size

    if (projects_list.length <= projects_shown_size) {
        event.target.parentElement.removeChild(event.target)
    }
    projects_block_size = 6
}

showMoreProjects()