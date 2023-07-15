
/**
 * interfaz de mis datos
 */
export interface MenuItem{
    title:String
}
export interface ProjectItem{
    nameImg:string
    title:string
    content:string
    tecnologias:Array<String>
}

/**
 *  Todo los datos de mi pagina
 */ 

export const Menu:Array<MenuItem> = [
    {
        title:"inicio"
    },
    {
        title:"Tecnologías"
    },
    {
        title:"Proyectos"
    },
    {
        title:"Formación"
    },
    {
        title:"Contacto"
    }
]


export const Projects:Array<ProjectItem> = [
    {
        nameImg:"peliculaApi",
        title:"Películas",
        content:"Página web para buscar y ver los detalles de películas más recientes, con la API de TheMoviDB, responsivo y fue construida con las siguientes tecnologías:",
        tecnologias:["React","Html5","Css3","JavaScript"],
    },
    {
        nameImg:"aluraflix",
        title:"AluraFlix",
        content:"Sitio web para ver videos respecto a Alura, responsivo y fue construida con las siguientes tecnologías :",
        tecnologias:["React","Html5","Css3","JavaScript"],
    },
    // {
    //     nameImg:"tasklist",
    //     title:"Lista de tareas",
    //     content:"Sitio web para ver videos respecto a Alura, responsivo y fue construida con las siguientes tecnologías :",
    //     tecnologias:["React","Html5","Css3","JavaScript","TypeScript"],
    // },
    {
        nameImg:"descriptador",
        title:"Descriptador",
        content:"Encriptar y desencriptar texto, responsivo, fue construida con las siguientes tecnologías :",
        tecnologias:["Html5","Css3","JavaScript"],
    },
    // {
    //     nameImg:"org_team",
    //     title:"Organización",
    //     content:"Xrea tu organización y tu equipo, responsivo, fue construida con las siguientes tecnologías",
    //     tecnologias:["React","Html5","Css3","JavaScript","TypeScript"],
    // },
    {
        nameImg:"repli_disney",
        title:"Disney",
        content:"Réplica del inicio del sitio web de Disney, no es responsivo, fue construida con las siguientes tecnologías :",
        tecnologias:["Html5","Css3","JavaScript"],
    },
    
]

export const Icons =[
    {
        nameImg:"react_img.png",
        title:"Reactjs"
    },
    {
        nameImg:"javascript_img.png",
        title:"JavaScript"
    },
    {
        nameImg:"typescript_img.png",
        title:"TypeScript"
    },
    {
        nameImg:"html_img.png",
        title:"HTML5"
    },
    {
        nameImg:"css_img.png",
        title:"CSS3"
    },
    {
        nameImg:"sass_img.png",
        title:"Sass"
    },
    {
        nameImg:"mysql_img.png",
        title:"MySQL"
    },    
    {
        nameImg:"postman_img.png",
        title:"Postman"
    },
    {
        nameImg:"git_img.png",
        title:"Git"
    },
    {
        nameImg:"github_img.png",
        title:"GitHub"
    },
    {
        nameImg:"oracle_img.png",
        title:"Oracle"
    },
    {
        nameImg:"figma_img.png",
        title:"Figma"
    },
    {
        nameImg:"java_img.png",
        title:"Java"
    },
    {
        nameImg:"nodejs_img.png",
        title:"NodeJs"
    },
    {
        nameImg:"php_img.png",
        title:"Php"
    }
]