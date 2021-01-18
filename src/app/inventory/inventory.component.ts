import { Component, OnInit } from '@angular/core'

@Component({
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/inventory/home" routerLinkActive="active-link">
        Inventory Dashboard
      </a>
      <a mat-button routerLink="/inventory/stock" routerLinkActive="active-link">
        Stock Entry
      </a>
      <a mat-button routerLink="/inventory/products" routerLinkActive="active-link">
        Products
      </a>
      <a mat-button routerLink="/inventory/categories" routerLinkActive="active-link">
        Categories
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
