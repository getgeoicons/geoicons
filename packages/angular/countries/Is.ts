// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-is',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m11.26 19.375-3.594-1.787a.5.5 0 0 0-.279-.05l-2.342.266a.5.5 0 0 1-.556-.497v-.386a.5.5 0 0 1 .383-.486l1.053-.253a.5.5 0 0 0 .337-.696l-.597-1.289a.5.5 0 0 0-.535-.283l-2.47.406a.5.5 0 0 1-.535-.284l-.335-.727a.5.5 0 0 1 .378-.704l2.934-.447a.5.5 0 0 0 .405-.354l.333-1.134a.5.5 0 0 0-.557-.635l-2.489.388a.5.5 0 0 1-.183-.006l-1.07-.231a.25.25 0 0 1-.16-.373l2.633-4.368a.5.5 0 0 1 .756-.119l2.251 1.955a.5.5 0 0 1 .162.275l.447 2.14a.5.5 0 0 0 .804.287l.408-.33a.5.5 0 0 0 .176-.487l-.389-1.959a.5.5 0 0 1 .408-.59l.433-.072a.5.5 0 0 1 .547.309l.457 1.154a.5.5 0 0 0 .931-.004l.507-1.314a.5.5 0 0 1 .486-.32l1.057.04a.5.5 0 0 1 .326.138l.962.918a.5.5 0 0 0 .58.08l1.3-.695a.5.5 0 0 0 .229-.624l-.326-.827a.5.5 0 0 1 .376-.675l.568-.103a.5.5 0 0 1 .552.3l.532 1.284a.25.25 0 0 0 .347.126l2.173-1.133-.75 2.825a.5.5 0 0 0 .247.57l1.923 1.03a.5.5 0 0 1 .26.507l-.428 3.173a.5.5 0 0 1-.226.354l-8.24 5.284a.5.5 0 0 1-.175.07l-2.108.406a.5.5 0 0 1-.317-.043Z"/></svg>`,
})
export class Is {
  protected readonly b = inject(GeoIconBase);
}
