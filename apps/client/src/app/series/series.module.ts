import { NgModule } from "@angular/core";
import { SeriesRoutingModule } from "./Series-routing.module";
import { SeriesComponent } from "./series.component";

@NgModule({
    imports: [SeriesRoutingModule],
    declarations: [SeriesComponent]
})
export class SeriesModule {}