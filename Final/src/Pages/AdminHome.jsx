import React from 'react'
import Nav from '../Components/Nav'
import {Tabs, Tab} from "@nextui-org/react";
import RequestList from '../Components/RequestList';

function AdminHome() {

    if (!localStorage.getItem('isAdmin')) {
        window.open('/', '_self')
    }
    
  const [selected, setSelected] = React.useState("Dashboard");

  return (
    <>
        <Nav/>

<div className="flex flex-col w-full  bg-[#FAFAFB] p-5">
          <Tabs
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            fullWidth="true"
            color="success"
          >

            <Tab 
             key="dashboard"
             title="لوحة المعلومات"
             className={`text-lg font-bold p-5
              ${ selected === "dashboard" ? "text-green-900" : "" } max-sm:text-sm`}
             >
              dashboard :3
            </Tab>

            <Tab key="new-request"
             title="الطلبات"
             className="text-lg font-bold p-5 max-sm:text-sm"
             >
              {/* request table :3 */}
              <RequestList />
            </Tab>
          </Tabs>
    </div>

        
    </>
  )
}

export default AdminHome






