import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { ComicsService } from '../services/comics/comics.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  comicsList: Item[] = [];
  search: string = "";
  isLoading: boolean = false;

  constructor(public comicsService: ComicsService) {

  }
  ngOnInit(): void {
    this.getAllComics();
  }
  getAllComics() {
    this.isLoading = true
    this.comicsList = []
    this.comicsService.getAllComics(this.search).subscribe(data => {
      this.comicsList = data
      this.isLoading = false
    })
  }

  searchItem(event: any) {
    this.search = event.target.value;
    this.getAllComics()
  }
  
}

