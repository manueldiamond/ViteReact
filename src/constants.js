import {} from "./assets"
//NAV BAR
const navlinks=[
    link("Guide","https://vitejs.dev/guide/"),
    link("Config","https://vitejs.dev/config/"), 
    link("plugins","https://vitejs.dev/plugins/"),
    links("Resources",[
        link("Team"),
        link("Releases"),
        link("Twitter","#",{target:"_blank"}),
        link("Discord Invite","#",{target:"_blank"}),
        link("Awesome Vite","#",{target:"_blank"}),
        link("DEV community","#",{target:"_blank"}),
        link("Rollup Plugins Compat","#",{target:"_blank"}),
        link("Changelog","#",{target:"_blank"})
        
    ]),
    links("Version",[
        link("Vite 2.0 Docs","#",{target:"_blank"}),
        link("Vite 3.0 Docs","#",{target:"_blank"})
    ]),
]

//BRANDING
const name="Vite"
const logoUrl="vite.svg"

//HERO STUFF
const heroText="Next Generation Frontend Tooling"
const heroParagraph="Get ready for a development environment that can finally catch up with you."

const heroActions=[
   link("Get Started","https://vitejs.dev/guide/",{primary:true}),
    link("Why Vite?","https://vitejs.dev/guide/why.html"),
    link("View on Github","https://github.com/vitejs/vite"),
]
// FEATURES
const features=[
    feature("💡", "Instant Server Start",
        "On demand file serving over native ESM, no bundling required!"),
    feature( "⚡️", "Lightning Fast HMR",
        "Hot Module Replacement (HMR) that stays fast regardless of app size."),
    feature("🛠️","Rich Features",
        "Out-of-the-box support for TypeScript, JSX, CSS and more."),
    feature("📦","Optimized Build",
      "Pre-configured Rollup build with multi-page and library mode support."),
    feature("🔩","Universal Plugins",
        "Rollup-superset plugin interface shared between dev and build."),
    feature("🔑","Fully Typed APIs",
        "Flexible programmatic APIs with full TypeScript typing."),
]

// SPONSORS DATA
const sponsorMessage="Vite is free and open source, made possible by wonderful sponsors."
const sponsors={
    "Special":[
        sponsor("stackblitz","https://stackblitz.com/"),
        sponsor("nuxtlabs","https://nuxtlabs.com/"),
        sponsor("astro","https://astro.build/")
    ],
    "Platinum":[
        sponsor("StoryBlok","https://www.storyblok.com/","storyblok.png")],
    
    "Gold":[
        sponsor("Tailwind labs","https://tailwindcss.com/","tailwind_labs.svg"),
        sponsor("vueJobs","https://vuejobs.com/?ref=vuejs","vue_jobs.png"),
        sponsor("divRiots","https://divriots.com/","divriots.png"),
        sponsor("Prefect","https://www.prefect.io/","prefect_io.svg"),
        sponsor("jetBrains","https://www.jetbrains.com/","jetbrains.png"),
        
        sponsor("PineView","https://pineview.io/","pineview_labs.svg"),

        sponsor("mux","https://mux.com/?ref=vitejs"),
    ],
}
const sponsorActions=[
    link("Sponsor Vite","https://github.com/sponsors/vitejs"),
    link("Sponsor Manuel","https://github.com/sponsors/manueldiamond"),
    link("sponsor Farouq","https://github.com/sponsors/Animashaun-Creator"),
    link("Sponsor Mr. Ezra","https://github.com/sponsors/TheShagwell")

]

// FOOTER
const footerMessage="Released under the MIT License. (95f092ff)"
const footerCopywright="Copyright © 2019-present Evan You & Mr Ezra & ITANDT Contributors"

export {
    navlinks,
    name, logoUrl,
    heroText,heroParagraph,heroActions,
    features,
    sponsorMessage,sponsors,sponsorActions,
    footerMessage,footerCopywright,
}

// create a link-text and link-url pair
function link(text="",url="#",extra={}){
    return ({text,url,...extra})
}


function links(text="",links=[]){
    return ({text,links})
}
function feature(icon,title,details) {
    return  ({icon,title,details})
}
function sponsor(name="",link="#",img=""){
    img=img?img:`${name}.svg`
    return ({name,link,img})
}