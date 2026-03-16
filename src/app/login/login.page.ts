import { Component } from '@angular/core';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  async login() {
    // Simple hardcoded check
    if (this.username === 'san' && this.password === '9704') {
      // Navigate to dashboard
      this.navCtrl.navigateForward('/dashboard');
    } else {
      // Show error alert
      const alert = await this.alertCtrl.create({
        header: 'Login Failed',
        message: 'Incorrect username or password',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
