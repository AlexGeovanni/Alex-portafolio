
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
        nameImg:"ecommerce",
        title:"E-commerce",
        content:"Página web simulación de un tienda en linea, donde puedes registrarte e iniciar sessión, muestra todos los productos filtrar los dato y carrito de compras :",
        tecnologias:["React","Html5","Sass","Bootstrap","JavaScript"],
        repos:"https://github.com/AlexGeovanni/App-ecoomercer-react",
        deploy:"https://app-ecoomercer-react.vercel.app/",
        animate:"fade-right"

    },
    {
        nameImg:"api_rest",
        title:"Api REST",
        content:"CRUD más información en el repositorio, actualmente el servicio donde se alojó ha caducado, construida con :",
        tecnologias:["JavaScript","nodejs","Express","MySQL"],
        repos:"https://github.com/AlexGeovanni/API_REST_DESEMPLEO",
        deploy:"",
        animate:"fade-left"
    },
    {
        nameImg:"aluraflix",
        title:"AluraFlix",
        content:"Sitio web para ver videos respecto a Alura, responsivo, construida con :",
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
        content:"Réplica del inicio del sitio web de Disney, no es responsivo, construida con :",
        tecnologias:["Html5","Css3","JavaScript"],
        repos:"https://github.com/AlexGeovanni/miniProyect_Disney",
        deploy:"https://alexgeovanni.github.io/miniProyect_Disney/Interface_Disney/Index.html",
        animate:"fade-left"
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
        nameImg:"bootstrap_img.png",
        title:"Bootstrap"
    },
    {
        nameImg:"vercel_img.png",
        title:"Vercel"
    },
    {
        nameImg:"astro_img.png",
        title:"Astro"
    },
]