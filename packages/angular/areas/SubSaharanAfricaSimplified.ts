// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-sub-saharan-africa-simplified',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m12.305 21.835-.12-.162a1 1 0 0 1-.117-.206l-.736-1.75a1 1 0 0 1-.069-.25l-.196-1.41a1 1 0 0 0-.093-.305l-.65-1.319a1 1 0 0 1-.047-.774l.405-1.152a1 1 0 0 0 .039-.519l-.266-1.392a1 1 0 0 0-.204-.44l-.648-.804a1 1 0 0 1-.21-.788l.083-.506a1 1 0 0 0-.602-1.083l-.91-.38a1 1 0 0 0-.666-.037l-1.327.389a1 1 0 0 1-.194.036l-1.373.12a1 1 0 0 1-.735-.234l-1.165-.991a1 1 0 0 1-.172-.19l-.95-1.36a1 1 0 0 1-.18-.571L1.2 3.452l1.584-.016.047-1.74 1.081-.024a1 1 0 0 1 .621.2l2.694 2.015a1 1 0 0 0 1.18.013L9.86 2.86a1 1 0 0 1 .565-.187l.562-.01a1 1 0 0 1 .505.127l2.284 1.276.743-1.114 3.096.01 2.28 3.56a1 1 0 0 0 1.061.437l1.844-.416-.08.782a1 1 0 0 1-.165.46l-1.142 1.69a1 1 0 0 1-.181.202l-1.825 1.55a1 1 0 0 0-.345.894l.365 2.737a1 1 0 0 1-.46.98l-.933.582a1 1 0 0 0-.467.921l.063.862a1 1 0 0 1-.155.611l-.66 1.034-1.525 1.789a1 1 0 0 1-.585.336l-1.42.253a1 1 0 0 1-.98-.39Z"/></svg>`,
})
export class SubSaharanAfricaSimplified {
  protected readonly b = inject(GeoIconBase);
}
