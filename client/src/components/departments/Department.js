import React from 'react';
import {Header, Button, Icon} from 'semantic-ui-react';

const Department = ({ id, title, updateDepartment, deleteDepartment }) => (
  <div >
    <div >
      <div className="center">
        <Header as="h2" style={{ marginLeft: "15px" }}>{title}</Header>
      </div>
    </div>
    
  </div>
)


export default Department;