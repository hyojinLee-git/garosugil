import React from 'react';
import { Header, Section } from '../style/style';
const Ginkgo = () => {
    return (
        <div>
            <Header color="#BDF1C9">
                <h1>은행나무 관리 TIP</h1>
                <img src="trees/Ginkgo.png" alt="Ginkgo"/>
            </Header>
            <Section>
                <p>
                    <h2>은행나무란?</h2>
                    <p className="sub-title">은행나무는 어떤 나무일까요?</p>
                    <p>
                    은행나무에서 은행은 그 열매가
                    ‘은빛이 나는 살구’라는 뜻에서 
                    은행나무라고 불리게 되었다고 합니다.
                    </p>
                </p>
                <p>
                    <h2>관리방법</h2>
                    <p className="sub-title">은행나무를 잘 키우기 위해선 어떻게 해야할까요?</p>
                    <p>
                    은행나무는 모래가 많거나 건조한 곳에서
                    잘 자라지 않아요

                    또한 물이 고이거나 물이 나는 곳에서도 
                    잘 자라지 않아요

                    그러므로 물이 고이지 않게하고 너무 건조하지
                    않게 은행나무를 관리하는 것이 중요합니다!
                    </p>
                </p>
            </Section>
        </div>
    );
};

export default Ginkgo;