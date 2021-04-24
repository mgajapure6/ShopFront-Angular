import { ScriptService } from './services/script.service';
import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  loadAPI: Promise<any>;

  constructor(private router: Router, 
    private _scriptService: ScriptService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // this.loadAPI = new Promise((resolve) => {
        //   this._scriptService.loadScripts();
        //   resolve(true);
        // });

        // this._scriptService
        //   .load()
        //   .then((data) => {
        //     console.log('script loaded ', data);
        //   })
        //   .catch((error) => console.log(error));
        this._scriptService.loadScripts();
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        setTimeout(()=>{
          
        },100);

        //this._scriptService.loadScripts();
        
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
  ngOnInit(): void {
    // this.loadAPI = new Promise((resolve) => {
    //   this._scriptService.loadScripts();
    //   resolve(true);
    // });
    console.log("ngOnInit app.c");
    this._scriptService.loadScripts();

    //this._scriptService.loadScripts();
  }
}
