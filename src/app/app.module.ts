import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent} from './name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './votetaker/votetaker.component';

@NgModule({
  declarations: [									
    AppComponent,
      DemoComponent,
      DropdownComponent,
      HeroChildComponent,
      HeroParentComponent,
      NameChildComponent,
      NameParentComponent,
      VersionChildComponent,
      VersionParentComponent,
      VoterComponent,
      VoteTakerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
