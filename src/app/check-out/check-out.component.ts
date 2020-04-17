import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../authguard.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private guardService:AuthGuardService) { }

  ngOnInit() {
  }

}
