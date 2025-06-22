import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CatService } from '../core/services/cat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-gallery.html',
  styleUrls: ['./cat-gallery.css']
})
export class CatGallery implements OnInit {
  cats: any[] = [];
  highlightedCat: any = null;
  page = 0;
  limit = 8;
  loading = false;

  constructor(
    private catService: CatService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.loadMore();
  }

loadMore() {
  this.loading = true;
  this.catService.getCats(this.limit).subscribe({
    next: data => {
      this.cats = [...this.cats, ...data];
      if (!this.highlightedCat && this.cats.length > 0) {
        this.highlightedCat = this.cats[0];
      }
      this.page++;
      this.loading = false;
      this.cdr.markForCheck();
    },
    error: err => {
      this.loading = false;
      this.cdr.markForCheck();
    }
  });
}

  highlight(cat: any) {
    this.highlightedCat = cat;
  }
}