import { Component, OnInit } from '@angular/core';
import { SleepyRoles } from '../services/sleepyroles.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private role:SleepyRoles) {
    this.roles = this.role.loadRoles();
   }
  roles;
  isSleepy = "hell yeah !!";
  

  ngOnInit(): void {
  }

}
