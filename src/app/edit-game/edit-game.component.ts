import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService]
})
export class EditGameComponent implements OnInit {
   @Input() selectedGame;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  beginUpdatingGame(gameToUpdate){
      this.gameService.updateGame(gameToUpdate);
    }

    beginDeletingGame(gameToDelete){
   if(confirm("Are you sure you want to delete this item from the inventory?")){
     this.gameService.deleteGame(gameToDelete);
   }
 }
}
