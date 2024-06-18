import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  isHomeActive: any;
  isProductActive: any;
  isProductItemActive: any;

  ngOnInit(): void {
    this.clearHighlight();
    this.isHomeActive = this.setHighlight();
  }

  setHighlight() {
    return {
      'border-radius': '5px',
      'background-color': 'rgba(55, 149, 106, 0.56)',
    };
  }

  clearHighlight() {
    this.isHomeActive = undefined;
    this.isProductActive = undefined;
    this.isProductItemActive = undefined;
  }
}
