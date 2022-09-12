import Site from "./site.js";

const init = () => { 
    doApi();
}
const doApi = async() => { 
    let url = "http://localhost:3000/sites";
    let resp = await axios.get(url);
    // console.log(resp.data);
    createSites(resp.data);
}
const createSites = sites_ar => { 
    console.log(sites_ar)
sites_ar.forEach((item,i) =>{
    let site = new Site("#id_tbody",item,i);
    site.render();
}) 
}

init()