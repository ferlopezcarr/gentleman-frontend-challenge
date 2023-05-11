
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  beforeEach(async () => {
    cy.mount(TestComponent);
  });

  it('should display test message', () => {
    cy.get('p').contains('test works!');
  });
});
