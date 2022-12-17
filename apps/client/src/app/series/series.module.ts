import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [CoreModule, SeriesRoutingModule],
  declarations: [SeriesComponent],
})
export class SeriesModule {}
