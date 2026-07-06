// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { Injectable } from '@angular/core';

/**
 * Supplies unique, hydration-safe ids for each icon's `<title>` element — the Angular
 * analogue of React's `useId()`. Provided in root, so Angular Universal creates a fresh
 * instance per SSR request; the counter therefore restarts at 0 for every render and the
 * server/client id sequences line up during hydration. Two icon instances never collide.
 */
@Injectable({ providedIn: 'root' })
export class GeoIconIdService {
  private counter = 0;
  next(): string {
    return `geoicon-${this.counter++}`;
  }
}
