export class CheckImageExistsComponent {

  checkImageExists(imagePath: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
