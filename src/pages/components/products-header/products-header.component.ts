import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() coulumCountChange = new EventEmitter<number>();
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc';
  itemShowCount = 12;
  ngOnInit(): void {}

  onSortUpdate(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemUpdate(newCount: number) {
    this.itemShowCount = newCount;
    this.itemCountChange.emit(newCount);
  }

  onCoulunmUpadate(newCoulum: number) {
    this.coulumCountChange.emit(newCoulum);
  }
}
