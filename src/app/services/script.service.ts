import { Injectable } from '@angular/core';

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  scriptArr : any = [
    //"assets/vendor/jquery/jquery.min.js",
    // "assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
    // "assets/vendor/magnific-popup/jquery.magnific-popup.min.js",
    // "assets/vendor/photoswipe/photoswipe.min.js",
    // "assets/vendor/photoswipe/photoswipe-ui-default.min.js",
    // "assets/vendor/owl-carousel/owl.carousel.min.js",
    // "assets/vendor/elevatezoom/jquery.elevatezoom.min.js",
    // "assets/vendor/sticky/sticky.min.js",
    "assets/js/main.min.js",
    //"assets/js/test.js"
  ];

  

  loadScripts(){
    let sa = document.querySelectorAll('.script-r');
    if(sa.length>0){
      for(let i = 0; i< sa.length; i++){
        sa[i].remove();
      }
    }
    for (let i = 0; i < this.scriptArr.length; i++) {
      const node = document.createElement('script');
      node.src = this.scriptArr[i];
      node.type = 'text/javascript';
      node.async = false;
      node.className = "script-r";
      document.getElementsByTagName('body')[0].appendChild(node);
    } 
  }

  scriptArrOfObj : any = [
    //name: "", src : "assets/vendor/jquery/jquery.min.js",
    // {name: "a", src : "assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"},
    // {name: "b", src : "assets/vendor/magnific-popup/jquery.magnific-popup.min.js"},
    // {name: "c", src : "assets/vendor/photoswipe/photoswipe.min.js"},
    // {name: "d", src : "assets/vendor/photoswipe/photoswipe-ui-default.min.js"},
    // {name: "e", src : "assets/vendor/owl-carousel/owl.carousel.min.js"},
    // {name: "f", src : "assets/vendor/elevatezoom/jquery.elevatezoom.min.js"},
    // {name: "i", src : "assets/vendor/sticky/sticky.min.js"},
    {name: "j", src : "assets/js/main.min.js"}
  ];  

  private scripts: any = {};

  constructor() {
      this.scriptArrOfObj.forEach((script: any) => {
          this.scripts[script.name] = {
              loaded: false,
              src: script.src
          };
      });
  }
  
  load() {
      let scripts : string[] = ["j"]
      var promises: any[] = [];
      scripts.forEach((script) => promises.push(this.loadScript(script)));
      return Promise.all(promises);
  }
  
  loadScript(name: string) {
      return new Promise((resolve, reject) => {
          //resolve if already loaded
          if (this.scripts[name].loaded) {
              resolve({script: name, loaded: true, status: 'Already Loaded'});
          }
          else {
              //load script
              let script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = this.scripts[name].src;
              if (script.readyState) {  //IE
                  script.onreadystatechange = () => {
                      if (script.readyState === "loaded" || script.readyState === "complete") {
                          script.onreadystatechange = null;
                          this.scripts[name].loaded = true;
                          resolve({script: name, loaded: true, status: 'Loaded'});
                      }
                  };
              } else {  //Others
                  script.onload = () => {
                      this.scripts[name].loaded = true;
                      resolve({script: name, loaded: true, status: 'Loaded'});
                  };
              }
              script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
              document.getElementsByTagName('head')[0].appendChild(script);
          }
      });
  }

}
