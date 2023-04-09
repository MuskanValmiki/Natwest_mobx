import { observer } from "mobx-react-lite";
import React from "react";

function OwnerList({ store }) {
  const handleAddOwner = () => {
    const firstName = prompt("Firstname?");
    const lastName = prompt("Lastname?");
    store.createOwner({ id: Date.now(), firstName, lastName });
  };

  const handleUpdateOwner = (owner) => {
    owner.firstName = prompt("Firstname?", owner.firstName);
    owner.lastName = prompt("Lastname?", owner.lastName);
    store.updateOwner(owner.id, owner);
  };

  const handleDeleteOwner = (owner) => {
    store.deleteOwner(owner.id);
  };

  return (
    <div className="pet-owner-app">
      <table class="ownertblee"border="1">
        <thead>
          <tr>
            <th>id </th>
            <th>First Name </th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {store.owners.map((owner) => {
            return (
              <tr key={owner.id}>
                <td>{owner.id}</td>
                <td>{owner.firstName}</td>
                <td>{owner.lastName}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOwner(owner)}
                    style={{ marginRight: "4rem" ,width:"7rem",height:"2rem",cursor:"pointer"}}
                  >
                    Delete {owner.firstName}
                  </button>
                  <button onClick={() => handleUpdateOwner(owner)}
                   style={{ marginRight: "4rem" ,width:"7rem",height:"2rem",cursor:"pointer"}}>
                    Update {owner.firstName}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleAddOwner} class="ownerbutton">+ New owner</button>
    </div>
  );
}

export default observer(OwnerList);