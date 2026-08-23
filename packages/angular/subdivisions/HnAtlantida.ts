// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hn-atlantida',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.169 9.97a1 1 0 0 0-.925-.357l-6.095.92a1 1 0 0 1-.356-.01L7.96 9.29a1 1 0 0 0-.719.119l-.57.34a1 1 0 0 1-1.264-.2l-.901-1.03a1 1 0 0 0-.76-.341l-.841.006a1 1 0 0 0-.854.492l-.54.917a1 1 0 0 0 .016 1.043l2.038 3.219a1 1 0 0 0 1.09.434l.963-.243a1 1 0 0 1 1.075.411l.445.662a1 1 0 0 0 .726.436l2.195.23a1 1 0 0 0 .69-.186l2.353-1.704a1 1 0 0 1 .556-.19l7.772-.24a1 1 0 0 0 .849-.525l.204-.378a1 1 0 0 0-.105-1.106z"/></svg>`,
})
export class HnAtlantida {
  protected readonly b = inject(GeoIconBase);
}
