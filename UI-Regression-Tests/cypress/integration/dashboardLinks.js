import dashboardUrls from '../fixtures/dashboardUrls.json';
import viewports from '../fixtures/viewPorts.json';
import { dashboardSelectors } from '../support/selectors';

describe('Dashboard Page Navigation Verification', function () {
	beforeEach(`Open Commbank Home Page`, function () {
		cy.visit('/');
	});
	viewports.sizes.forEach((size) => {
		context(`Viewport: ${size.width} x ${size.height}`, () => {
		dashboardUrls.dashboardUrls.forEach((testItem) => {
				it(testItem.title, () => {
					cy.viewport(size.width, size.height);
					if(size.width < 979 ) {
						cy.get(dashboardSelectors.mobileMenu).click();
						cy.get(`${dashboardSelectors.mobileViewDiv} ${testItem.navButton}`).click();
					}
					else 
						cy.get(`${dashboardSelectors.desktopViewDiv} ${testItem.navButton}`).click();
					cy.title().should('eq', testItem.title);
					cy.url().should('include', testItem.href)
					cy.get(dashboardSelectors.bannerContentH1).should('be.visible').should('contain', testItem.h1);
				});
			});
		});
	});
});