import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicModule, SearchbarChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() control: FormControl;

  updateValue(event: CustomEvent<SearchbarChangeEventDetail>) {
    this.control.setValue(event.detail.value);
  }
}

@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [IonicModule],
})
export class SearchBarComponentModule {}
