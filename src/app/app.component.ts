import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store';
}
