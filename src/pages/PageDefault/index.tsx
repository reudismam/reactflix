import React, { Children, Component } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled, {css} from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%5%;
    padding-right: 5%;
    /*${(paddingAll: any) => css`
        padding: &{paddingAll};
    `}*/
`

interface Props {
    children: any
}

export default function PageDefault({children}: Props) {
    return (
        <>
            <Menu />
            <Main>
              {children}
              </Main>
            <Footer />
        </>
    );
}