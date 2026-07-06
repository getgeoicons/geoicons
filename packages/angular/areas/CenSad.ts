// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cen-sad',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.852 16.368-1.835.415a1 1 0 0 1-.722-.11l-1.212-.703a1 1 0 0 1-.323-.3l-1.377-2.008a1 1 0 0 1-.175-.591l.064-2.469a1 1 0 0 1 .164-.523l3.022-4.601a1 1 0 0 1 .967-.443l.178.024a1 1 0 0 1 .853.805l.032.171a1 1 0 0 1-.365.972l-.985.775a1 1 0 0 0-.337.492l-.039.124a1 1 0 0 0 .286 1.036l2.309 2.086a1 1 0 0 0 1.384-.042l.88-.896a1 1 0 0 0 .216-1.066L8.705 6.638a1 1 0 0 1-.068-.315l-.07-1.351a.797.797 0 0 1 1.584-.163l.19 1.219a1 1 0 0 0 .63.78l1.048.403a1 1 0 0 0 1.151-.322l.056-.073a1 1 0 0 1 .948-.376l2.253.358a.6.6 0 0 1 .504.627l-.087 1.476a1 1 0 0 0 .177.628l2.8 4.043a1 1 0 0 0 .98.419l1.999-.319-1.446 3.38a1 1 0 0 1-.237.338l-2.73 2.546-.194-2.13a1 1 0 0 1 .5-.958l.863-.494a.25.25 0 0 0 .042-.404l-1.909-1.696a1 1 0 0 0-.934-.216l-2.013.565a.6.6 0 0 0-.368.859l.657 1.238-3.309.725-.29-2.486a.586.586 0 0 0-1.064-.263l-1.223 1.781a.6.6 0 0 1-.654.24l-1.153-.318a1 1 0 0 0-.486-.01Z"/></svg>`,
})
export class CenSad {
  protected readonly b = inject(GeoIconBase);
}
