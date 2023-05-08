import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  eventsList: Item[] = [];
  search: string = "";
  isLoading: boolean = false;

  constructor(public eventsService: EventsService) {

  }
  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents() {
    this.isLoading = true
    this.eventsList = []
    this.eventsService.getAllEvents(this.search).subscribe(data => {
      this.eventsList = data
      this.isLoading = false
    })
  }

  searchItem(event: any) {
    this.search = event.target.value;
    this.getAllEvents()
  }

}


