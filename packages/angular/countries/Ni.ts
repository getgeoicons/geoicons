// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ni',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.974 11.739-1.67.14a.5.5 0 0 0-.303.86l7.717 7.383a.5.5 0 0 0 .298.137l5.326.513a.5.5 0 0 1 .19.059l3.149 1.71a.5.5 0 0 0 .412.03l.732-.271a.5.5 0 0 0 .317-.562l-.87-4.642a.5.5 0 0 1 .098-.401l1.544-1.97a.5.5 0 0 0 .104-.353l-.43-4.856a.5.5 0 0 1 .032-.227l1.646-4.174a.5.5 0 0 0 .03-.116l.392-2.833a.5.5 0 0 0-.663-.54l-5.368 1.905a.5.5 0 0 1-.38-.019l-1.471-.693a.5.5 0 0 0-.573.105L10.28 7.011a.5.5 0 0 1-.667.046l-.61-.477a.5.5 0 0 0-.5-.068L5.676 7.68a.5.5 0 0 0-.29.323l-.973 3.376a.5.5 0 0 1-.438.36Z"/></svg>`,
})
export class Ni {
  protected readonly b = inject(GeoIconBase);
}
