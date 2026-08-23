// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-do-hato-mayor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.446 5.544a1 1 0 0 0-.768-.894l-5.245-1.237a1 1 0 0 1-.76-.832l-.054-.373a1 1 0 0 0-.315-.598l-.14-.127a1 1 0 0 0-.652-.262l-.327-.007a1 1 0 0 0-.934.59l-.058.13a1 1 0 0 1-1 .585l-3.448-.306a1 1 0 0 0-1.06.763l-.553 2.296a.3.3 0 0 0 .167.343l3.747 1.714 4.046 2.084a.6.6 0 0 1 .101 1l-1.658 1.333a1 1 0 0 0-.364.915l.545 3.98c.067.487.223.958.46 1.388l2.23 4.047a.6.6 0 0 0 .964.12l1.207-1.293a1 1 0 0 0 .27-.7l-.012-.635a1 1 0 0 1 .472-.867l1.4-.87a1 1 0 0 0 .44-.6l.681-2.637a1 1 0 0 0-.222-.916L13.87 9.486a.8.8 0 0 1-.186-.696l.148-.71a1 1 0 0 1 1.285-.747l4.582 1.475a.8.8 0 0 0 .992-.476l.006-.015a.8.8 0 0 0-.31-.955l-1.483-.969a1 1 0 0 1-.45-.758z"/></svg>`,
})
export class DoHatoMayor {
  protected readonly b = inject(GeoIconBase);
}
