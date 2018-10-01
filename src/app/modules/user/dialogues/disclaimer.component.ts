import {Component} from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  template: `
    <div fxLayout="column" fxLayoutGap="20px" fxLayoutAlign="start center">
      <h1> Disclaimer for DigiResumes.com</h1>
      <p>If you require any more information or have any questions about our site’s disclaimer,
        please feel free to contact us by email at the  contact@digiresumes.com.</p>
      <h2>Disclaimers for DigiResumes.com:</h2>
      <p>All the information on this website - www.digiresumes.com - is published in good faith and for general information purpose
        only. Digi Resume does not make any warranties about the completeness, reliability and accuracy of this information. Any action you
        take upon the information you find on this website (Digi Resume), is strictly at your own risk. Digi Resume will not be liable for
        any losses and/or damages in connection with the use of our website.</p>
      <p>From our website, you can visit other websites by clicking on ads. While we strive to provide only
        quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other
        websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice
        and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
      <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond
        our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any
        business or uploading any information.</p>
      <h2>Consent</h2>
      <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
      <h2>Update</h2>
      <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
    </div>
  `,
  styles: [`
    h1, h2, p {
      color: #515d6b;
    }

  `]
})
export class DisclaimerComponent {
}
