import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { Usuario1Guard } from './guards/usuario1.guard';

const routes: Routes = [
  {
    path: "main",
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    canLoad: [Usuario1Guard]
    // canActivate: [Usuario1Guard]
  },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
