import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'img[src]',
    host: {
        '[src]': 'checkPath(src)',
        '(error)': 'onError()'
    }
})
export class DefaultImage {
    @Input() src: string;
    public defaultImg: string = 'assets/dummy_image.png';
    public onError() {
        // console.log("DefaultImage-onError", this.src)
        this.src = this.defaultImg;
    }
    public checkPath(src) {
        // console.log("DefaultImage", src)
        return src ? src : this.defaultImg;
    }
}