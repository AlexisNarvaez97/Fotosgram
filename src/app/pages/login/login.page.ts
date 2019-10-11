import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import { IonSlide, IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiserviceService } from '../../services/uiservice.service';
import { Usuario } from '../../../interfaces/interfaces';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', null) slides: IonSlides;
  

  loginUser = {
    email: 'alex@hotmail.com',
    password: 'hola123'
  };

  registerUser: Usuario = {
    email: 'test',
    password: '123456',
    nombre: 'Test',
    avatar: 'av-1.png'
  };

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController, private uiservice: UiserviceService) {}

  ngOnInit() {
    this.slides.lockSwipes(true);
  }


  async login(fLogin: NgForm) {

    if( fLogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
      // Navegar al tabs
    } else {
      //Mostrar alerta de usuario y contraseña de usuario.
      this.uiservice.alertaInformativa('Usuario y contraseña no son correctos');
    }

    console.log(fLogin);
    console.log(fLogin.valid);

  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) { return; }

    const valido = await this.usuarioService.registro(this.registerUser);

    console.log(fRegistro.valid);

    
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
      // Navegar al tabs
    } else {
      //Mostrar alerta de usuario y contraseña de usuario.
      this.uiservice.alertaInformativa('El correo electrónico ya existe');
    }

  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }


}
