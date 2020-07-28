import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import {CrudService} from '../crud.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Input() product: Product;
  productForm: any;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.getMovieFromRoute();
  }
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.crudService.getById(id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

}
