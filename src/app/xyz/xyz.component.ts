import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  months = ["Tháng 1", "Tháng 2", "Tháng 3",
    "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9",
    "Tháng 10", "Tháng 11", "Tháng 12"];
  is_available = true;
  constructor() { }

  ngOnInit(): void {
  }

}
