// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-european-union-eu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.8 19.49.715-1.67a1 1 0 0 1 1.262-.546l1.415.517a1 1 0 0 0 1.27-.566l.09-.22a1 1 0 0 0-.102-.937l-.748-1.097a.6.6 0 0 1 .47-.937l1.058-.046a1 1 0 0 0 .682-.311l1.169-1.233a1 1 0 0 1 .565-.3l4.946-.803a1 1 0 0 0 .835-.892l.125-1.296a.904.904 0 0 1 1.737-.252l.224.554a1 1 0 0 1-.005.763l-.531 1.264a1 1 0 0 0-.078.356l-.075 2.368a.6.6 0 0 0 .717.607l.85-.17a1 1 0 0 1 .99.374l.742.97a1 1 0 0 1 .16.905l-.426 1.372a1 1 0 0 1-.43.554l-.309.19a1 1 0 0 0-.37 1.299l.21.419a.83.83 0 0 1-1.48.75l-.571-1.112a1 1 0 0 1-.019-.876l.175-.38a1 1 0 0 0-.18-1.104l-.836-.889a1 1 0 0 0-1.1-.243l-1.195.479a.6.6 0 0 0-.163 1.016l1.237 1.038a1 1 0 0 1 .26 1.197l-.751 1.57a.826.826 0 1 1-1.402-.858l.092-.12a.93.93 0 0 0-.194-1.318l-1.864-1.346a1 1 0 0 0-.781-.17l-1.371.275a1 1 0 0 0-.638.429l-1.448 2.19a1 1 0 0 1-.634.429l-2.167.443a1 1 0 0 1-.98-.355l-1.01-1.262a1 1 0 0 1-.139-1.019Z"/><path stroke-linejoin="round" d="m14.789 1.587 1.33-.242a1 1 0 0 1 1.105.608l1.033 2.54a1 1 0 0 1 .017.708l-.267.761a1 1 0 0 1-.68.634l-.068.019a1.006 1.006 0 0 1-1.24-1.205l.227-.943a.734.734 0 0 0-1.397-.441l-.534 1.349a1 1 0 0 0 .024.792l.45.96a1 1 0 0 1 .074.628l-.332 1.593a.825.825 0 0 1-1.452.347l-.174-.217a1 1 0 0 1-.212-.51l-.14-1.219a1 1 0 0 1-.006-.147l.1-2.967a1 1 0 0 1 .153-.5l1.322-2.097a1 1 0 0 1 .667-.45Zm-8.975 10.43-.118.016a1 1 0 0 1-1.13-1.09l.02-.2a1 1 0 0 1 .81-.884l.06-.011a1 1 0 0 1 1.164.787l.04.195a1 1 0 0 1-.846 1.187Z"/></svg>`,
})
export class EuropeanUnionEu {
  protected readonly b = inject(GeoIconBase);
}
