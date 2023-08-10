///
/// Copyright © 2023 ThingsBoard, Inc.
///

import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { AltisEntitiesHierarchyWidgetComponent } from './altis-entities-hierarchy-widget.component';

@NgModule({
  declarations: [
    AltisEntitiesHierarchyWidgetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AltisEntitiesHierarchyWidgetComponent,
  ],
  schemas: [
    // NO_ERRORS_SCHEMA
  ],
})
export class AltisEntitiesHierarchyWidgetModule {
}
