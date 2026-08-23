// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ht-grande-anse',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.612 11.387a.605.605 0 0 0-.705-.888l-1.449.483a1 1 0 0 1-.683-.02l-1.339-.528a3 3 0 0 0-.626-.172l-4.581-.738a2 2 0 0 1-.991-.462l-.84-.727a3 3 0 0 0-1.547-.703l-1.214-.17a4 4 0 0 0-1.968.218L3.312 8.946a.8.8 0 0 0-.514.82l.069.772a1 1 0 0 1-.068.461l-1.407 3.507a1 1 0 0 0 .086.912l.461.72a1 1 0 0 0 .984.451l8.662-1.24c.243-.036.49-.025.73.03l4.28.98a.6.6 0 0 0 .73-.518l.02-.19a.6.6 0 0 1 .516-.527l2.348-.32a.8.8 0 0 0 .58-.386l.8-1.355z"/></svg>`,
})
export class HtGrandeAnse {
  protected readonly b = inject(GeoIconBase);
}
