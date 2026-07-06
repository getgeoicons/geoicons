// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mm',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.139 8.834-.795 1.226a.5.5 0 0 0 .01.56l2.087 2.975a.5.5 0 0 1 .08.385l-.277 1.376a.5.5 0 0 0 .327.571l.565.196a.5.5 0 0 0 .51-.111l1.4-1.34 1.222 4.04.016.071.6 4.017 1.477-2.216a.5.5 0 0 0 .075-.373l-.406-2.086a.5.5 0 0 0-.114-.233l-.628-.721a.5.5 0 0 1-.104-.465l.313-1.1a.5.5 0 0 0-.087-.444l-1.337-1.714a.5.5 0 0 1-.085-.45l.292-.978a.5.5 0 0 1 .338-.337l1.856-.544a.5.5 0 0 0 .264-.187l1.102-1.518-1.547-.266a.5.5 0 0 1-.39-.336l-.694-2.11-.76.161a.5.5 0 0 1-.6-.434l-.043-.391a.5.5 0 0 1 .143-.409l1.007-1.006a.5.5 0 0 0 .14-.278l.242-1.573a.5.5 0 0 0-.164-.452L12.877 1.2l-.846 1.464a.5.5 0 0 1-.167.174l-1.424.892a.5.5 0 0 0-.215.284l-.801 2.75-1.138.02-.067 1.797a.5.5 0 0 1-.08.253Z"/></svg>`,
})
export class Mm {
  protected readonly b = inject(GeoIconBase);
}
