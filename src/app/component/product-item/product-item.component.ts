import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductItem } from '../../shared/model/product-item';
import { ProductItemService } from '../../shared/service/product-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit, AfterViewInit {
  productItem?: ProductItem;
  productId: string = '';
  itemIndex: number = 0;
  @ViewChild('attributeRadio')
  attributeRadio!: ElementRef;

  constructor(private productItemService: ProductItemService, private activeRoute: ActivatedRoute) {}
  
  ngAfterViewInit(): void {
    this.attributeRadio.nativeElement.click();
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productId = id !== null ? id : '';
    this.productItem = this.productItemService.getProductItemById(this.productId);
  }

  selectAttribute(event: any){
    this.itemIndex = event.target.value;
  }

}
