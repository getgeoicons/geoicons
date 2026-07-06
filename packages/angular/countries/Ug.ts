// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ug',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.33 22.79-1.23-.05a.5.5 0 0 1-.473-.576l1.17-7.615a.5.5 0 0 1 .129-.265l1.23-1.317a.5.5 0 0 1 .611-.095l.422.239a.5.5 0 0 0 .633-.119L8.348 9.91a.5.5 0 0 0-.13-.747L6.131 7.92a.5.5 0 0 1-.24-.5l.49-3.446a.5.5 0 0 1 .344-.407l2.495-.791a.5.5 0 0 1 .416.052l1.432.896a.5.5 0 0 0 .47.031l2.557-1.152a.5.5 0 0 1 .324-.03l1.823.443a.5.5 0 0 0 .47-.13L18.415 1.2l3.34 6.138q.035.065.05.135l.606 2.844a.5.5 0 0 1-.082.395l-4.008 5.601a.5.5 0 0 1-.617.163l-1.627-.752a.5.5 0 0 0-.563.1l-.989.988a.5.5 0 0 1-.233.132l-3.44.852a.5.5 0 0 0-.364.358l-.723 2.749a.5.5 0 0 1-.484.372H5.14a.5.5 0 0 0-.375.17L3.726 22.62a.5.5 0 0 1-.396.17Z"/></svg>`,
})
export class Ug {
  protected readonly b = inject(GeoIconBase);
}
