// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-aw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.386 15.94 2.73 10.384a1 1 0 0 1-.157-1.229l.992-1.653a2 2 0 0 0 .232-.572l.189-.805a2 2 0 0 0-.05-1.09L3.411 3.47a1 1 0 0 0-.268-.415l-.332-.309a.767.767 0 0 1 1.001-1.16l2.574 2.06a1 1 0 0 1 .296.389l.558 1.313a2 2 0 0 0 .443.648l1.636 1.6a2 2 0 0 0 .52.367l3.622 1.769a1 1 0 0 1 .345.277l1.987 2.508q.071.09.16.16l3.3 2.627a1 1 0 0 1 .323.456l1.906 5.532a1 1 0 0 1-.69 1.293l-.463.122a1 1 0 0 1-.68-.062l-3.694-1.737a1 1 0 0 1-.17-.102l-5.225-3.88a1 1 0 0 0-.226-.126l-1.618-.644a1 1 0 0 1-.33-.216Z"/></svg>`,
})
export class Aw {
  protected readonly b = inject(GeoIconBase);
}
