import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "../../todo/todo/todo.component";

const routes: Routes = [
    { path: '', component: TodoComponent },
    { path:'**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ShellRoutingModule {}