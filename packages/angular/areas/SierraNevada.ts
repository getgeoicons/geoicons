// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sierra-nevada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.946 1.2v8.894a1 1 0 0 0 .373.779l3.563 2.869a1 1 0 0 1 .308.424l1.437 3.784a1 1 0 0 1 .06.45l-.233 2.482a1 1 0 0 1-.066.272l-.357.907a1 1 0 0 1-1.077.623l-.25-.038a1 1 0 0 1-.665-.404l-.55-.765a1 1 0 0 1-.187-.534l-.076-1.516a1 1 0 0 0-.242-.604L9.56 13.704a1 1 0 0 1-.206-.384L8.23 9.307a1 1 0 0 0-.174-.344L6.513 6.98a1 1 0 0 1-.21-.648l.033-.956a1 1 0 0 1 .128-.457l.225-.398a1 1 0 0 1 .871-.509h1.037l.073-1.693L10.33 1.2z"/></svg>`,
})
export class SierraNevada {
  protected readonly b = inject(GeoIconBase);
}
