import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'toolti' ;
  @ViewChild("tabtoogle") tabtoogle:any;
  constructor(private mystl:MyserviceService) {
  }
  ngAfterViewInit(): void {
    fromEvent(this.tabtoogle.nativeElement,'').subscribe(
      res=>{
        console.log("hello");
        this.mystl.tab_toggle_keyup("myco");

      }
    )



  }

}
