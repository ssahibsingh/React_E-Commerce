import {BasePage} from "./base-page.po";
import {Locator} from "@playwright/test";
export default class HomePage extends BasePage {

    readonly sliderComponent:Locator = this.page.getByTestId("slider-component")
    readonly centerWelcomeText: Locator = this.page.getByTestId("center-welcome-text")

}