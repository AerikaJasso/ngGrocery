import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categorService: CategoryService) {
    this.categories$ = categorService.getAll();
  }

  ngOnInit() {
  }

}
