import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StoreService } from '../../../store.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, MatListModule, NgFor, NgIf],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit ,OnDestroy{
  @Output() ShowCategories = new EventEmitter<string>();
  CategorySubscripiton!: Subscription | undefined;
  categories: Array<string> |undefined ;
  constructor(private category: StoreService) {}

 
  ngOnInit(): void {
    this.CategorySubscripiton = this.category
      .getCategories()
      .subscribe((response) => {
        this.categories =response;
      });
  }
  onShowCategory(newCategories: string) :void{
    this.ShowCategories.emit(newCategories);
  }

  

  ngOnDestroy(): void {
    if (this.CategorySubscripiton) {
      this.CategorySubscripiton.unsubscribe()
    }
  }
}
