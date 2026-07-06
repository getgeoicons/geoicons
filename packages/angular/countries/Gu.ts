// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" stroke-opacity=".8" d="m18.712 8.475-6.791 5.136a.5.5 0 0 0-.17.235l-.6 1.72a.5.5 0 0 0-.024.233c.065.547.291 2.844-.282 4.21-.442 1.055-.532 1.756-1.532 2.31-.613.34-1.035.538-1.732.467-.757-.078-1.23-.343-1.71-.933-.372-.456-.527-1.345-.567-1.61a.6.6 0 0 0-.043-.149l-1.024-2.246a.5.5 0 0 1 .005-.427l1.176-2.407a.5.5 0 0 0-.064-.538l-1.456-1.76a.5.5 0 0 1 .232-.794l3.776-1.215a.5.5 0 0 1 .153-.025h1.96a.5.5 0 0 0 .419-.227l.597-.92a.5.5 0 0 1 .204-.179l1.11-.53a.5.5 0 0 0 .282-.395l.11-.973a.5.5 0 0 1 .09-.235l1.119-1.562a.5.5 0 0 0 .093-.291V3.593a.5.5 0 0 1 .062-.24l.943-1.719a.5.5 0 0 1 .675-.2l.652.35a.5.5 0 0 1 .18.165l1.121 1.69a.5.5 0 0 0 .334.217l1.936.326a.5.5 0 0 1 .377.689L18.87 8.273a.5.5 0 0 1-.158.202Z"/></svg>`,
})
export class Gu {
  protected readonly b = inject(GeoIconBase);
}
