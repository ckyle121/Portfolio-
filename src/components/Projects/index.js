import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Project(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <PhotoList category={currentProject.name} />
    </section>
  );
}

export default Nav;