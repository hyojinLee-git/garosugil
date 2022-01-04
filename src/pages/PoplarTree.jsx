import React from 'react';
import { Header, Section } from '../style/style';
const PoplarTree = () => {
    return (
        <div>
            <Header color="#A0DFC1">
                <h1>이팝나무 관리 TIP</h1>
                <img src="trees/Poplar_tree.png" alt="Poplar_tree"/>
            </Header>
            <Section>
                <h2>이팝나무의 유래?</h2>
                <p className="sub-title">
                    이팝나무는 어떤 나무일까요?
                </p>
                <p>
                나무 꽃이 밥알(이밥)을 닮았다고 하여 이팝나무라고 불러요
                </p>
                <h2>이팝나무 특징</h2>
                <p className="sub-title">
                    이팝나무를 잘 키우기 위해선 어떻게 해야할까요?
                </p>
                <p>
                공해에 강하여 가로수로 많이 사용되고, 정원이나 학교에 많이 심어요

                습한 곳에서도 잘 자라고 꽃이 아름다워 가로수나 정원수로 많이 사용되지만 제법 손이 많이 가요 

                가지가 튼튼해 보이지만 비바람에 약해 나뭇결을 따라 쉽게 갈라져 끊어지고, 태풍이 불면 그 끊어진 가지가 여기저기 날아다녀요 

                따라서 정원수로 심을 경우 너무 집 근처에 심지 않는 것이 좋아요
                </p>
            </Section>
        </div>
    );
};

export default PoplarTree;