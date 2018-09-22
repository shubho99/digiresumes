import {Component} from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  template: `
   <div fxLayout="column" fxLayoutGap="20px" fxLayoutAlign="start center">
     <h1>  Disclaimer for DigiResumes.com</h1>
     <p>If you require any more information or have any questions about our site’s disclaimer, 
       please feel free to contact us by email at the shagungarg2010@gmail.com.</p>
     <h2>Disclaimers for DigiResumes.com:</h2>
     <p>All the services on this website is published in good faith. 
        Any action you take the information you find on this website (https://digiresumes.com), is 
       strictly at your own risk. Digi Resume will not be liable for any losses and/or 
       damages in connection with the use of our website.</p>
     <p>Please be also aware that when you leave our website, other sites may have different privacy policies and 
       terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well 
       as their "Terms of Service" before engaging in any business or uploading any information.</p>
     <h2>Consent</h2>
     <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
     <h2>Update</h2>
     <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
   </div>  
  `,
  styles: [`
   
  `]
})
export class DisclaimerComponent {
}