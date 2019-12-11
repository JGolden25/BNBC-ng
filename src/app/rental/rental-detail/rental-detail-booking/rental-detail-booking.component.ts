import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/shared/booking.model';
import { Rental } from '../../shared/rental.model';
import { HelperService } from '../../../common/service/helper.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'bwm-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.scss']
})
export class RentalDetailBookingComponent implements OnInit {

  @Input() rental: Rental;
  @Input() bookings: Booking[];
  
  newBooking: Booking;

  daterange: any = {};
  bookedOutDates: any[] = [];

  options: any = {
    locale: { format: Booking.DATE_FORMAT },
    alwaysShowCalendars: false,
    opens: 'left',
    isInvalidDate: this.checkForInvalidDates.bind(this)
};
  constructor(private helper: HelperService, 
              private modalService: NgbModal) { }

  ngOnInit() {
    this.newBooking = new Booking();
    this.getBookedOutDates;
  }

  private checkForInvalidDates(date) {
    return this.bookedOutDates.includes(this.helper.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
    
  }

  private getBookedOutDates() {
    const bookings: Booking[] = this.rental.bookings;

    if (bookings && bookings.length > 0) {
      bookings.forEach((booking: Booking) => {
        const dateRange = this.helper.getBookingRangeOfDates(booking.startAt, booking.endAt);
        this.bookedOutDates.push(...dateRange);
      });
    }
  }

  openConfirmModal(content) {
    this.modalService.open(content);
  }

  createBooking() {
    console.log(this.newBooking);
  }


    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        // any object can be passed to the selected event and it will be passed back here
        this.newBooking.startAt =  this.helper.formatBookingDate(value.start);
        this.newBooking.endAt =  this.helper.formatBookingDate(value.end);
        this.newBooking.days = -(value.start.diff(value.end, 'days'));
        this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
    }

}
