import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";

const routes: Routes = [
    // { path: '', component: TodoComponent },
    { 
        path: '', loadChildren: () => import('./shell/shell/shell.module').then((m) => m.ShellModule),
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
