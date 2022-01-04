import React from 'react';
import { Header, Section } from '../style/style';

const ApricotTree = () => {
    return (
        <div>
            <Header color="#EEC9C9">
                <h1>살구나무 관리 TIP</h1>
                <img src="trees/Apricot_tree.png" alt="Apricot-tree"/>
            </Header>
            <Section>
                <h2>살구나무란?</h2>
                <p className="sub-title">살구나무는 어떤 나무일까요?</p>
                <p>
                    살구는 '살(솔)고'라고 표기했던 순수한 우리말에서 유래되었어요. 옛날부터 우리 주변 야산에서 흔히 볼 수 있는 나무였다고 합니다. 살구에서 나오는 살구씨는 약재로도 쓰인다고 해요.
                </p>
            
            
                <h2>살구나무 특징</h2>
                <p className="sub-title">살구나무를 잘 키우기 위해선 어떻게 해야할까요?</p>
                <p>
                    살구나무는 한국, 중국 등 온대지방 북반구 온도에서 잘 자라요.
                    하지만 건조한 환경에는 약한 편이라 주의를 기울여주세요.
                    살구나무는 꽃이 아름다워서 조경수로 많이 사용돼요. 
                </p>
            </Section>
        </div>
    );
};

export default ApricotTree;