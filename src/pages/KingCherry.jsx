import React from 'react';
import { Header, Section } from '../style/style';
const KingCherry = () => {
    return (
        <div>
            <Header color="#F4E9EA">
                <h1>왕벚나무 관리 TIP</h1>
                <img src="trees/King_cherry.png" alt="King_cherry"/>
            </Header>
            <Section>
                <p>
                    <h2>왕벚나무란?</h2>
                    <p className="sub-title">왕벚나무는 어떤 나무일까요?</p>
                    <p>
                        봄에 눈이 부실 듯 피어나는 화려한 꽃이 아름다운 왕벚나무는 대표적인 봄나무입니다. 전국 곳곳에 가로수, 공원수 등으로 식재되어 있어 봄꽃놀이를 하러 가기 좋아요
                    </p>
                </p>
                <p>
                    <h2>왕벚나무 특징</h2>
                        <p className="sub-title">왕벚나무를 잘 키우기 위해선 어떻게 해야할까요?</p>
                        <p>
                        왕벚나무는 양지바르고 비옥한 땅을 좋아하며 우리나라 전역에서 재배가 가능해요.
                        하지만 각종 해충이 많이 발생하는 편이기 때문에 적당한 살충제로 관리가 필요해요.
                        </p>
                    </p>
            </Section>
        </div>
    );
};

export default KingCherry;