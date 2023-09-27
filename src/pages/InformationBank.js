import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Accordion, AccordionTab } from 'primereact/accordion';

function InformationBank() {
  return (
    <div>
     <div className="layout-dashboard">
        <div className="card">
        <h2>Useful Information</h2>
            <TabView>
                
                <TabPanel header="Normal Goat Values">
                <p className="m-0">
                    <h4>The Normal Goat values are as follows</h4>
                    Gestation = 145-155 days	<br></br>	
	                   Days between heats = 18-21 days		<br></br>
	                    Length of heat = 6 hours - 3 days		<br></br>
        </p>
                </TabPanel>
                <TabPanel header="Prenatal Recommendation">
                    <p className="m-0">
                   <h4>Consider the recommended Prenatals below</h4>      
                   2 months before due:		<br></br>
                   <p className="ml-6">
                       Doe should be dried off	     </p>   <br></br>
			
	5 weeks before due date (35 days):		<br></br>
    <p className="ml-6">
        Give Selenium/Vitamin E	            <br></br>
		Pregnancy Herbal Tonic daily with their grain ration	<br></br>
			</p>
	4 weeks before due date:		<br></br>
    <p className="ml-6">
        Enterotoxemia & Tetanus vaccine (if you choose to vaccinate your animals)	</p> <br></br>
			
	3 weeks before due date:		<br></br>
    <p className="ml-6">
        Vitamin E to food each day	</p>   <br></br>
			
	2 weeks before due date:		<br></br>
    <p className="ml-6">
        Give another Selenium/Vitamin E	    <br></br>
		Get together all the items you need for your birthing kit   	</p><br></br>
			
	1 week before due date:		 <br></br>
    <p className="ml-6">
        Have your birthing kit ready	  <br></br>
		Trim your finger nails and keep them short and clean	 <br></br>
		Clean out your delivery stall and disinfect it	         <br></br>
		Shave the does udder, tail and around her "privates"	  <br></br>
		Start putting mom up in the birthing stall by herself at night (just in case)	<br></br>
		Keep checking the doe's tail ligaments	</p>
                    </p>
                </TabPanel>
               
            </TabView>
        </div>
        <div className="card">
        <h2>More Farm Information</h2>
            <TabView>
                
                <TabPanel header="Heat Signs">
                    <p className="m-0">
                        <h4>How to tell an animal is on heat.</h4>
                        Yes, it starts as simple as that; you are what you eat and so is your eyesight. Foods rich in nutrients like vitamin C and E, zinc, lutein and omega-3 fatty acids strengthen your eyes against age-related eye problems like cataracts and macular degeneration. Some great foods for eye health include:


                    </p>
                </TabPanel>
                <TabPanel header="Animal Foods">
                    <p className="m-0">
                        <h4>Animal Foods.</h4>
                        Research suggest that the likelihood of smokers getting affected from these debilitating eye conditions increases twice to thrice. 
        So, here is to those of you who like their eyesight more than a cigarette.
                    </p>
                </TabPanel>
                <TabPanel header="Breeding days">
                    <p className="m-0">
                        <h4>Breeding days</h4>
                    The Animals have different breeding days where they breed. These breeeding days can be added to the system.
                    </p>
                </TabPanel>
                <TabPanel header="Diary Information">
                    <p className="m-0">
                        <h4>Diary Information</h4>
                        In addition to causing neck, back and shoulder pain, staring too long at a computer/phone screen can affect your eye health severely. Some of the eye problems you can get from excessive exposure to computer/phone screens include:

                    </p>
                </TabPanel>
                <TabPanel header="Animal Breeds">
                    <p className="m-0">
                        <h4>Animal Breeds</h4>
                        Don’t only blame computers and phone screens for eyestrain. Books and written documents can also cause eyestrain when looked upon for extended periods.
 So, make sure to get your head up, look away from the docs and just blink your eyes for a few seconds to relieve the strain.
                    </p>
                </TabPanel>
                
            </TabView>
        </div>
</div>
        </div>
  )
}

export default InformationBank
