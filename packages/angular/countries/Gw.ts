// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gw',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m9.853 15.657 2.625 2.229a.5.5 0 0 0 .678-.028l.81-.814a.5.5 0 0 0 .105-.153l.988-2.265a.5.5 0 0 1 .417-.299l1.006-.083a.5.5 0 0 0 .259-.098l1.333-1a.5.5 0 0 1 .28-.1l3.42-.139a.5.5 0 0 0 .478-.532l-.08-1.23a.5.5 0 0 0-.175-.35l-1.166-.987a.5.5 0 0 1 .03-.787l1.636-1.178a.5.5 0 0 0 .18-.571l-.385-1.096a.5.5 0 0 0-.47-.335l-9.68-.025a.5.5 0 0 0-.256.07L9.112 7.535a.5.5 0 0 1-.372.056l-2.579-.62a.5.5 0 0 0-.216-.004l-4.203.846a.25.25 0 0 0-.102.444L2.96 9.26a.5.5 0 0 0 .395.093l.952-.18a.5.5 0 0 1 .588.565l-.229 1.524a.5.5 0 0 0 .332.547l1.604.554a.5.5 0 0 0 .343-.005l2.22-.852a.5.5 0 0 1 .651.301l.648 1.845a.5.5 0 0 1-.065.457l-.628.876a.5.5 0 0 0 .083.672Zm-4.02 1.463-.942-.404a.5.5 0 0 1-.303-.472l.01-.389a.5.5 0 0 1 .433-.482l1.878-.255a.5.5 0 0 1 .566.463l.06.929a.5.5 0 0 1-.44.529l-1.007.118a.5.5 0 0 1-.255-.037Z"/></svg>`,
})
export class Gw {
  protected readonly b = inject(GeoIconBase);
}
