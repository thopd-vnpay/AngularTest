import {Component, HostListener, OnInit, Pipe, PipeTransform, ViewEncapsulation} from '@angular/core';
import {MovieService} from '../../movie.service';
import {Menu} from '../../_model/menu';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {
  menus: Menu[];
  res: string = "";
  curLevel = 0;
  preLevel = -1;
  constructor(private movieService: MovieService) { }
  createMenu(): void{
    console.log("ASSSSSSSSSSSSSSSSSSSSSSS3"+this.menus);
    for (let i in this.menus) {
      this.curLevel = Number(this.menus[i].menuLevel);
      if (this.curLevel > this.preLevel) {
        if (this.res != ""){
          this.res = this.res+ "<ul id=\"togglePages"+(Number(i)-1)+"\" class=\"collapse unstyled\"><li>\n";
        }
      } else if (this.curLevel < this.preLevel) {
        this.res = this.res+ "</li></ul></li>\n";
      }
      if (this.menus[i].name != "_cmSplit") {
        if (this.curLevel <= 1) {
          this.res = this.res + "<li>\r\n" +
            "<a class=\"collapsed\" data-toggle=\"collapse\" href=\"#togglePages"+i+"\"><i class=\"menu-icon icon-cog\"></i><i class=\"icon-chevron-down pull-right\"></i><i class=\"icon-chevron-up pull-right\"></i>"+this.menus[i].name+"</a>";
        } else {
          this.res = this.res + "<a href=\""+this.menus[i].detailFile+"\"><i class=\"icon-inbox\"></i>" +this.menus[i].name+ "</a>\r\n";
        }
      }
      this.preLevel = this.curLevel;
    }
    this.res = this.res + "</li></ul></li>\n";
  }
  getMenuFromService(): void {
    // this.movies = this.movieService.getMovie();
    const data = {
      "Provider": "get_menu",
      "ParamSize": "2",
      "Page": "0",
      "PageSize": "5",
      "P1": "admin",
      "P2": "1",
    };
    this.movieService.getMenu(data).subscribe(
      response => {
        console.log(response);
        this.menus = response;
        this.createMenu();
      },
      error => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    this.getMenuFromService();
  }

}
