import React, { useState } from "react";
import { Container } from "../styles/DictionaryPageStyled.js";
import DreamDic from "../components/DreamDic.js";

function DictionaryPage() {
    // 검색
    const [inputKeyword, setInputKeyword] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleInputKeyword = (event) => {
        setInputKeyword(event.target.value);
    };

    const search = (event) => {
        event.preventDefault();
        setSearchKeyword(inputKeyword);
        console.log(inputKeyword);
    };

    return (
        <Container>
            <div className="searchBox">
                <p className="searchTitle">꿈 해몽 사전</p>
                <form>
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={inputKeyword}
                        onChange={handleInputKeyword}
                    />
                    <button
                        className="searchBtn"
                        type="submit"
                        onClick={search}
                    >
                        검색
                    </button>
                </form>
            </div>

            <div className="categoryBox">
                <p className="categoryTitle">해몽 카테고리</p>
                <div className="categories">
                    <div className="category">전체</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                    <div className="category">물 꿈</div>
                    <div className="category">불 꿈</div>
                </div>
            </div>

            <div className="dreamBox">
                <DreamDic />
                <DreamDic />
                <DreamDic />
                <DreamDic />
            </div>
        </Container>
    );
}

export default DictionaryPage;
