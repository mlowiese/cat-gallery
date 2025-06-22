import { Component, OnInit } from '@angular/core';
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

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.loading = true;
    this.catService.getCats(this.limit).subscribe(data => {
      this.cats = [...this.cats, ...data];
      if (!this.highlightedCat && this.cats.length > 0) {
        this.highlightedCat = this.cats[0];
      }
      this.page++;
      this.loading = false;
    });
  }

  highlight(cat: any) {
    this.highlightedCat = cat;
  }
}