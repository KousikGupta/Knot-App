import { NgModule } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';


const materialComponents = [
  // MatButtonModule,
  MatCarouselModule.forRoot(),
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
