import { expect } from "@playwright/test"

exports.addemployeePage =  class addemployeePage{


    constructor(page){

        this.page = page
        this.addemployeemenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('input[name="firstName"]')
        this.lastnameInput = page.locator('input[name="lastName"]')
        this.saveButton = page.locator('button[type="submit"]')
        this.personalDetailsHeader = page.locator("//h6[text()='Personal Details']")
        this.errorMessageForFirstname = page.locator("(//span[text()='Required'])[1]")
        this.errorMessageForLastname = page.locator("(//span[text()='Required'])[2]")
        this.uploadfileButton = page.locator('input[type="file"]')

       
    }

    async navigatetoAddEmployee(){

        await this.addemployeemenu.click()
    }

    async  addEmployee(firstName, lastName){

        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastName)
    
    }

    async clickSave(){

         await this.saveButton.click()
    }

    async createaddEmployeeSuccess(){

        await expect(this.personalDetailsHeader).toBeVisible()
    }

    async verifyErroeMessage(){


        await expect(this.errorMessageForFirstname).toBeVisible()
        await expect(this.errorMessageForLastname).toBeVisible()
    }

    async uploadfile(path){

        await this.uploadfileButton.setInputFiles(path)
    }


   
}