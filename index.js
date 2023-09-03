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
    },
        // {
        // displayName: "Vmware",
        // iconCode: "vmware"
        // }
    ],
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