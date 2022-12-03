import { NgModule } from "@angular/core";
import { ShellRoutingModule } from "./shell-routing.module";
import { ShellComponent } from "./shell.component";


@NgModule({
    imports: [ShellRoutingModule],
    declarations: [ShellComponent]
})
export class ShellModule {}