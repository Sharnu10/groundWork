import { NgModule } from "@angular/core";
import { ShellRoutingModule } from "./shell-routing.module";
import { ShellComponent } from "./shell.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

const matModules = [ MatButtonModule, MatTooltipModule ];

@NgModule({
    imports: [ShellRoutingModule, matModules],
    declarations: [ShellComponent],
    exports: [matModules]
})
export class ShellModule {}