// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-eastern-europe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m14.574 16.487-.421 2.524a1 1 0 0 1-.419.658l-.752.519a1 1 0 0 1-.623.175l-1.339-.074a1 1 0 0 0-.484.095l-1.025.486a1 1 0 0 0-.481.49l-.51 1.121a.25.25 0 0 1-.4.079l-.806-.762a1 1 0 0 1-.299-.897l.06-.348a1 1 0 0 0-.479-1.032l-2.162-1.27a1 1 0 0 1-.29-.256l-1.14-1.499a1 1 0 0 1-.202-.568l-.014-.368a.6.6 0 0 1 .722-.61l.7.146a1 1 0 0 0 1.186-.79l.143-.749a.6.6 0 0 0-.64-.71l-.92.079a1 1 0 0 1-.855-.356l-.642-.77a.6.6 0 0 1 .293-.96l.705-.206a1 1 0 0 0 .692-1.195l-.288-1.194a1 1 0 0 1 .662-1.186l2.876-.936a1 1 0 0 0 .69-.996l-.058-1.271a1 1 0 0 1 .104-.493l.781-1.562a.6.6 0 0 1 .465-.327l1.67-.2a.6.6 0 0 1 .67.541l.194 2.145a1 1 0 0 0 .714.87l.887.26a1 1 0 0 1 .407.235l3.936 3.749a1 1 0 0 0 .627.274l2.582.16a.6.6 0 0 1 .524.39l.363.965a.6.6 0 0 1-.112.607l-3.15 3.575a1 1 0 0 1-1.121.268l-1.151-.46a1 1 0 0 0-1.234.42l-.512.871a1 1 0 0 0-.124.343Z"/></svg>`,
})
export class EasternEurope {
  protected readonly b = inject(GeoIconBase);
}
