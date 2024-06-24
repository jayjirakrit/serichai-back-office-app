import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() isShowIcon: boolean = true;
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Input() isShowSelectPageOptions: boolean = true;
  @Input() pageSizeOptions?: number[] = [5, 10, 15];

  @Output('pageChange') pageChangeEvent: EventEmitter<number> =
    new EventEmitter<number>(false);
  @Output('pageSizeChange') pageSizeChangeEvent: EventEmitter<number> =
    new EventEmitter<number>(false);

  listOfPageSize: Array<number> = [];
  itemsPerPageOption: number;

  pageSize: number;

  ngOnInit(): void {
    this.itemsPerPageOption = 5;
    // this.pageSize = this.getPageSize(this.totalItems, this.itemsPerPageOption);
    // this.listOfPageSize = this.getPageSizeAsArray(this.pageSize);
  }

  getPageSize(totalItems: number, pageSizeOption: number): number {
    if (totalItems % pageSizeOption === 0) {
      return totalItems / pageSizeOption;
    } else {
      const quotient = Math.floor(totalItems / this.itemsPerPageOption);
      return quotient + 1;
    }
  }

  getPageSizeAsArray(n: number): Array<number> {
    return Array(n);
  }

  getNumberOfDataRecord(
    currentPage: number,
    pageSizeOption: number,
    totalItems: number
  ) {
    let lastItem =
      totalItems < currentPage * pageSizeOption
        ? totalItems
        : currentPage * pageSizeOption;
    let startItem =
      lastItem === totalItems ? lastItem : lastItem - pageSizeOption + 1;
    return { startItem: startItem, lastItem: lastItem };
  }

  onSelectPageSize($event) {
    this.itemsPerPageOption = Number($event);
    this.pageSize = this.getPageSize(this.totalItems, this.itemsPerPageOption);
    this.listOfPageSize = this.getPageSizeAsArray(this.pageSize);
    this.pageSizeChangeEvent.emit(this.itemsPerPageOption);
  }

  onNext() {
    this.currentPage++;
    this.pageChangeEvent.emit(this.currentPage);
  }
  onPrev() {
    this.currentPage--;
    this.pageChangeEvent.emit(this.currentPage);
  }
  goToPage(page: number) {
    this.currentPage = page;
    this.pageChangeEvent.emit(this.currentPage);
  }
}
