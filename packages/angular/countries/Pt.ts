// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pt',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m13.14 20.365.184 1.116a.5.5 0 0 1-.21.493l-.981.675a.5.5 0 0 1-.467.053l-1.412-.558a.5.5 0 0 0-.317-.017l-2.034.561.94-2.667a.5.5 0 0 0 .027-.137l.147-2.526a.5.5 0 0 0-.48-.529l-.696-.027a.5.5 0 0 1-.32-.133l-.802-.744a.5.5 0 0 1-.157-.42l.248-2.313a.5.5 0 0 1 .125-.282l1.218-1.352a.5.5 0 0 0 .115-.221l1.139-4.872a.5.5 0 0 0 .002-.219L8.614 2.55l2.413-1.35.133 1.196a.5.5 0 0 0 .59.436l3.602-.688a.5.5 0 0 1 .588.42l.073.501a.5.5 0 0 0 .283.382l.473.22a.5.5 0 0 1 .118.83l-1.598 1.398a.5.5 0 0 0-.17.351l-.236 4.726a.5.5 0 0 1-.386.462l-1.78.414 1.908 2.313a.5.5 0 0 1 .048.568l-.737 1.281a.5.5 0 0 0 .024.536l.847 1.213a.5.5 0 0 1 .077.403l-.013.053a.5.5 0 0 1-.318.355l-.691.247a.5.5 0 0 0-.297.286l-.396.996a.5.5 0 0 0-.029.266Z"/></svg>`,
})
export class Pt {
  protected readonly b = inject(GeoIconBase);
}
