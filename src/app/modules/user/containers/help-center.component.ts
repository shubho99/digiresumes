import {Component} from '@angular/core';

@Component({
  selector: 'app-help-center',
  template: `
    <div class="coming">
      <h1 style="text-transform: uppercase; color:#538ec3;">Coming Soon</h1>
      <div fxLayout="row" style="border-bottom: 2px solid #80808017; width: 100%;"></div>
      <p style="color: #767270">If you have any query. Please message us on messanger given Below</p>
    </div>    
  `,
  styles: [`
    .coming {
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      line-height: 52px;
      font-size: 20px;
    }
  `]
})
export class HelpCenterComponent {
}
