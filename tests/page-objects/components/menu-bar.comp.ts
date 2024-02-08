import { Locator, Page } from '@playwright/test'
import {BasePage} from "../base-page.po";

export default class MenuBar extends BasePage {
    readonly companyNameButton = this.page.getByTestId("company-name-button")
    readonly homeButton = this.page.getByTestId("home-button")
    readonly productsButton = this.page.getByTestId("products-button")
    readonly aboutButton = this.page.getByTestId("about-button")
    readonly contactButton = this.page.getByTestId("contact-button")

}