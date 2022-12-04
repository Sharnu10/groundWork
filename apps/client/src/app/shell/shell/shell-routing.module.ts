import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "../../todo/todo/todo.component";
import { ShellComponent } from "./shell.component";

const routes: Routes = [
    // { path: '', loadChildren: () => import('../../todo/todo.module').then((m) => m.TodoModule)},
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'todo',
                component: TodoComponent
            },
            {
                path: 'series',
                loadChildren: () => import('../../series/series.module').then((m) => m.SeriesModule),
            }
        ]
    },
    { path:'**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ShellRoutingModule {}