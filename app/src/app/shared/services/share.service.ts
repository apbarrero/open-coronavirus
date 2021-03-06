import {Injectable} from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable()
export class ShareService {

    constructor(private socialSharing: SocialSharing) {
    }

    public share() {
        this.socialSharing.shareViaWhatsApp('Estoy usando una app para luchar contra el coronavirus', null, 'https://download-coronapp.com');
    }

}
