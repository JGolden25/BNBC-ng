import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable() 
    export class RentalService {
        private rentals: any[] = [{
            id: 1,
            title: "Central Apartment",
            city: "New York",
            street: "Times Square",
            category: "apartment",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 2,
            title: "Central Apartment",
            city: "Dallas",
            street: "San Antonio Street",
            category: "Castle",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 3,
            title: "Central Apartment",
            city: "San Francisco",
            street: "Main Street",
            category: "Mansion",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 4,
            title: "Central Apartment",
            city: "Bratslavia",
            street: "Hlavna",
            category: "Castle",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 5,
            title: "Central Apartment",
            city: "Berlin",
            street: "Haupt Strasse",
            category: "apartment",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 6,
            title: "Central Apartment",
            city: "Montserat",
            street: "Baglva Road",
            category: "House",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 7,
            title: "Central Apartment",
            city: "Houston",
            street: "Rainey Street",
            category: "House",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 8,
            title: "Central Apartment",
            city: "Austin",
            street: "6th Street",
            category: "apartment",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          },
          {
            id: 9,
            title: "Central Apartment",
            city: "Chicago",
            street: "Michigan Ave",
            category: "Condo",
            image: "http://viaplaceholder.com/350x250",
            description: "Room Fit for a King",
            dailyRate: 34,
            shared: false,
            createdAt: "11/2/2019"
          }];

          public getRentalById(rentalId: string): Observable<Rental> {
              return new Observable<Rental>((observer) => {
                  setTimeout(() => {
                    const foundRental = this.rentals.find((rental) => {
                        return rental.id ==rentalId;
                  });

                  observer.next(foundRental);
                }, 500);
              });
          }

    

          public getRentals(): Observable<Rental[]> {
              
              return new Observable<Rental[]>((observer) => {

                setTimeout(() => {
                   
                    observer.next(this.rentals);
                }, 1000);
              });
                 
          }
        
}