import React from 'react';
import { Header, Section } from '../style/style';
const PineTree = () => {
    return (
        <div>
            <Header color="#AED8D8">
                <h1>소나무 관리 TIP</h1>
                <img src="trees/Pine_tree.png" alt="Pine_tree"/>
            </Header>
            <Section>
                <h2>소나무란?</h2>
            </Section>
        </div>
    );
};

export default PineTree;