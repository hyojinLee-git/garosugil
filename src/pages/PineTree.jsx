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
                <p>
                    <h2>소나무의 유래?</h2>
                    <p className="sub-title">소나무는 어떤 나무일까요?</p>
                    <p>
                    소나무라는 이름은 ‘으뜸’이라는 ‘수리’라는
                    말이 변한 우리말 ‘솔’에서 유래되었어요
                    </p>
                </p>
                <p>
                    <h2>소나무 특징</h2>
                    <p className="sub-title">소나무를 잘 키우기 위해선 어떻게 해야할까요?</p>
                    <p>
                    소나무는 성장이 더딘 편이고, 손이 많이 가요

                    이런 점이 오히려 관리만 잘하면 간판이 
                    가려지거나 하는 불편함을 막을 수 있어
                    다시금 가로수로 많이 쓰이고 있어요

                    또한 미세먼지 절감에 아주 탁월한데,
                    이는 바늘로 되어있는 침엽수 덕분이에요
                    </p>
                </p>
            </Section>
        </div>
    );
};

export default PineTree;