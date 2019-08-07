import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {ServicesRequestService} from "../../servirces/services/services-request.service";
import {Reservation} from "../../models/reservation";
import {AuthSessionService} from "../../servirces/authenticate/auth-session.service";
import {personClient} from "../../models/personClient";
import {ReservationsRequestService} from "../../servirces/reservations/reservations-request.service";

@Component({
  selector: 'app-get-reservations-by-user',
  templateUrl: './get-reservations-by-user.component.html',
  styleUrls: ['./get-reservations-by-user.component.css'],
  providers: [MessageService]
})
export class GetReservationsByUserComponent implements OnInit {
  user: personClient;
  reservations: Reservation []

  constructor(private request: ServicesRequestService, private authservices: AuthSessionService, private reservationsServices: ReservationsRequestService) {
  }

  ngOnInit() {
    this.user = this.authservices.getCurrentUser()
    this.getReservations()
  }

  getFormatDate(dateAc: string) {
    let data = new Date(dateAc)
    let dataFormat = data.getFullYear() + "/" + data.getMonth() + "/" + data.getDay()
    return dataFormat
  }

  getReservations() {

    this.reservationsServices.getReservations(this.user.id).subscribe(data => {
      this.reservations = data['data']


    }, error => console.log(error));
  }

}
