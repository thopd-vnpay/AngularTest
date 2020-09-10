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
    for (let i in this.menus) {
      this.curLevel = Number(this.menus[i].menu_level);
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
          this.res = this.res + "<a href=\""+this.menus[i].detail_file+"\"><i class=\"icon-inbox\"></i>" +this.menus[i].name+ "</a>\r\n";
        }
      }
      this.preLevel = this.curLevel;
    }
    this.res = this.res + "</li></ul></li>\n";
  }
  getMenuFromService(): void{
    // this.movies = this.movieService.getMovie();
    this.movieService.getMenu().subscribe(
      (updateMenu) =>{
        this.menus = updateMenu;
      }
    );
  }
  ngOnInit(): void {
    this.getMenuFromService();
    this.createMenu();
    console.log(""+this.res);
  }

}
