export default class Site{
    constructor(_parent,_item,_index){
        this.parent = _parent;
        this.index = _index;
        this.name = _item.name;
        this.url = _item.url;
        this.image =_item.image;
        this.score = _item.score;
    }
    render(){
        let tr = document.createElement("tr");
        document.querySelector(this.parent).append(tr);
        tr.innerHTML +=`
        <td>${this.index+1}</td>
        <td>${this.name}</td>
        <td class="url-site text-primary">${this.url}</td>
        <td><img class="image-td" src="${this.image}" alt="${this.name}"></td>
        <td>${this.score}</td>
        `
        tr.querySelector(".url-site").addEventListener("click",()=>{
            console.log("pass to another page")
            window.open(this.url,"_blank");
        })
    }
}