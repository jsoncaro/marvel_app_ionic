import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  character: Item | undefined;
  id: string = "";
  isLoading: boolean = false;
  
  constructor(public charactersService: CharactersService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCharacterData()
  }

  getCharacterData() {
    this.isLoading = true
    this.id = '1011334';
    this.charactersService.getCharacterById(this.id).subscribe(data => {
      this.character = data
      console.log(data)
      this.isLoading = false
    })
  }

}
