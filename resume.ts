let sname:any  = document.getElementById("name");
let desig :any = document.getElementById("desig");
let phone :any = document.getElementById("phone");
let email :any = document.getElementById("email");
let address:any = document.getElementById("address");
let depart :any = document.getElementById("depart");
let uni :any = document.getElementById("uni");
let year :any = document.getElementById("year");
let expertise1 :any = document.getElementById("expertise1");
let expertise2 :any = document.getElementById("expertise2");
let expertise3:any = document.getElementById("expertise3");
let expertise4 :any = document.getElementById("expertise4");
let expertise5 :any = document.getElementById("expertise5");
let lang1 :any = document.getElementById("lang1");
let lang2 :any = document.getElementById("lang2");
let syear :any = document.getElementById("syear");
let eyear :any = document.getElementById("eyear");
let company :any = document.getElementById("company");
let companyadd :any = document.getElementById("companyadd");
let jobtitle :any = document.getElementById("jobtitle");
let achievements1 :any = document.getElementById("achievements1");
let achievements2 :any = document.getElementById("achievements2");

let submitbtn = document.getElementById("sub-btn");
let form = document.getElementById("form");
form?.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.setItem("name",sname.value);
    localStorage.setItem("desig",desig.value); 
    localStorage.setItem("phone",phone.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("address",address.value); 
    localStorage.setItem("depart",depart.value);
    localStorage.setItem("uni ",uni .value);
    localStorage.setItem("year",year.value);
    localStorage.setItem("expertise1",expertise1.value);
    localStorage.setItem("expertise2",expertise2.value);
    localStorage.setItem("expertise3",expertise3.value);
    localStorage.setItem("expertise4",expertise4.value);
    localStorage.setItem("expertise5",expertise5.value);
    localStorage.setItem(" lang1", lang1.value);
    localStorage.setItem("lang2",lang2.value);
    localStorage.setItem("syear",syear.value);
    localStorage.setItem("eyear",eyear.value);
    localStorage.setItem("company",company.value);
    localStorage.setItem(" jobtitle ", jobtitle .value);
    localStorage.setItem("achievements1 ",achievements1 .value);
    localStorage.setItem("achievements",achievements2.value);


    window.location.href="./static/staticresume.html";
    
    


    

    
    

})





