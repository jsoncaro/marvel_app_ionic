import { Component, Input } from '@angular/core';
import { Item } from '../models';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() items: Item[] = [];
  @Input() isLoading: boolean = false;

}
