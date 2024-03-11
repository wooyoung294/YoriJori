'use client'
import React, { useEffect, useRef } from "react";
import styled from "./loginAnimation.module.css"
import KakaoLoginBtn from "@/app/(beforeWellcome)/_components/KakaoLoginBtn";
import AnonymousLoginBtn from "@/app/(beforeWellcome)/_components/AnonymousLoginBtn";
function LoginAnimation() {
    const animationElement = useRef<HTMLDivElement>(null);
    const animationInnerWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animationEndHandler = () => {
            if (animationInnerWrapper.current) {
                animationInnerWrapper.current.style.display = 'flex';
                animationInnerWrapper.current.style.flexDirection = 'column';
                animationInnerWrapper.current.style.gap = '11px';
                animationInnerWrapper.current.style.paddingTop = '16px';
            }
        };

        const element = animationElement.current;
        if (element) {
            element.addEventListener('animationend', animationEndHandler);
        }

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            if (element) {
                element.removeEventListener('animationend', animationEndHandler);
            }
        };
    }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시에만 이벤트 리스너를 추가하도록 함


    return (
        <div className={styled.animationImgWrapper} ref={animationElement}>
            <div className={styled.animationInnerWrapper} ref={animationInnerWrapper}>
                <div>
                    <KakaoLoginBtn />
                </div>
                <div>
                    <AnonymousLoginBtn />
                </div>
            </div>
        </div>
    );
}

export default LoginAnimation;
