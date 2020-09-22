let navbarIcon = document.querySelector(".nav-icon");
let linksContainer = document.getElementById("links-container");
let navbarLogo = document.getElementById("navbar-logo");
let sideBar = document.querySelector('.side-bar');
let toTopBtn = document.getElementById('scroll-top');
navbarIcon.addEventListener('click',function(){
   if(window.outerWidth < 1010 )
   {
        createSideBar();
        document.querySelector('.side-bar').classList.toggle("appear");
        navbarIcon.classList.toggle("xicon");
   }
   else if (window.outerWidth >= 1010 && window.scrollY == 0 )
   {
       navbarIcon.classList.toggle("xicon")
       linksContainer.classList.toggle("appear");
       navbarLogo.classList.toggle("appear"); 
       document.querySelector('.side-bar').classList.remove("appear");

   }
   else if (window.outerWidth > 1010 && window.scrollY >= 10)
   {
    createSideBar();
    document.querySelector('.side-bar').classList.toggle("appear");
    navbarIcon.classList.toggle("xicon");

   }
   
});

window.onscroll = function() 
{
    if(window.scrollY > 10)
    {
        document.querySelector('.nav-icon').classList.add("dark-bg");
       toTopBtn.classList.add('appear');
       
       if( typeof(document.querySelector('.side-bar')) != "undefined" && document.querySelector('.side-bar') != null )
       {
        document.querySelector('.side-bar').classList.remove("hide");

       }
       
    }
    /*
    if(window.scrollY == 0 && window.outerWidth > 1010)
    {
     document.querySelector('.side-bar').classList.add("hide");
    }
    */
    else if (window.scrollY <10)
    {
        document.querySelector('.nav-icon').classList.remove("dark-bg");
       toTopBtn.classList.remove('appear');
    }
}
toTopBtn.onclick = function()
{
    window.scrollTo({top : 0 , behavior:'smooth'});
    
}
//window on scroll 
/*
window.addEventListener("scroll" , function()
{
    if(this.scrollY > 10 )
    {
        navbarIcon.onclick = function(){
            createSideBar();
            document.querySelector('.side-bar').classList.toggle("appear");
            navbarIcon.classList.toggle("xicon");
        }
    }
})
*/
//create side navbar 
function createSideBar()
{
    let sideBarCreated = document.createElement("div");
    sideBarCreated.className = "side-bar";
    let ulContainer = document.createElement("ul");
    // create logo div 
    let logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";
    logoContainer.innerHTML = "ARCHI";
    //append logo div to side bar
    sideBarCreated.appendChild(logoContainer);
    //create six li items
    let liOne = document.createElement("li");
    let liTwo = document.createElement("li");
    let liThree = document.createElement("li");
    let liFour = document.createElement("li");
    let liFive = document.createElement("li");
    let liSix = document.createElement("li");

    //creat six a links
    let linkOne = document.createElement("a");
    let linkTwo = document.createElement("a");
    let linkThree = document.createElement("a");
    let linkFour = document.createElement("a");
    let linkFive = document.createElement("a");
    let linkSix = document.createElement("a");
    
    linkOne.setAttribute("href","#home");
    linkTwo.setAttribute("href" , "#about");
    linkThree.setAttribute("href", "#service");
    linkFour.setAttribute("href", "#project");
    linkFive.setAttribute("href", "#blog");
    linkSix.setAttribute("href", "#contact");


    //append text to links 
    linkOne.innerHTML = "Home";
    linkTwo.innerHTML = "About";
    linkThree.innerHTML = "service";
    linkFour.innerHTML = "Project";
    linkFive.innerHTML = "blog";
    linkSix.innerHTML = "contact";

    //append links to li 
    liOne.appendChild(linkOne);
    liTwo.appendChild(linkTwo);
    liThree.appendChild(linkThree);
    liFour.appendChild(linkFour);
    liFive.appendChild(linkFive);
    liSix.appendChild(linkSix);

    //append li to ul 
    ulContainer.appendChild(liOne);
    ulContainer.appendChild(liTwo);
    ulContainer.appendChild(liThree);
    ulContainer.appendChild(liFour);
    ulContainer.appendChild(liFive);
    ulContainer.appendChild(liSix);
    //append ul to sideBar
    sideBarCreated.appendChild(ulContainer);
    //append side bar to body
    document.body.appendChild(sideBarCreated);
}