// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-hr',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m10.218 18.15-3.37-3.767a.5.5 0 0 1-.115-.22l-.743-3.2a.5.5 0 0 0-.195-.292l-1.132-.82a.5.5 0 0 0-.697.11l-.812 1.112a.5.5 0 0 1-.87-.113L1.41 8.73a.5.5 0 0 1 .348-.67l3.098-.745a.5.5 0 0 1 .329.034l2.113.991a.5.5 0 0 0 .638-.19l1.226-1.99a.5.5 0 0 0 .057-.392l-.27-1.005a.5.5 0 0 1 .219-.554l2.167-1.345a.5.5 0 0 1 .594.05l3.215 2.833a.5.5 0 0 0 .193.106l2.956.844a.5.5 0 0 0 .315-.014l1.398-.532a.5.5 0 0 1 .663.344l.364 1.433a.5.5 0 0 0 .17.265l1.241 1.003a.5.5 0 0 1 .101.668l-.94 1.4a.5.5 0 0 1-.746.095L19.56 10.21a.5.5 0 0 0-.27-.122l-5.957-.732a.5.5 0 0 0-.401.13l-.965.892a.5.5 0 0 1-.606.056l-1.14-.72a.5.5 0 0 0-.766.416l-.024 1.636a.5.5 0 0 0 .124.336l7.1 8.129a.5.5 0 0 1-.054.711l-.158.133a.5.5 0 0 1-.625.014l-3.564-2.724a.5.5 0 0 0-.324-.102l-1.32.053a.5.5 0 0 1-.393-.166Z"/></svg>`,
})
export class Hr {
  protected readonly b = inject(GeoIconBase);
}
