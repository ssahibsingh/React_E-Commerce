import { test, expect } from '@playwright/test';
import HomePage from "./page-objects/home.po";
import MenuBar from "./page-objects/components/menu-bar.comp";

test.describe('home page health check', () => {
  test("Product Checkout", async ({page},) => {
    await page.goto('http://localhost:3000/')
    const homePage = new HomePage(page)
    const navBar = new MenuBar(page)
    await expect(homePage.centerWelcomeText).toBeVisible()
    await expect(homePage.sliderComponent).toBeVisible()
    await expect(navBar.homeButton).toBeVisible()
    await expect(navBar.aboutButton).toBeVisible()
    await expect(navBar.contactButton).toBeVisible()
    await expect(navBar.companyNameButton).toBeVisible()
    await expect(navBar.productsButton).toBeVisible()
  });
});