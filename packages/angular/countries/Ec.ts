// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ec',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.299 20.933-1.142 1.631a.5.5 0 0 1-.453.211l-.388-.033a.5.5 0 0 1-.415-.296l-.396-.895a.5.5 0 0 0-.423-.297l-2.508-.171a.5.5 0 0 1-.464-.465l-.055-.806a.5.5 0 0 1 .351-.512l.566-.175a.5.5 0 0 0 .312-.281l1.304-3.056a.5.5 0 0 0-.194-.62l-.627-.393a.392.392 0 0 0-.566.17.392.392 0 0 1-.576.163l-1.893-1.274a.5.5 0 0 1-.034-.804l.376-.303a.5.5 0 0 0 .172-.507l-.574-2.373A.5.5 0 0 1 2.9 9.3l.882-.532a.5.5 0 0 0 .239-.484l-.075-.668a.5.5 0 0 1 .17-.433l1.252-1.082a.5.5 0 0 0 .172-.406l-.104-1.911a.5.5 0 0 1 .357-.507l2.306-.685a.5.5 0 0 0 .204-.119L9.359 1.46a.5.5 0 0 1 .595-.073l3.83 2.188a.5.5 0 0 1 .243.527l-.036.194a.5.5 0 0 0 .388.582l2.36.494a.5.5 0 0 0 .387-.078l.727-.503a.5.5 0 0 1 .535-.02l2.37 1.372a.488.488 0 0 1 .12.745.49.49 0 0 0-.047.584l.826 1.306a.5.5 0 0 1-.232.729l-.447.185a.5.5 0 0 0-.2.15l-3.834 4.82a.5.5 0 0 1-.192.148l-5.214 2.258a.5.5 0 0 0-.285.332l-.88 3.373a.5.5 0 0 1-.074.16Z"/></svg>`,
})
export class Ec {
  protected readonly b = inject(GeoIconBase);
}
