// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-tn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.815 3.686 9.51 2.56a1 1 0 0 1 .269-.288l.935-.671a1 1 0 0 1 .404-.171l1.105-.2a1 1 0 0 1 .312-.008l.409.055c.376.05.665.357.693.736l.014.179a.619.619 0 0 0 1.044.402l.491-.469a.739.739 0 1 1 .992 1.095l-1.523 1.312a.91.91 0 0 0-.12 1.255l.046.058q.108.136.256.229l.435.27a1 1 0 0 1 .444 1.082l-.335 1.404a1 1 0 0 1-.355.554l-1.376 1.081a.951.951 0 0 0 .886 1.652l.311-.103a1 1 0 0 1 1.164.425l.866 1.404a1 1 0 0 1 .147.456l.093 1.364a1 1 0 0 1-.43.892l-2.609 1.795a1 1 0 0 0-.381 1.14l.28.842a1 1 0 0 1-.085.82l-.393.675a1 1 0 0 1-.417.39l-1.167.584-1.129-5.082a1 1 0 0 0-.397-.598l-1.02-.724a1 1 0 0 1-.417-.725l-.04-.447a1 1 0 0 0-.224-.545l-1.59-1.933a1 1 0 0 1-.225-.71l.049-.653a1 1 0 0 1 .372-.707l1.194-.955a1 1 0 0 0 .374-.823l-.195-4.645a1 1 0 0 1 .148-.567Z"/></svg>`,
})
export class Tn {
  protected readonly b = inject(GeoIconBase);
}
