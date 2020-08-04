import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
import {Product} from '../product';
import {first} from 'rxjs/operators';
import {User} from '../../_model/user';
import {AuthenticationService} from '../../_service/authentication.service';
import {UserService} from '../../_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  currentUser: User;
  users = [];
  constructor(
    public crudService: CrudService,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllProduct();
  }
  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  deleteProduct(id: number) {
    this.crudService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllProduct());
  }
  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
  private loadAllProduct() {
    this.crudService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    });
  }
}
