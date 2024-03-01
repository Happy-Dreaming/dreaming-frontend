import React, { useState } from "react";
import { Container } from "../styles/CommunityPageStyled";
import theme from "../styles/theme.js";
import HallOfFame from "../components/HallOfFame.js";
import CommDiary from "../components/CommDiary.js";

function CommunityPage() {
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

    // 페이지네이션

    return (
        <Container>
            <div className="hallOfFame">
                <HallOfFame page="community" />
            </div>

            <div className="searchBox">
                <p>꿈 일기 검색</p>
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

            {/* 꿈 일기 컴포넌트 */}
            <CommDiary />
            <CommDiary />
            <CommDiary />
            <CommDiary />
            <CommDiary />
            <CommDiary />
            <CommDiary />
        </Container>
    );
}

export default CommunityPage;
