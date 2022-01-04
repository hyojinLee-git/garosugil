import React from 'react';
import { Header, Section } from '../style/style';
const Zelkova = () => {
    return (
        <div>
            <Header color="#8CCDC2">
                <h1>느티나무 관리 TIP</h1>
                <img src="trees/Zelkova.png" alt="Zelkova"/>
            </Header>
            <Section>
                <h2>느티나무의 유래?</h2>
                <p className="sub-title">
                    느티나무는 어떤 나무일까요?
                </p>
                <p>
                    우리나라 거의 모든 지역에서 무성하게 자라요. 주로 마을 어귀에 위치하여 시원한 나무그늘을 만들어줘서 정자나무로 많이 이용해요.
                </p>
                <h2>느티나무 특징</h2>
                <p className="sub-title">
                    느티나무를 잘 키우기 위해선 어떻게 해야할까요?
                </p>
                <p>
                    산기슭이나 골짜기 또는 마을 부근의 흙이 깊고 그늘진 땅에서 잘 자라요

                    느티나무는 내한성이 강한 수종으로 특별하게 동절기 월동작업을 진행하지 않아도 돼요.

                    그러나 어린 느티나무의 경우 동해 피해나 병충해 피해를 입을 수 있기 때문에 월동작업과 잠복소 설치작업을 진행하는 것이 좋아요 

                    또한 가뭄이나 외부 환경요인으로 수분공급이 적절하게 이뤄지지 않을 경우 스트레스나 피해를 입을 수 있어 수분관리가 중요해요
                </p>
            </Section>
        </div>
    );
};

export default Zelkova;