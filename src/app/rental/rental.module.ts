import { NgModule } from '@angular/core';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ],
    imports: [CommonModule]
})

export class RentalModule {}