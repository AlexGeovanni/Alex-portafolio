
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
    repos:string
    deploy:string
    animate:string
}

/**
 *  Todo los datos de mi pagina
 */ 

export const Menu:Array<MenuItem> = [
    {
        title:"Inicio"
    },
    {
        title:"Tecnologías"
    },
    {
        title:"Proyectos"
    },
    {
        title:"Formación"
    }
]


export const Projects:Array<ProjectItem> = [
    {
        nameImg:"ecommerce",
        title:"E-commerce",
        content:"Página web simulación de un tienda en linea, donde puedes registrarte e iniciar sessión, muestra todos los productos filtrar los dato y carrito de compras.",
        tecnologias:["React","Html5","Sass","Bootstrap","JavaScript"],
        repos:"https://github.com/AlexGeovanni/App-ecoomercer-react",
        deploy:"https://app-ecoomercer-react.vercel.app/",
        animate:"fade-right"

    },
    {
        nameImg:"api_rest",
        title:"Api REST",
        content:"CRUD más información en el repositorio, actualmente el servicio donde se alojó ha caducado.",
        tecnologias:["JavaScript","nodejs","Express","MySQL"],
        repos:"https://github.com/AlexGeovanni/API_REST_DESEMPLEO",
        deploy:"",
        animate:"fade-left"
    },
    {
        nameImg:"aluraflix",
        title:"AluraFlix",
        content:"Un proyecto de un sitio web para ver videos respecto a Alura, responsivo.",
        tecnologias:["React","Html5","Css3","JavaScript"],
        repos:"https://github.com/AlexGeovanni/Aluraflixx",
        deploy:"https://aluraflixx.vercel.app/",
        animate:"fade-right"
    },
    // {
    //     nameImg:"tasklist",
    //     title:"Lista de tareas",
    //     content:"Sitio web para ver videos respecto a Alura, responsivo y fue construida con las siguientes tecnologías :",
    //     tecnologias:["React","Html5","Css3","JavaScript","TypeScript"],
    // },
    // {
    //     nameImg:"descriptador",
    //     title:"Descriptador",
    //     content:"Encriptar y desencriptar texto, responsivo, construida con :",
    //     tecnologias:["Html5","Css3","JavaScript"],
    //     repos:"https://github.com/AlexGeovanni/Descriptador",
    //     deploy:"https://alexgeovanni.github.io/Descriptador/"
    // },
    // {
    //     nameImg:"org_team",
    //     title:"Organización",
    //     content:"Xrea tu organización y tu equipo, responsivo, fue construida con las siguientes tecnologías",
    //     tecnologias:["React","Html5","Css3","JavaScript","TypeScript"],
    // },
    {
        nameImg:"repli_disney",
        title:"Disney",
        content:"Réplica del inicio del sitio web de Disney, no es responsivo.",
        tecnologias:["Html5","Css3","JavaScript"],
        repos:"https://github.com/AlexGeovanni/miniProyect_Disney",
        deploy:"https://alexgeovanni.github.io/miniProyect_Disney/Interface_Disney/Index.html",
        animate:"fade-left"
    },
    
]

export const Icons =[
    
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
        nameImg:"react_img.png",
        title:"Reactjs"
    },
    {
        nameImg:"css_img.png",
        title:"CSS3"
    },
    {
        nameImg:"astro_img.png",
        title:"Astro"
    },
    {
        nameImg:"sass_img.png",
        title:"Sass"
    },
    {
        nameImg:"bootstrap_img.png",
        title:"Bootstrap"
    },
    {
        nameImg:"java_img.png",
        title:"Java"
    },
    {
        nameImg:"spring_img.png",
        title:"Spring-boot"
    },
    {
        nameImg:"mysql_img.png",
        title:"MySQL"
    },
    {
        nameImg:"oracle_img.png",
        title:"SQL Server"
    },
    {
        nameImg:"git_img.png",
        title:"Git"
    },{
        nameImg:"docker_img.png",
        title:"Docker"
    },
    {
        nameImg:"github_img.png",
        title:"GitHub"
    },
    {
        nameImg:"figma_img.png",
        title:"Figma"
    }
    
]