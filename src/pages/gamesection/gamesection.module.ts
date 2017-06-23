import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSectionPage } from './gamesection';
import { PopoverPage } from '../popover/popover';

@NgModule({
  declarations: [
    GameSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSectionPage),
  ],
  exports: [
    GameSectionPage
  ],
  entryComponents: [
    GameSectionPage,    
  ]
})
export class GamesectionModule {}
