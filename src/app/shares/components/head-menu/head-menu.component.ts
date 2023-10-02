import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadMenuComponent implements OnInit {
  menuItems$ = [];

  menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'hero',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/hero'],
      },
      {
        label: 'post',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/post'],
      },
    ];
  }
}
