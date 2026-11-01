// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-af',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m22.235 6.888.057-.11a.8.8 0 0 0-.565-1.159l-1.017-.185a1 1 0 0 0-.55.055l-1.773.709a.6.6 0 0 1-.815-.65l.089-.568a.8.8 0 0 0-.444-.845l-.178-.086a.8.8 0 0 0-1.016.282l-.552.841a2 2 0 0 1-.879.739l-1.742.752a1 1 0 0 1-.726.027l-2.557-.893a1 1 0 0 0-.789.056l-.786.407a1 1 0 0 0-.5.608l-.193.66a1 1 0 0 1-.443.576L4.49 9.534a1 1 0 0 1-.733.12l-.895-.198a.6.6 0 0 0-.687.362l-.879 2.191a1 1 0 0 0-.064.496l.374 3.02a1 1 0 0 0 .814.862l.274.05a.772.772 0 0 1 .434 1.276l-.903 1a.6.6 0 0 0 .247.969l1.401.49a1 1 0 0 0 .485.044l4.594-.717a1 1 0 0 0 .84-.888l.067-.664a1 1 0 0 1 .69-.853l2.895-.924a1 1 0 0 0 .638-.618l.515-1.45c.076-.216.19-.418.334-.595l2.286-2.805a1 1 0 0 0 .208-.812l-.126-.683a1 1 0 0 1 .574-1.092l1.105-.498a1 1 0 0 1 .358-.087l2.067-.11a1 1 0 0 0 .832-.532Z"/></svg>`,
})
export class Af {
  protected readonly b = inject(GeoIconBase);
}
