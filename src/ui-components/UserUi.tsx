import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const UserUi: FC = () => {
    return (
        <Section>
            <main>
                <Outlet/>
            </main>
        </Section>
    );
};

export default UserUi;


const Section = styled('div')`
  width: 100%;
  display: table;
  min-height: 100vh;

  main {
    height: 100%;
    display: table-row;
  }
`