// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ve',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.9 3.887 1.324 6.981a.5.5 0 0 0 .015.481l1.719 2.915a.5.5 0 0 0 .43.246h2.43a.5.5 0 0 1 .403.204l.953 1.298a.5.5 0 0 0 .49.197l2.505-.44a.25.25 0 0 1 .275.34l-.516 1.276a.5.5 0 0 0-.014.335l.617 1.997a.5.5 0 0 1-.1.474l-.575.666a.5.5 0 0 0 .119.755l.73.441a.5.5 0 0 1 .187.202l1.048 2.066a.5.5 0 0 0 .446.274h1.152a.5.5 0 0 0 .275-.082l2.775-1.824a.5.5 0 0 0-.114-.891l-.588-.2a.5.5 0 0 1-.311-.309l-.886-2.538 2.791 1.143a.5.5 0 0 0 .418-.018l3.19-1.637a.5.5 0 0 0 .144-.778l-.808-.904a.5.5 0 0 1-.037-.619l1.967-2.825a.5.5 0 0 0-.209-.743l-.752-.333a.5.5 0 0 1-.286-.348l-.186-.84a.5.5 0 0 0-.218-.312L18.31 5.052a.5.5 0 0 0-.27-.08h-1.269a.5.5 0 0 0-.23.057l-1.542.8a.5.5 0 0 1-.427.016l-1.912-.82a.5.5 0 0 0-.257-.036l-2.488.3a.5.5 0 0 1-.506-.27l-.542-1.06a.5.5 0 0 0-.386-.27l-1.4-.168a.5.5 0 0 0-.24.03l-2.093.808a.5.5 0 0 1-.523-.103l-.537-.506a.5.5 0 0 0-.788.137Z"/></svg>`,
})
export class Ve {
  protected readonly b = inject(GeoIconBase);
}
