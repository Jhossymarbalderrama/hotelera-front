import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelsListingComponent } from "../hotels-listing/hotels-listing.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DpDatePickerModule,
    HotelsListingComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  datePickerConfig = {
    format: 'DD-MM-YYYY'
  }
}
