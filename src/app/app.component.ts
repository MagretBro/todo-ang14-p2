import { Component } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';
import { ViewChild, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to-do-ang-14';

  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnInit(): void {
    // Открываем мат-выдвижной ящик при загрузке страницы
    if (this.drawer) {
      this.drawer.open();
    }
  }
}



