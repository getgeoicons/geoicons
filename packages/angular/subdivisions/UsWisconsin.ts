// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-us-wisconsin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M18.02 7.134a1 1 0 0 0-.64-.68L9.022 3.607a.6.6 0 0 1-.391-.705l.162-.691a.6.6 0 0 0-.757-.712L3.934 2.731a.6.6 0 0 0-.427.583l.032 2.124a1 1 0 0 1-.265.693L1.87 7.655a1 1 0 0 0-.263.733l.192 3.445a1 1 0 0 0 .378.729l4.197 3.322a1 1 0 0 1 .368.636l.653 4.376a1 1 0 0 0 .325.6L8.851 22.5a1 1 0 0 0 .658.252l9.239.046a.3.3 0 0 0 .3-.333l-.326-2.9c-.036-.327.009-.66.131-.966l3.383-8.441a.664.664 0 0 0-1.166-.621l-2.44 3.585a.699.699 0 0 1-1.218-.675l1.133-2.58a1 1 0 0 0 .048-.67z"/></svg>`,
})
export class UsWisconsin {
  protected readonly b = inject(GeoIconBase);
}
