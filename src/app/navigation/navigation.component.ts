import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( private myser:MyserviceService) { }

  ngOnInit(): void {

    const arr=[
      [1,'fi fi-rr-home'],
      [2, "fi fi-rr-user"],
      [3,'fi fi-rr-envelope'],
      [4,'fi fi-rr-calendar'],
      [5,'fi fi-rr-chart-pie-alt'],
      [6,'fi fi-rr-calendar'],
      [7,'fi fi-rr-chat-arrow-down']
      ];
    const result = from(arr);
    result.pipe(map (r=>["Alt+"+r[0], r[1]])).subscribe(x =>
      // yahan functionality perform karna hai
       this.myser.listappend("myco", x[0],x[1]))

       const brr=[
        ["space",'fi fi-rr-home'],
        ["enter", "fi fi-rr-user"],
        ["shift",'fi fi-rr-envelope'],
        ["right",'fi fi-rr-calendar'],
        ["down",'fi fi-rr-chart-pie-alt'],
        ["left",'fi fi-rr-calendar'],
        ["up",'fi fi-rr-chat-arrow-down']
        ];
      const result2 = from(brr);
      result2.pipe(map (r=>["Alt+"+r[0], r[1]])).subscribe(x =>
        // yahan functionality perform karna hai
         this.myser.listappend2("myco2", x[0],x[1]))


      }

onkey(){
  console.log('hello');

}

}
