import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  listappend(id:any,valu:any, iconClass:any){
    let li = document.createElement("li")
    let icon = document.createElement("i")
    icon.className = iconClass
    li.appendChild(icon)
  let el=document.createElement("span");
  el.className="tooltiptext";
  el.innerText=valu;
  li.appendChild(el)
  document.getElementById(id)?.appendChild(li);
  console.log("child apppended");

  }

  listappend2(id:any,valu:any, iconClass:any){
    let li = document.createElement("li")
    let icon = document.createElement("i")
    icon.className = iconClass
    li.appendChild(icon)
  let el=document.createElement("span");
  el.className="tooltiptext2";
  el.innerText=valu;
  li.appendChild(el)
  document.getElementById(id)?.appendChild(li);
  console.log("child apppended");
  }



  tab_toggle_keyup(id:any){
    var v = document.getElementById(id);
    var w= document.querySelectorAll<HTMLElement>('.tooltiptext');
    var a= document.querySelectorAll<HTMLElement>('.tooltiptext2');

    for (var i = 0; i < w.length; i++) {
    var state =  w[i].style.visibility;
    if (state == "visible") w[i].style.visibility = "hidden"
    else w[i].style.visibility = "visible"
    }

    for (var i = 0; i < w.length; i++) {
      var state =  a[i].style.visibility;
      if (state == "visible") a[i].style.visibility = "hidden"
      else a[i].style.visibility = "visible"
      }
  }

}

