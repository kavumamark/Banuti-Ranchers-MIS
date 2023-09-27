import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';



const View = () => {

    return (
        <><div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }}>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card">
                    <Card title="Tag No: TP-6839">
                        <p className="m-0">
                        <img src="assets/layout/images/icon.png" alt="babylon-layout" style={ {width:'150px', height: '200px'}} />
                        </p>
                        
                    </Card>
                    
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-8">
                <div className="card">
                <TabView>

                <TabPanel header="Animal Details">
                <p className="m-0">
                    <h4>Name: RUSHAMA</h4>
                    <p>Sex: FEMALE	<br></br>	</p>
                    <p>Date of birth: 02/12/2021</p>
	                  <p> Color: BLACK		<br></br></p>
                      <p> BREED: ALFINE	<br></br></p>
	                  <p> RANCH: NKOMA RANCH		<br></br></p>
        </p>
                </TabPanel>

                <TabPanel header="Dam Details">
                <p className="m-0">
                   <h4><p>Tag No: DP:38276</p></h4> 
                    <p>Name: RUSHAMA</p>
                    <p>Sex: FEMALE	<br></br>	</p>
	                  <p> Color: RED		<br></br></p>
                      <p> Breed: ALFINE		<br></br></p>
	                   <p>RANCH: NKOMA RANCH		<br></br></p>
        </p>
                </TabPanel>

                <TabPanel header="Health Records">
                <p className="m-0">
                <h4> <p>Current Status: HEALTHY</p> </h4>
                    <p>Details from last Visit: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel urna nec leo tincidunt hendrerit. Nulla facilisi. Sed condimentum odio sit amet purus feugiat, eu laoreet dui vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis pharetra ligula.</p>
                    <p>Date of last check up: 14/06/2023	<br></br>	</p>
	                 <p> Last medication given: Pox injection	<br></br>
                     Details:  Integer nec quam vel augue venenatis volutpat. Vestibulum rhoncus tellus nec varius. Sed at metus id neque bibendum fermentum. Nulla facilisi.</p> 
	                  <p>Date of next Check up: 12/10/2023	<br></br></p> 
        </p>
                </TabPanel>

                <TabPanel header="Stage">
                <p className="m-0">
                <h4> <p>Current Stage:LACTATING</p> </h4>
                   <p>Start Date: 12/08/2023</p>
                   <p>Expected End Date: 15/09/2023</p>
                    <p> BULL: RUGAJU	<br></br>	</p>
	                  <p>RANCH: NKOMA RANCH		<br></br></p> 
        </p>
                </TabPanel>

                </TabView>
                </div>
            </div>
        </div></>
    );
};
export default View;