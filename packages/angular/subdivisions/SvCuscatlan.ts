// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sv-cuscatlan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.972 1.665a.6.6 0 0 0-.315.496L5.52 4.603a2 2 0 0 1-.136.622l-.582 1.478a1 1 0 0 0 .111.941l1.612 2.297a.6.6 0 0 1-.13.824l-.775.583a.6.6 0 0 0-.024.94l3.159 2.642a2 2 0 0 1 .536.704l1.633 3.576a.6.6 0 0 0 .6.348l.768-.07a.6.6 0 0 1 .65.677l-.138 1.03a.6.6 0 0 0 .36.632l1.812.77a1 1 0 0 0 .921-.074L18.7 20.77a1 1 0 0 0 .467-.785l.18-2.898a1 1 0 0 0-.706-1.018l-1.318-.402a1 1 0 0 1-.7-.835l-.078-.637a1 1 0 0 0-.476-.735l-1.949-1.18a1 1 0 0 1-.483-.878l.022-.96a1 1 0 0 1 .245-.636l.902-1.034a.6.6 0 0 0-.35-.985l-1.857-.323a1 1 0 0 1-.789-.704l-.51-1.738a1 1 0 0 0-.47-.59L8.563 3.158a2 2 0 0 1-.597-.513L7.15 1.599a.6.6 0 0 0-.756-.16z"/></svg>`,
})
export class SvCuscatlan {
  protected readonly b = inject(GeoIconBase);
}
