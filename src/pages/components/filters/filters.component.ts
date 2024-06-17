import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule,MatListModule,NgFor,NgIf],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() ShowCategories = new EventEmitter<string>()
categories = ['shoes' , 'sport' ,]

onShowCategory(newCategories : string) : void{
this.ShowCategories.emit(newCategories)
}
}
