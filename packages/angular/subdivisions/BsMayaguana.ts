// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-mayaguana',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M9.37 12.619a1 1 0 0 1 .69-.213l4.992.36a1 1 0 0 1 .638.294l3.396 3.424a1 1 0 0 0 1.354.06l.56-.47a5 5 0 0 0 1.124-1.352l.197-.348a1 1 0 0 0-.347-1.347l-3.011-1.842a3 3 0 0 0-.936-.374l-4.799-1.032a1 1 0 0 0-.866.224l-.098.084a1 1 0 0 1-1.093.146L7.623 8.509a1 1 0 0 0-.649-.078L5.88 8.67a1 1 0 0 1-.853-.21l-1.002-.836a.6.6 0 0 0-.984.425l-.104 1.748a1 1 0 0 1-.296.652l-.944.932a.92.92 0 0 0 .587 1.572l.14.009a1 1 0 0 0 .393-.054l1.095-.383a1 1 0 0 1 .967.173L6.4 13.956a1 1 0 0 0 1.257.014z"/></svg>`,
})
export class BsMayaguana {
  protected readonly b = inject(GeoIconBase);
}
