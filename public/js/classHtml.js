class ItemHtml {
    constructor(_type, attribut1, attribut2, _apend) {
        this._type = document.createElement(_type);
        this.attribut1 = this._type.setAttribute(attribut1, attribut2);
        this._apend = _apend.appendChild(this._type);
    };
    insertHtml(x){
        this._type.innerHTML=x
    };
    
    addClassList(x){
        this._type.classList.add(x);
    };

    setAttrib(x,y){
        this._type.setAttribute(x,y);
    };
    delChild(){
        this._type.remove();
    };

};
export{ItemHtml};