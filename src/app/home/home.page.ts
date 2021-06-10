import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MediaCapture} from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private callNumber: CallNumber, private mediaCapture: MediaCapture) {}

  callNow(number) {
    this.callNumber.callNumber(number, true)
      .then(res =>  {
        console.log('Launched dialer!', res)
        this.startRecording();
      })
      .catch(err => console.log('Error launching dialer', err));
  }

  startRecording() {
    this.mediaCapture.captureAudio().then((res) => {
      console.log('media is being captureed');
    }).catch((error) => {
      console.log('error while capturing audio');
    })
  }


 
}
