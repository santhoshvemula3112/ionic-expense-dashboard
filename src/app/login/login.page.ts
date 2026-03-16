import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  async login() {
    // Hardcoded credentials
    if (this.username === 'san' && this.password === '9704') {
      this.navCtrl.navigateForward('/dashboard'); // navigate to Dashboard
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Incorrect username or password',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
