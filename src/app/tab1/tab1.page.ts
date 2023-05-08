import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters/characters.service';
import { Item } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  charactersList: Item[] = [];
  search: string = "";
  isLoading: boolean = false;

  constructor(public charactersService: CharactersService) {

  }
  ngOnInit(): void {
    this.getAllCharacters();
  }
  getAllCharacters() {
    this.isLoading = true
    this.charactersList = []
    this.charactersService.getAllCustomers(this.search).subscribe(data => {
      this.charactersList = data
      this.isLoading = false
    })
  }

  searchItem(event: any) {
    this.search = event.target.value;
    this.getAllCharacters()
  }
  
}
