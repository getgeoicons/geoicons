// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-outback',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.664 17.904-5.127 1.041a1 1 0 0 1-1.066-.48l-.657-1.141a1 1 0 0 0-.224-.267L1.603 14.55a1 1 0 0 1-.352-.863l.21-2.155a.5.5 0 0 1 .356-.431l3.61-1.073a.5.5 0 0 0 .246-.165L8.458 6.43a.5.5 0 0 1 .654-.108l.834.524a.5.5 0 0 0 .651-.105l1.627-1.97a.5.5 0 0 1 .481-.172l1.986.388a.5.5 0 0 1 .32.768l-.533.8a.5.5 0 0 0 .172.714l2.035 1.14a.5.5 0 0 0 .731-.324l.84-3.626a.25.25 0 0 1 .463-.061l1.802 3.395a.5.5 0 0 1 .057.268l-.087 1.267a.5.5 0 0 0 .229.455l.589.377a1 1 0 0 1 .42 1.123l-.334 1.15a1 1 0 0 0-.016.498l.363 1.622a1 1 0 0 0 .187.396l.474.608a1 1 0 0 1 .096 1.081l-1.524 2.887a1 1 0 0 1-1.094.511l-2.445-.524-5.286-1.585a1 1 0 0 0-.486-.022Z"/></svg>`,
})
export class Outback {
  protected readonly b = inject(GeoIconBase);
}
