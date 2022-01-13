import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListComponent {
  @Input() data: string[] = [];
  public displayData: string[] = [];

  @Input() set search(searchTerm: string) {
    this.displayData = this.data.filter(
      (value) =>
        !searchTerm ||
        searchTerm === '' ||
        value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }
}

@NgModule({
  declarations: [DataListComponent],
  exports: [DataListComponent],
  imports: [IonicModule, CommonModule],
})
export class DataListComponentModule {}
