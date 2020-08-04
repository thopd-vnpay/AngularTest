import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import {CrudService} from '../crud.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Input() product: Product;
  productForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.getMovieFromRoute();
  }
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.crudService.getById(id).subscribe(product => this.product = product);
  }
  submitForm() {
    console.log("CCCCCCCC:"+JSON.stringify(this.productForm.value));
    this.crudService.update(this.productForm.value).subscribe(res => {
        console.log('Product created!');
        this.router.navigateByUrl('/crud/home/')
      }
    )
  }
  goBack(): void {
    this.location.back();
  }

}
