import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HomePopoverComponent } from 'src/app/components/home-popover/home-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  entryComponents: [ HomePopoverComponent ],
  declarations: [TabsPage, HomePopoverComponent]
})
export class TabsPageModule {}
