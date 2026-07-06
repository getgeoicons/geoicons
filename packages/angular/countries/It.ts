// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-it',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.027 7.25 1.334.89a.5.5 0 0 0 .65-.082l.789-.877a.5.5 0 0 1 .65-.08l1.447.971a.5.5 0 0 1 .195.255l.611 1.809a.5.5 0 0 0 .105.177l2.402 2.629a.5.5 0 0 0 .255.15l1.896.442a.5.5 0 0 1 .242.136l1.963 1.988q.074.075.111.173l.669 1.75a.5.5 0 0 1-.015.392l-.53 1.124a.5.5 0 0 0 .208.649l.395.221a.5.5 0 0 0 .685-.2l1.09-2.04a.5.5 0 0 0-.063-.564l-.44-.503a.5.5 0 0 1-.064-.562l.32-.605a.5.5 0 0 1 .671-.211l1.51.78a.5.5 0 0 0 .68-.225l.191-.394a.5.5 0 0 0-.217-.66l-3.48-1.833a.5.5 0 0 1-.265-.405l-.035-.46a.5.5 0 0 0-.517-.463l-1.62.06a.5.5 0 0 1-.489-.326l-.883-2.398a.5.5 0 0 0-.19-.243L11.729 7.67a.5.5 0 0 1-.208-.301l-.412-1.766a.5.5 0 0 1 .342-.593l1.603-.483a.5.5 0 0 0 .355-.453l.058-1.123a.5.5 0 0 0-.268-.469l-2.204-1.15a.5.5 0 0 0-.491.015l-3.429 2.08a.5.5 0 0 1-.41.048l-1.167-.368a.5.5 0 0 0-.336.012l-2.043.816a.5.5 0 0 0-.314.464v2.436a.5.5 0 0 0 .222.416Zm3.139 6.296-1.269.84.571 3.23a.5.5 0 0 0 .667.38l.935-.348a.5.5 0 0 0 .323-.428l.187-2.34a.5.5 0 0 0-.094-.335l-.64-.876a.5.5 0 0 0-.68-.123Zm8.274 6.611-3.265.02a.5.5 0 0 0-.496.466l-.003.038a.5.5 0 0 0 .294.488L14 22.534a.5.5 0 0 0 .698-.373l.238-1.422a.5.5 0 0 0-.496-.582Z"/></svg>`,
})
export class It {
  protected readonly b = inject(GeoIconBase);
}
