import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  checkImageExists(imagePath: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  fetchAndProcessItems<T>(
    cdr: ChangeDetectorRef,
    fetchFn: () => Observable<T[]>,
    assignTo: (items: T[]) => void,
  ) {
    fetchFn().subscribe(items => {
      const processed = items.map(item => ({
        ...item,
        imageSrc: '/assets/default.jpg',
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      processed.forEach((item: any, idx: number) => {
        if (item.imagePath) {
          const imagePath = `assets/${item.imagePath}`;
          this.checkImageExists(imagePath).then(exists => {
            processed[idx].imageSrc = exists ? imagePath : '/assets/default.jpg';
            cdr.detectChanges();
          });
        }
      });

      assignTo(processed);
    });
  }

}
