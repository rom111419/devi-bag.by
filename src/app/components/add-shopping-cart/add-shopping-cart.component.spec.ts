import { TestBed } from '@angular/core/testing';

import { AddShoppingCartComponent } from './add-shopping-cart.component';
import { AppComponent } from '../../app.component';

describe('AddShoppingCartComponent', () => {
	let component: AddShoppingCartComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddShoppingCartComponent]
		}).compileComponents();
	});

  it('should create the AddShoppingCartComponent', () => {
    const fixture = TestBed.createComponent(AddShoppingCartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
