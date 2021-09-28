/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import HomePage from '../../pages/HomePage'


describe('Billionthing Home Test', function()  {

    it('Service search Test', function()  {

        const headerpage = new HeaderPage()
        const homepage = new HomePage()
        
    
       

        headerpage.visit()
        homepage.searchService('Rayonate Labs')
        homepage.clickSearchBtn()
        homepage.validateSerachName()
        
    
   
        
        

     })
     it('Home page ', function()  {

        const headerpage = new HeaderPage()
        const homepage = new HomePage()
        
    
       

        headerpage.visit()
        homepage.clickServices()
        homepage.validateClickServices()
    
   
        
        

     })

})