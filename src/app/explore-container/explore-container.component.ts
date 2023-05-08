import { Component, Input } from '@angular/core';
import { Item } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() items: Item[] = [];
  @Input() isLoading: boolean = false;
  constructor(private router: Router) {}  

  navigateToPage1(id: string){
    this.router.navigate(['tabs/tab1/page1/'],{ queryParams: { id: id } });  
  }

}
